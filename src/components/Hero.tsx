import { Reveal } from "@/components/Reveal";
import { HeroCollage } from "@/components/HeroCollage";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink-faint">
              Personal fashion discovery
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-sans text-[3.2rem] font-semibold leading-[0.98] tracking-tight text-ink sm:text-[4.4rem] lg:text-[5rem]">
              Your style.
              <br />
              <span className="font-serif italic font-normal">Found.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Upload the outfits you love. Fashionista finds real clothes that
              match your personal style.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Discover your style
              </a>
              <span className="text-sm italic text-ink-faint">
                Coming soon
              </span>
            </div>
          </Reveal>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}
