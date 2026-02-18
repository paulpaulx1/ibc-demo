import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Trusted CPA Firm for Small Businesses",
  alternates: { canonical: "https://smgcpafirm.com/services"},
  description:
    "Professional Indianapolis bookkeeping services for small businesses and nonprofits. Expert bookkeeper handling QuickBooks, monthly reconciliation, and financial reporting for local businesses.",
  openGraph: {
    title: "Trusted CPA Firm for Small Businesses",
    description:
      "Professional Indianapolis bookkeeping services for small businesses and nonprofits.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
