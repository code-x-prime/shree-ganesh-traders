import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us — Sree Ganesh Traders",
  description:
    "Learn about Sree Ganesh Traders — our story, mission, and commitment to bringing premium quality spices and tea from North East India to businesses nationwide.",
};

export default function AboutPage() {
  return <AboutContent />;
}
