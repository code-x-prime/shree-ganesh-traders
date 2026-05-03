import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Sree Ganesh Traders",
  description:
    "Get in touch with Sree Ganesh Traders for wholesale pricing, bulk orders, and delivery enquiries. Call +91 6003312525 or WhatsApp us.",
};

export default function ContactPage() {
  return <ContactContent />;
}
