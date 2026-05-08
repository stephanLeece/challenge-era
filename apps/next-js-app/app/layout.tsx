import type { Metadata } from "next";
import "@repo/ui/styles.css";
import "./globals.css";
import { Navbar } from "@repo/ui/navbar";

export const metadata: Metadata = {
  title: "Erasys Challenge",
  description: "From Stephan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar><p className="text-xl uppercase font-bold text-red-600">Hunqz</p></Navbar>
        {children}
      </body>
    </html>
  );
}
