import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Values | SMG CPA Indianapolis",
  description:
    "SMG CPA is a family-run firm guided by honesty, integrity, and stewardship. Learn how our faith-driven values shape the way we serve small business owners in Indianapolis.",
  alternates: {
    canonical: "https://smgcpafirm.com/values",
  },
};

export default function ValuesLayout({
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