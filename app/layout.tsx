import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fantasmedia.cl"), // Cambia por tu dominio real
  title: {
    default: "Fantasmedia | Productora Audiovisual y Contenido Digital",
    template: "%s | Fantasmedia",
  },
  description:
    "Productora audiovisual en Chile especializada en fotografía, publicidad, videoclips, cine y contenido digital con estándar cinematográfico.",
  keywords: [
    "Productora Audiovisual",
    "Producción de Video Chile",
    "Fotografía Publicitaria",
    "Videoclips",
    "Publicidad Digital",
    "Cine y Streaming",
    "Fantasmedia Producciones",
  ],
  authors: [{ name: "Fantasmedia Producciones" }],
  creator: "Fantasmedia",
  openGraph: {
    title: "Fantasmedia | Productora Audiovisual",
    description:
      "Narrativa visual y estética cinematográfica. Especialistas en fotografía, publicidad, videoclips y eventos.",
    url: "https://www.fantasmedia.cl",
    siteName: "Fantasmedia Producciones",
    images: [
      {
        url: "/logo-fantasmedia.png",
        width: 1200,
        height: 630,
        alt: "Fantasmedia Producciones",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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