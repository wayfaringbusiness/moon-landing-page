import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moon AI Automation — AI Agents for Small Businesses",
  description:
    "Custom AI agents and automations that capture leads 24/7, answer FAQs instantly, and save your team hours every week.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Moon AI Automation",
    description:
      "Custom AI agents and automations for small businesses: 24/7 lead capture, instant answers, and less busywork.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
