import iconAsset from "@/assets/vertex-icon.png.asset.json";

export function Logo({ className = "size-11" }: { className?: string }) {
  return (
    <span
      className={`${className} inline-flex items-center justify-center rounded-xl bg-ink p-1.5`}
    >
      <img
        src={iconAsset.url}
        alt="Exclusive Vertex"
        className="h-full w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}


export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <Logo className="size-11 shrink-0" />
      <span className="text-[13px] font-medium tracking-[0.18em] text-ink uppercase">
        Exclusive Vertex
      </span>
    </div>
  );
}
