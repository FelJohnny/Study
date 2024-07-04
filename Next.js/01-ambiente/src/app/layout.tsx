import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ambiente Next",
  description: "Descirção da pagina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
