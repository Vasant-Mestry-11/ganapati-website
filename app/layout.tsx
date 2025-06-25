import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

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
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
