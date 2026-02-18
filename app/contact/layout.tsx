import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SMG CPA | Schedule a Free Consultation",
  description:
    "Contact SMG CPA in Indianapolis to schedule a free consultation. Reach out by phone, email, or contact form to discuss bookkeeping, tax, and CFO services for your small business.",
  alternates: {
    canonical: "https://smgcpafirm.com/contact",
  },
};

export default function ContactLayout({
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
