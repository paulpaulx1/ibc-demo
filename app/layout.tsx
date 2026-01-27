import type { Metadata } from "next";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

export const metadata: Metadata = {
  title: "SMG Accounting & Tax Advisors — CPA Firm in Indianapolis",
  description:
    "Trusted Indianapolis CPA firm offering accounting, tax preparation, bookkeeping, and CFO advisory for small businesses, nonprofits, and healthcare organizations.",
  openGraph: {
    title:
      "SMG Accounting & Tax Advisors — Indianapolis CPA & Advisory Services",
    description:
      "Expert accounting, tax planning, bookkeeping, and financial advisory services for Indianapolis businesses and nonprofits. Led by Scott Geans, CPA, MPA.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${baskerville.variable}`}>
      <body className="bg-white text-ink">{children}</body>
    </html>
  );
}
