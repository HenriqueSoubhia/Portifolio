import type { Metadata } from "next";
import "./globals.css";


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
      <body>{children}</body>
    </html>
  );
}
