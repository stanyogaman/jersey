import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jersey Request Catalog",
  description:
    "Browse sports-inspired jersey and fanwear styles, then send a custom request for size, availability and delivery confirmation."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
