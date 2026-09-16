import { productImages } from "@/lib/images";

export const steps = [
  {
    index: "01",
    title: "Show us your style",
    description:
      "Upload outfits, screenshots or inspiration you already love.",
  },
  {
    index: "02",
    title: "AI learns your taste",
    description:
      "Fashionista understands colours, silhouettes, fits, brands and aesthetics.",
  },
  {
    index: "03",
    title: "Discover what to buy",
    description:
      "Find real products from retailers that fit your personal style.",
  },
];

export const styleAttributes = [
  "Colours",
  "Fit",
  "Silhouette",
  "Brands",
  "Materials",
  "Aesthetic",
  "Occasion",
  "Price preferences",
];

export const styleProfileTags = [
  "Scandinavian",
  "Minimal",
  "Relaxed fit",
  "Neutral colours",
  "Tailored",
  "No logos",
];

export type Product = {
  brand: string;
  name: string;
  price: string;
  image: string;
  tags: string[];
};

export const products: Product[] = [
  {
    brand: "COS",
    name: "Relaxed Wool Trousers",
    price: "€99",
    image: productImages.trousers,
    tags: ["Relaxed fit", "Neutral"],
  },
  {
    brand: "ARKET",
    name: "Heavyweight Overshirt",
    price: "€129",
    image: productImages.overshirt,
    tags: ["Workwear", "Earth tone"],
  },
  {
    brand: "A Day's March",
    name: "Merino Wool Knit",
    price: "€120",
    image: productImages.knit,
    tags: ["Merino", "Minimal"],
  },
  {
    brand: "Filippa K",
    name: "Leather Biker Jacket",
    price: "€410",
    image: productImages.jacket,
    tags: ["Tailored", "Statement"],
  },
  {
    brand: "Nudie Jeans",
    name: "Straight Selvedge Denim",
    price: "€140",
    image: productImages.denim,
    tags: ["Denim", "Everyday"],
  },
  {
    brand: "& Other Stories",
    name: "Leather Tote Bag",
    price: "€245",
    image: productImages.bag,
    tags: ["Accessory", "Leather"],
  },
];
