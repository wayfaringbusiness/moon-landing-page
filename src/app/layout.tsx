import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moon Automation — AI Agents for Small Businesses",
  description:
    "Moon Automation builds AI agents that answer FAQs, qualify leads, and book appointments for small businesses.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Moon Automation",
    description:
      "AI agents for small businesses: faster responses, qualified leads, and fewer interruptions.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
