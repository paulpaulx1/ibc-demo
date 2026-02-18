import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPA Pricing & Service Tiers | SMG CPA Indianapolis",
  description:
    "Transparent flat-rate pricing for bookkeeping, accounting, and fractional CFO services. No hourly billing or surprise invoices—just clear monthly retainers for Indianapolis small businesses.",
  alternates: {
    canonical: "https://smgcpafirm.com/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
