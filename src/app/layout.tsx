import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BTC News & Updates - Bitcoin Info News",
  description: "Get the latest Bitcoin, crypto, and blockchain news. In-depth analysis, market updates, and trading insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-foreground">
        {children}
      </body>
    </html>
  );
}
