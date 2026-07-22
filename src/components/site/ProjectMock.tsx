/**
 * ProjectMock — CSS-only sophisticated mockup used as project imagery.
 * Ratio via container; no external assets.
 */
export function ProjectMock({
  label,
  variant = "dashboard",
}: {
  label: string;
  variant?: "dashboard" | "site" | "mobile";
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface-2 ring-1 ring-hairline">
      {/* ambient gradient */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(1200px 500px at 20% -10%, rgba(47,107,255,0.18), transparent 60%), radial-gradient(800px 400px at 100% 110%, rgba(47,107,255,0.10), transparent 60%)",
        }}
      />
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative h-full w-full p-6 md:p-10">
        {/* browser chrome */}
        <div className="flex items-center gap-2 mb-6">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="ml-4 text-[10px] uppercase tracking-[0.28em] text-ink-subtle">
            {label}
          </span>
        </div>

        {variant === "dashboard" && <MockDashboard />}
        {variant === "site" && <MockSite />}
        {variant === "mobile" && <MockMobile />}
      </div>
    </div>
  );
}

function MockDashboard() {
  return (
    <div className="grid h-[calc(100%-2.5rem)] grid-cols-12 grid-rows-6 gap-4">
      <div className="col-span-3 row-span-6 rounded-xl bg-white/[0.03] ring-1 ring-hairline p-4">
        <div className="h-2 w-16 rounded bg-white/10 mb-4" />
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-2 w-full rounded bg-white/[0.06] mb-3" />
        ))}
      </div>
      <div className="col-span-6 row-span-2 rounded-xl bg-white/[0.03] ring-1 ring-hairline p-4">
        <div className="h-2 w-24 rounded bg-white/10 mb-4" />
        <div className="h-6 w-40 rounded bg-white/20" />
      </div>
      <div className="col-span-3 row-span-2 rounded-xl bg-brand/20 ring-1 ring-brand/40 p-4">
        <div className="h-2 w-16 rounded bg-white/30 mb-4" />
        <div className="h-6 w-24 rounded bg-white/70" />
      </div>
      <div className="col-span-9 row-span-4 rounded-xl bg-white/[0.03] ring-1 ring-hairline p-4 relative overflow-hidden">
        <div className="absolute inset-x-4 bottom-4 flex items-end gap-2 h-3/4">
          {[40, 60, 45, 75, 55, 80, 65, 90, 70, 85, 60, 95].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                background:
                  i % 3 === 0
                    ? "linear-gradient(to top, #2F6BFF, rgba(47,107,255,0.3))"
                    : "rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockSite() {
  return (
    <div className="h-[calc(100%-2.5rem)] flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="h-2 w-20 rounded bg-white/20" />
        <div className="flex gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-2 w-10 rounded bg-white/10" />
          ))}
          <div className="h-6 w-20 rounded-full bg-brand/80" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-4">
        <div className="h-3 w-24 rounded bg-brand/60" />
        <div className="h-6 w-3/4 rounded bg-white/25" />
        <div className="h-6 w-2/3 rounded bg-white/20" />
        <div className="h-2 w-1/2 rounded bg-white/10" />
        <div className="flex gap-3 mt-4">
          <div className="h-8 w-32 rounded-full bg-white/90" />
          <div className="h-8 w-32 rounded-full bg-white/5 ring-1 ring-white/20" />
        </div>
      </div>
    </div>
  );
}

function MockMobile() {
  return (
    <div className="h-[calc(100%-2.5rem)] flex items-center justify-center">
      <div className="h-full aspect-[9/16] max-h-full rounded-3xl bg-white/[0.03] ring-1 ring-hairline p-4 flex flex-col gap-3">
        <div className="h-1.5 w-16 mx-auto rounded bg-white/10" />
        <div className="flex-1 rounded-xl bg-white/[0.04] ring-1 ring-hairline" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 rounded-lg bg-white/[0.04]" />
          <div className="h-12 rounded-lg bg-brand/40" />
          <div className="h-12 rounded-lg bg-white/[0.04]" />
        </div>
      </div>
    </div>
  );
}
