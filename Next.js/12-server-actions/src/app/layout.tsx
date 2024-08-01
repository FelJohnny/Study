import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/menu";

export const metadata: Metadata = {
  title: "Exercicio route handler",
  description: "Exercicio route handler",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu/>
        {children}</body>
    </html>
  );
}
