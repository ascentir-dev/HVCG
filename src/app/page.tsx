import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FinancingBanner } from "@/components/FinancingBanner";
import { ServiceCTA } from "@/components/ServiceCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <DifferenceSection />
      <FinancingBanner />
      <ReviewsSection />
      <ServiceCTA />
    </>
  );
}
