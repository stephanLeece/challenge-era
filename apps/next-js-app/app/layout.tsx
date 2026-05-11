import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@repo/ui/navbar";
import { Typography } from "@repo/ui/typography";
import "@repo/ui/styles.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "Erasys Challenge: Next.js App",
  description: "From Stephan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-hunqz-dark min-h-screen">
        <Navbar>
          <Link href={"/"}>
            <Typography as="h1" className="uppercase text-hunqz-red">
              Hunqz
            </Typography>
          </Link>
        </Navbar>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
