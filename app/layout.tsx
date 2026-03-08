import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "krinAI - AI-First Business Suite for Location-Independent Entrepreneurs",
  description: "Streamline your business operations with AI-powered tools designed for digital nomads and remote entrepreneurs. Manage clients, automate workflows, and scale from anywhere.",
  keywords: ["AI business tools", "digital nomad", "remote work", "business automation", "CRM", "invoicing"],
  authors: [{ name: "krinAI" }],
  openGraph: {
    title: "krinAI - AI-First Business Suite for Location-Independent Entrepreneurs",
    description: "Streamline your business operations with AI-powered tools designed for digital nomads and remote entrepreneurs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
