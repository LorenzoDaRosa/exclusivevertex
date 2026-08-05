import { useState, useEffect } from "react";
import { Reveal } from "./Reveal";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("vx-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("vx-cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-sm">
      <Reveal>
        <div className="rounded-2xl bg-surface p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-hairline">
          <p className="text-sm leading-relaxed text-ink-muted">
            Este site utiliza cookies para proporcionar uma experiência premium e analisar o tráfego. Ao continuar, você concorda com nossa política de privacidade conforme a LGPD.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={accept}
              className="flex-1 rounded-full bg-brand py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Aceitar
            </button>
            <button
              onClick={() => setShow(false)}
              className="flex-1 rounded-full py-2.5 text-sm font-medium text-ink ring-1 ring-hairline hover:bg-surface-2 transition-colors"
            >
              Recusar
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
