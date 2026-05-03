import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OfferBanner } from "@/components/OfferBanner";
import { ColorwaysSection } from "@/components/ColorwaysSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TechnologySection } from "@/components/TechnologySection";
import { MarketsSection } from "@/components/MarketsSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OfferBanner />
        <ColorwaysSection />
        <ProductsSection />
        <TechnologySection />
        <MarketsSection />
        <DifferenceSection />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
