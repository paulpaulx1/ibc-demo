import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Scott Geans, CPA | SMG CPA Indianapolis",
  description:
    "Meet Scott Geans, CPA — 24+ years of financial leadership experience spanning Fortune 500 finance, CFO roles, and small business ownership. Serving Indianapolis small businesses with expert accounting and advisory.",
  alternates: {
    canonical: "https://smgcpafirm.com/about",
  },
};

export default function AboutLayout({
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
