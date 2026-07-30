import iconLogo from "@/assets/4.png";
import wordmarkLogo from "@/assets/4.png";

export function Logo({ className = "size-11" }: { className?: string }) {
  return (
    <span className={`${className} inline-flex items-center justify-center`}>
      <img
        src={iconLogo}
        alt="Exclusive Vertex"
        className="h-full w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

export function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src={wordmarkLogo}
      alt="Exclusive Vertex"
      className={`${className} w-auto object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}
