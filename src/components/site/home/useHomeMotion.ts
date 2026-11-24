import { useEffect, type RefObject } from "react";
import { clamp, sceneIndex, sceneStep, sceneTravel } from "./scroll-model";

/** One passive, frame-batched scroll loop, scoped to the public home only. */
export function useHomeMotion(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const header = root.querySelector<HTMLElement>(".home-header");
    const story = root.querySelector<HTMLElement>(".home-story");
    const shift = root.querySelector<HTMLElement>(".home-shift");
    const stage = root.querySelector<HTMLElement>(".home-shift-stage");
    const logo = root.querySelector<HTMLImageElement>(".home-shift-logo");
    if (!header || !story || !shift || !stage || !logo) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const words = [...root.querySelectorAll<HTMLElement>(".home-story-word")];
    const reveals = [...root.querySelectorAll<HTMLElement>("[data-home-reveal]")];
    const scenes = [...root.querySelectorAll<HTMLElement>("[data-home-sequence]")].map((section) => ({
      section,
      layout: section.querySelector<HTMLElement>(".home-sequence-layout"),
      buttons: [...section.querySelectorAll<HTMLButtonElement>("[data-home-step]")],
      panels: [...section.querySelectorAll<HTMLElement>("[data-home-panel]")],
      active: -1,
      step: 182,
      nav: 72,
    }));
    let frame: number | null = null;

    function setScene(scene: typeof scenes[number], index: number) {
      if (scene.active === index) return;
      // Do not leave keyboard focus in a panel that scrolling is about to hide.
      const previous = scene.panels[scene.active];
      if (previous?.contains(document.activeElement)) scene.buttons[index]?.focus({ preventScroll: true });
      scene.active = index;
      scene.buttons.forEach((button, stepIndex) => {
        if (stepIndex === index) button.setAttribute("aria-current", "step");
        else button.removeAttribute("aria-current");
        scene.panels[stepIndex]?.toggleAttribute("data-active", stepIndex === index);
      });
    }

    function draw() {
      frame = null;
      if (preference.matches) return;
      const height = window.innerHeight;
      // Read all positions before writing animation values.
      const reading = clamp((height * .39 - (story?.getBoundingClientRect().top ?? 0)) / (height * .53));
      const zoom = clamp((height * .22 - (shift?.getBoundingClientRect().top ?? 0)) / (height * .53));
      const positions = scenes.map((scene) => scene.section.getBoundingClientRect().top);
      const revealPositions = reveals.map((item) => item.getBoundingClientRect().top - (Number.parseFloat(item.style.getPropertyValue("--reveal-offset")) || 0));
      const cover = Math.max((stage?.clientWidth ?? 1) / (logo?.offsetWidth || 1), (stage?.clientHeight ?? 1) / (logo?.offsetHeight || 1));
      const fade = clamp((zoom - .72) / .24);
      words.forEach((word, index) => word.style.setProperty("--ink-level", `${clamp((reading * (words.length + 1) - index) / 1.55) * 100}%`));
      stage?.style.setProperty("--logo-scale", String(Math.pow(cover * 1.1, Math.min(zoom / .72, 1)) * (1 + fade * .2)));
      stage?.style.setProperty("--logo-opacity", String(1 - fade));
      scenes.forEach((scene, index) => {
        const top = positions[index];
        if (top !== undefined && scene.section.hasAttribute("data-sequence-ready")) setScene(scene, sceneIndex(scene.nav - top, scene.step, scene.panels.length));
      });
      const mobile = window.innerWidth <= 680;
      reveals.forEach((item, index) => {
        const top = revealPositions[index];
        if (top === undefined) return;
        const progress = clamp((height * (mobile ? .97 : .9) - top - (Number(item.dataset['homeReveal']) || 0)) / (mobile ? 85 : 125));
        const eased = 1 - Math.pow(1 - progress, 2);
        item.style.setProperty("--reveal", String(eased));
        item.style.setProperty("--reveal-offset", `${(1 - eased) * 12}px`);
      });
    }

    function queueDraw() {
      if (frame === null) frame = window.requestAnimationFrame(draw);
    }

    function fit() {
      const nav = header?.offsetHeight ?? 72;
      const available = window.innerHeight - nav;
      const step = sceneStep(window.innerWidth);
      root?.toggleAttribute("data-motion", !preference.matches);
      for (const scene of scenes) {
        scene.step = step;
        scene.nav = nav;
        scene.section.toggleAttribute("data-sequence-ready", !preference.matches);
        // Keep every panel readable, including short phones and landscape viewports.
        const stageHeight = Math.max(available, (scene.layout?.scrollHeight ?? 0) + 48);
        scene.section.style.setProperty("--stage-height", `${stageHeight}px`);
        scene.section.style.setProperty("--scene-travel", `${sceneTravel(step, scene.panels.length)}px`);
        if (preference.matches) {
          scene.buttons.forEach((button) => button.removeAttribute("aria-current"));
          scene.active = -1;
        }
      }
      queueDraw();
    }

    const cleanups = scenes.flatMap((scene) => scene.buttons.map((button, index) => {
      const go = () => {
        const top = scene.section.getBoundingClientRect().top + window.scrollY - scene.nav;
        window.scrollTo({ top: top + index * scene.step, behavior: preference.matches ? "instant" : "smooth" });
      };
      button.addEventListener("click", go);
      return () => button.removeEventListener("click", go);
    }));
    fit();
    window.addEventListener("scroll", queueDraw, { passive: true });
    window.addEventListener("resize", fit, { passive: true });
    preference.addEventListener("change", fit);
    // Font loading can alter the minimum height of the pinned information.
    void document.fonts.ready.then(() => { if (root.isConnected) fit(); });
    logo.addEventListener("load", queueDraw);
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueDraw);
      window.removeEventListener("resize", fit);
      preference.removeEventListener("change", fit);
      logo.removeEventListener("load", queueDraw);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [ref]);
}