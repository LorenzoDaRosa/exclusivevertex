import iconAsset from "@/assets/vertex-icon.jpeg.asset.json";

export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <img
      src={iconAsset.url}
      alt="Exclusive Vertex"
      className={`${className} object-contain`}
      loading="eager"
      decoding="async"
    />
  );
}

export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <Logo className="size-7 shrink-0" />
      <span className="text-[13px] font-medium tracking-[0.18em] text-ink uppercase">
        Exclusive Vertex
      </span>
    </div>
  );
}
