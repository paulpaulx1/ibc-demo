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
  title: "Integrity Business Consulting, LLC — CPA & Advisory",
  description:
    "Trusted CPA and advisory services for small businesses, nonprofits, and individuals.",
  openGraph: {
    title: "Integrity Business Consulting, LLC — CPA & Advisory",
    description:
      "Trusted CPA and advisory services for small businesses, nonprofits, and individuals.",
    images: ["/og-image.png"],
  },
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
