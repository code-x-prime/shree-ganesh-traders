import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Products & Services — Sree Ganesh Traders",
  description:
    "Browse our full catalog of premium spices and Assam Gold Tea. Wholesale pricing available for bulk B2B orders. Pan India delivery.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
