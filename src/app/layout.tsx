import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISAH MARCELLE | Beleza e Autocuidado",
  description:
    "Agende seus procedimentos e reserve um momento especial para você.",
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
