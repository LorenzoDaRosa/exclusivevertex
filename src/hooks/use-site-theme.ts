import { useEffect, useState } from "react";
import { savedTheme, type SiteTheme } from "@/lib/theme";

export function useSiteTheme() {
  const [theme, setTheme] = useState<SiteTheme>("light");
  useEffect(() => {
    const sync = () => setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const stored = (event: StorageEvent) => {
      if (event.key !== "vx-theme") return;
      document.documentElement.classList.toggle("dark", savedTheme(event.newValue) === "dark");
    };
    sync();
    window.addEventListener("storage", stored);
    return () => { observer.disconnect(); window.removeEventListener("storage", stored); };
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", next === "dark");
    setTheme(next);
    try { localStorage.setItem("vx-theme", next); } catch { /* The theme still works when storage is unavailable. */ }
  }
  return { theme, toggleTheme };
}