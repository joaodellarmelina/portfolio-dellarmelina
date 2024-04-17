import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Vitor Dellarmelina",
  description: "Portifólio criado com intuito de divulgar meu trabalho como desenvolvedor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="!scroll-smooth overflow-x-hidden">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
