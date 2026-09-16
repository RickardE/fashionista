import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-2xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
            From inspiration to your next outfit.
          </h2>
        </Reveal>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <StaggerItem
              key={step.index}
              className="border-t border-line pt-8"
            >
              <span className="font-serif text-2xl italic text-ink-faint">
                {step.index}
              </span>
              <h3 className="mt-6 text-2xl font-medium tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
