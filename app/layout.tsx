import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganapti Website",
  description: "Best place to grt best quality murti's as per your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
