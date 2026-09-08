type DeviceShowcaseProps = {
  desktopImage: string;
  mobileImage: string;
  alt: string;
};

export function DeviceShowcase({ desktopImage, mobileImage, alt }: DeviceShowcaseProps) {
  return (
    <div className="relative mx-auto w-full max-w-[1280px] px-2 pb-4 pt-4 sm:px-6 sm:pb-6 lg:px-10 lg:pt-6">
      <div className="relative mr-14 sm:mr-24 lg:mr-40">
        <div className="overflow-hidden rounded-t-xl border-[5px] border-ink bg-ink shadow-premium sm:rounded-t-2xl sm:border-[8px]">
          <div className="aspect-[16/9.5] overflow-hidden bg-surface-2">
            <img
              src={desktopImage}
              alt={`${alt} no computador`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>
        </div>
        <div className="relative -mx-3 h-3 rounded-b-xl bg-ink sm:-mx-6 sm:h-5">
          <span className="absolute left-1/2 top-0 h-1.5 w-12 -translate-x-1/2 rounded-b-full bg-surface-3 sm:h-2 sm:w-20" />
        </div>
        <div className="mx-auto h-1.5 w-[96%] rounded-b-full bg-ink/20 blur-[1px]" />
      </div>

      <div className="absolute bottom-2 right-1 w-[26%] min-w-[88px] max-w-[260px] sm:bottom-4 sm:right-5 lg:bottom-6 lg:right-8">
        <div className="overflow-hidden rounded-[18px] border-[5px] border-ink bg-ink shadow-premium sm:rounded-[28px] sm:border-[8px]">
          <div className="relative aspect-[9/18] overflow-hidden rounded-[12px] bg-surface-2 sm:rounded-[19px]">
            <img
              src={mobileImage}
              alt={`${alt} no celular`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <span className="absolute left-1/2 top-1.5 h-1.5 w-8 -translate-x-1/2 rounded-full bg-ink sm:top-2 sm:h-2 sm:w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}