import type { Metadata } from "next";
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
      <body>
        <Navbar>
          <Typography as="h1" className="uppercase text-red-600">
            Hunqz
          </Typography>
        </Navbar>
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
