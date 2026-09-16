import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { styleAttributes, styleProfileTags } from "@/lib/data";
import { styleProfileImage } from "@/lib/images";

const chipPositions = [
  "left-[6%] top-[10%]",
  "right-[8%] top-[6%]",
  "left-[-4%] top-[46%]",
  "right-[-2%] top-[40%]",
  "left-[10%] bottom-[8%]",
  "right-[6%] bottom-[14%]",
];

export function StyleProfile() {
  return (
    <section id="style" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="max-w-lg">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink-faint">
              Personal style
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Not just what you search for.{" "}
              <span className="font-serif italic font-normal">
                What you actually like.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Fashionista doesn&apos;t match keywords. It builds a profile of how
              you actually dress, learning the details that make an outfit
              feel like yours.
            </p>
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
            {styleAttributes.map((attribute) => (
              <StaggerItem
                key={attribute}
                className="border-t border-line pt-4 text-sm text-ink"
              >
                {attribute}
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm border border-line bg-paper-deep sm:max-w-lg">
            <Image
              src={styleProfileImage.src}
              alt={styleProfileImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="editorial-img-mono object-cover"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:hidden">
            {styleProfileTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-surface px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 hidden sm:block">
            {styleProfileTags.map((tag, i) => (
              <span
                key={tag}
                className={`pointer-events-auto absolute ${chipPositions[i % chipPositions.length]} rounded-full border border-line bg-surface px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink-soft shadow-[0_2px_16px_-4px_rgba(22,20,15,0.15)]`}
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
