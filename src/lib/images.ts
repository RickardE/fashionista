/**
 * Central image registry.
 *
 * Every visual on the site is sourced from here so imagery can be swapped
 * for licensed / in-house photography later without touching components.
 * Replace a `src` with any remote URL (and update `next.config.ts`
 * `images.remotePatterns` if the domain changes) or a local `/public` path.
 */

export type EditorialImage = {
  src: string;
  alt: string;
};

function unsplash(id: string, params = "w=1400&q=80&fm=jpg&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const heroImages: EditorialImage[] = [
  {
    src: unsplash("1515372039744-b8f02a3ae446", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Woman in a relaxed white summer dress descending an outdoor staircase",
  },
  {
    src: unsplash("1620799140408-edc6dcb6d633", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Flat lay of a white sweatshirt, straight-leg jeans and white sneakers",
  },
  {
    src: unsplash("1544022613-e87ca75a784a", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Portrait in an oversized olive utility jacket and knit beanie",
  },
  {
    src: unsplash("1608234807905-4466023792f5", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Tailored white blouse worn with a black button-front skirt",
  },
  {
    src: unsplash("1441984904996-e0b6ba687e04", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Minimal clothing rail inside a boutique with warm pendant lighting",
  },
  {
    src: unsplash("1490481651871-ab68de25d43d", "w=900&q=80&fm=jpg&fit=crop"),
    alt: "Neutral-toned garments hanging against an off-white wall",
  },
];

export const styleProfileImage: EditorialImage = {
  src: unsplash("1487222477894-8943e31ef7b2", "w=1200&q=80&fm=jpg&fit=crop"),
  alt: "Portrait wearing a relaxed tan jacket layered over a knit and tailored shirt",
};

export const finalCtaImage: EditorialImage = {
  src: unsplash("1445205170230-053b83016050", "w=1600&q=80&fm=jpg&fit=crop"),
  alt: "Row of neutral-toned coats and knitwear hanging in soft studio light",
};

export const productImages = {
  trousers: unsplash("1594633312681-425c7b97ccd1", "w=900&q=80&fm=jpg&fit=crop"),
  overshirt: unsplash("1591047139829-d91aecb6caea", "w=900&q=80&fm=jpg&fit=crop"),
  knit: unsplash("1556905055-8f358a7a47b2", "w=900&q=80&fm=jpg&fit=crop"),
  jacket: unsplash("1520975954732-35dd22299614", "w=900&q=80&fm=jpg&fit=crop"),
  denim: unsplash("1516762689617-e1cffcef479d", "w=900&q=80&fm=jpg&fit=crop"),
  bag: unsplash("1584917865442-de89df76afd3", "w=900&q=80&fm=jpg&fit=crop"),
};
