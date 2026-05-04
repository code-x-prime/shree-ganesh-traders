import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Sree Ganesh Traders — Premium Spices & Tea from North East India",
  description:
    "Sree Ganesh Traders is a premium B2B distributor of natural spices and Assam CTC Tea from North East India. Pan India delivery available. 100% natural, chemical free.",
  metadataBase: new URL("https://sreeganeshtraders.com"),
  keywords: "spices, turmeric, ginger, assam tea, north east india, wholesale spices, B2B, guwahati, assam ctc tea",
  openGraph: {
    title: "Sree Ganesh Traders — Pure Roots. Natural Goodness.",
    description: "Premium quality spices & tea from North East India. Direct farm sourcing. Pan India delivery.",
    type: "website",
    locale: "en_IN",
    url: "https://sreeganeshtraders.com",
    siteName: "Sree Ganesh Traders",
  },
  verification: {
    google: "lxV_lPqh4tH1q8pNKOt_Zdl_0k1T01TFABeSbDE18-Q",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-bg-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
