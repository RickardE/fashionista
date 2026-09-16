import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { finalCtaImage } from "@/lib/images";

export function CTA() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-28 sm:min-h-[80vh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={finalCtaImage.src}
          alt={finalCtaImage.alt}
          fill
          sizes="100vw"
          className="editorial-img object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/70 to-ink/40" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-sans text-5xl font-semibold leading-[0.98] tracking-tight text-paper sm:text-7xl">
            Stop searching.
            <br />
            <span className="font-serif italic font-normal">
              Start discovering.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-paper/80">
            Your wardrobe should feel like you.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="#waitlist"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-paper px-8 py-4 text-sm font-medium text-ink transition-colors hover:bg-accent hover:text-paper"
          >
            Get early access
          </a>
        </Reveal>
      </div>
    </section>
  );
}
