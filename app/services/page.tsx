import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "CPA Services for Small Businesses in Indianapolis | SMG",
  alternates: { canonical: "https://smgcpafirm.com/services"},
  description:
    "Professional Indianapolis bookkeeping services for small businesses and nonprofits. Expert bookkeeper handling QuickBooks, monthly reconciliation, and financial reporting for local businesses.",
  openGraph: {
    title: "CPA Services for Small Businesses in Indianapolis | SMG",
    description:
      "Professional Indianapolis bookkeeping services for small businesses and nonprofits.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
