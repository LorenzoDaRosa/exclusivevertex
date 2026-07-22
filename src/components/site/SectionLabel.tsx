export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-brand">
      <span className="h-px w-6 bg-brand" />
      {children}
    </span>
  );
}
