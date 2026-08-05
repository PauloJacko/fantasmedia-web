// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Asegúrate de importar tus estilos globales

export const metadata: Metadata = {
  title: "Fantasmedia Producciones",
  description: "Narrativa Visual & Estética Cinematográfica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}