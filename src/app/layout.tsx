import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Offsite Automations - Automation Systems for Landscaping & Home Services",
  description:
    "Offsite Automations builds custom automations for landscaping and home service businesses - quoting, intake, follow-up, scheduling, and CRM updates - so owners reclaim time and close more jobs.",
  // TODO: set to your real production domain once deployed.
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Offsite Automations",
    description:
      "Custom automation systems for landscaping & home services: faster quoting, consistent follow-up, and fewer admin hours.",
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
