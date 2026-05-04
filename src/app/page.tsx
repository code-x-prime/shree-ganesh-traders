import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import BadgeStrip from "@/components/shared/BadgeStrip";
import ProductShowcase from "@/components/home/ProductShowcase";
import TeaSection from "@/components/home/TeaSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import MapSection from "@/components/home/MapSection";
import HowItWorks from "@/components/home/HowItWorks";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Sree Ganesh Traders — Premium Spices & Tea from North East India",
  description:
    "B2B wholesale distributor of premium spices and Assam CTC Tea from North East India. 100% Natural, Chemical Free. Pan India Delivery.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BadgeStrip />
      <ProductShowcase />
      <TeaSection />
      <WhyChooseUs />
      <MapSection />
      <HowItWorks />
      <CTABanner />
    </>
  );
}
