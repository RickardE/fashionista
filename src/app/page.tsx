import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { StyleProfile } from "@/components/StyleProfile";
import { ProductDiscovery } from "@/components/ProductDiscovery";
import { CTA } from "@/components/CTA";
import { Waitlist } from "@/components/Waitlist";
import { RetailerNote } from "@/components/RetailerNote";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <StyleProfile />
        <ProductDiscovery />
        <CTA />
        <Waitlist />
        <RetailerNote />
      </main>
      <Footer />
    </>
  );
}
