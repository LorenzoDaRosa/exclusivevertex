export function Logo({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 95 L20 5 L48 5 Z" fill="#F4F5F7" />
      <path d="M50 95 L80 5 L52 5 Z" fill="#2F6BFF" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <Logo className="size-6 shrink-0" />
      <span className="text-[13px] font-medium tracking-[0.18em] text-ink uppercase">
        Exclusive Vertex
      </span>
    </div>
  );
}
