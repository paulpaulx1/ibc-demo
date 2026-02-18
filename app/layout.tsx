import type { Metadata } from "next";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smgcpafirm.com"),
  title: "Trusted CPA Firm for Small Businesses",
  description:
    "Leading accounting firm in Indianapolis offering tax preparation, bookkeeping services, and CFO advisory. SMG serves small businesses, nonprofits, and healthcare organizations throughout Indianapolis, Indiana with expert CPA guidance.",
  verification: {
    google: "5lZNlyTwBjiepCFdbcuimZyg_Af4Ug4yRpryntcXmaw",
  },
  openGraph: {
    title:
      "Indianapolis Accounting Firm | Tax, Bookkeeping & CFO Services | SMG",
    description:
      "Leading accounting firm in Indianapolis offering tax preparation, bookkeeping services, and CFO advisory. SMG serves small businesses, nonprofits, and healthcare organizations throughout Indianapolis, Indiana with expert CPA guidance.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Indianapolis Accounting Firm | Tax, Bookkeeping & CFO Services | SMG",
    description:
      "Leading accounting firm in Indianapolis offering tax preparation, bookkeeping services, and CFO advisory.",
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
      <head>
        <GoogleAnalytics />
      </head>
      <body className="bg-white text-ink">{children}</body>
    </html>
  );
}