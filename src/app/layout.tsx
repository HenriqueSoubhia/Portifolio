import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henrique Soubhia",
  description: "Desenvolvedor Fullstack com experiência em React, Node.js, HTML, CSS, JavaScript, Python, Express.js, Firebase e MongoDB. Apaixonado por criar soluções inovadoras com foco em UX/UI e APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
