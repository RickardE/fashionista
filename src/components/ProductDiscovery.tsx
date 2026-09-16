import Image from "next/image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { products } from "@/lib/data";

export function ProductDiscovery() {
  return (
    <section id="discover" className="border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2 className="max-w-xl text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Your style, across thousands of products.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-base leading-relaxed text-ink-soft">
              Fashionista searches products from multiple fashion retailers and
              surfaces the pieces that best match your personal style.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line bg-paper-deep">
                <Image
                  src={product.image}
                  alt={`${product.brand} ${product.name}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="editorial-img object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                    {product.brand}
                  </p>
                  <p className="mt-1 text-base text-ink">{product.name}</p>
                </div>
                <p className="whitespace-nowrap text-base text-ink">
                  {product.price}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.1em] text-ink-faint"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-14 text-sm text-ink-faint">
            Illustrative products shown for demonstration only. Availability,
            pricing and retailers may vary.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
