import iconAsset from "@/assets/vertex-icon-2.png.asset.json";
import wordmarkAsset from "@/assets/vertex-wordmark.png.asset.json";

export function Logo({ className = "size-11" }: { className?: string }) {
  return (
    <span className={`${className} inline-flex items-center justify-center`}>
      <img
        src={iconAsset.url}
        alt="Exclusive Vertex Logo"
        className="h-full w-full object-contain"
        width="44"
        height="44"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

export function Wordmark({ className = "h-8" }: { className?: string }) {
  return (
    <img
      src={wordmarkAsset.url}
      alt="Exclusive Vertex"
      className={`${className} w-auto object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}
