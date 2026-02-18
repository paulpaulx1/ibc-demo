import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Resources & Important Deadlines | SMG CPA Indianapolis",
  description:
    "Federal and Indiana state tax resources, payment portals, business links, and key 2026 tax deadlines for small business owners in Indianapolis.",
  alternates: {
    canonical: "https://smgcpafirm.com/resources",
  },
};

export default function ServicesLayout({
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
