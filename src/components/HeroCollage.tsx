"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroImages } from "@/lib/images";

const [dress, flatlayKnit, streetwear, tailored, boutique, hanging] =
  heroImages;

const tileVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Tile({
  image,
  className,
  priority = false,
  sizes,
}: {
  image: (typeof heroImages)[number];
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <motion.div
      variants={tileVariants}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-sm border border-line bg-paper-deep ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes ?? "(min-width: 640px) 33vw, 50vw"}
        className="editorial-img object-cover"
      />
    </motion.div>
  );
}

export function HeroCollage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
      className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <Tile image={dress} className="aspect-[3/4]" priority />
        <Tile image={boutique} className="aspect-square" />
      </div>

      <div className="flex flex-col gap-3 pt-8 sm:gap-4 sm:pt-14">
        <Tile image={flatlayKnit} className="aspect-square" />
        <Tile image={streetwear} className="aspect-[3/4]" />
      </div>

      <div className="col-span-2 flex flex-row gap-3 sm:col-span-1 sm:flex-col sm:gap-4">
        <Tile image={tailored} className="aspect-[3/4] flex-1 sm:flex-none" />
        <Tile image={hanging} className="aspect-[3/4] flex-1 sm:aspect-square" />
      </div>
    </motion.div>
  );
}
