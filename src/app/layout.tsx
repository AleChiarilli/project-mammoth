import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { RadixTheme } from "@/components/RadixTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Mammoth",
  description: "Restaurant order system by Alex Chiarilli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RadixTheme>{children}</RadixTheme>
      </body>
    </html>
  );
}
