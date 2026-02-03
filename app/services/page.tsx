import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "SMG Indianapolis Bookkeeping | Accounting & Tax Advisors",
  description:
    "Professional Indianapolis bookkeeping services for small businesses and nonprofits. Expert bookkeeper handling QuickBooks, monthly reconciliation, and financial reporting for local businesses.",
  openGraph: {
    title: "SMG Indianapolis Bookkeeping | Accounting & Tax Advisors",
    description:
      "Professional Indianapolis bookkeeping services for small businesses and nonprofits.",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
