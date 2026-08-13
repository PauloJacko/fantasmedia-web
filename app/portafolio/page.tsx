"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// array de imágenes desde portafolio1.png hasta portafolio21.png
const imagenesPortafolio: string[] = Array.from(
  { length: 21 },
  (_, index) => `/portafolio${index + 1}.png`
);

export default function PortafolioPage() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#121318] text-white relative selection:bg-[#c22533] selection:text-white">
      
      {/* ========================================================= */}
      {/* 1. ENCABEZADO Y NAVEGACIÓN */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 w-full bg-[#121318]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Botón Volver */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-zinc-300 hover:text-white hover:translate-x-[-4px] transition-all duration-300 group"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver</span>
          </Link>

          {/* Título Central */}
          <h1 className="text-sm md:text-base font-extrabold tracking-[0.3em] uppercase text-zinc-100 hidden sm:block">
            Portafolio <span className="text-[#c22533]">Fantasmedia</span>
          </h1>

          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/56941459096"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c22533] text-white text-xs font-bold uppercase tracking-[0.15em] shadow-[0_0_15px_rgba(194,37,51,0.5)] hover:bg-[#a01c27] hover:shadow-[0_0_25px_rgba(194,37,51,0.8)] hover:scale-105 transition-all duration-300"
          >
            <span>Cotizar</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </header>

      {/* 2. SECCIÓN PRINCIPAL / TITULAR */}

      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#c22533] shadow-lg">
          Nuestro Trabajo
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none drop-shadow-md">
          Galería <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">Visual</span>
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto font-light tracking-wide">
          Haz clic sobre cualquier imagen para verla en pantalla completa.
        </p>
      </section>

      {/* 3. GALERÍA DE IMÁGENES */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {imagenesPortafolio.map((src, index) => (
            <div
              key={index}
              onClick={() => setImagenSeleccionada(src)}
              className="group relative aspect-video sm:aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-lg hover:border-[#c22533]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(194,37,51,0.3)]"
            >
              <Image
                src={src}
                alt={`Portafolio Fantasmedia ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 4. MODAL AMPLIAR IMAGEN */}

      {imagenSeleccionada && (
        <div
          onClick={() => setImagenSeleccionada(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
        >
          {/* Botón Cerrar X */}
          <button
            onClick={() => setImagenSeleccionada(null)}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white bg-black/50 border border-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Cerrar imagen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contenedor de la Imagen Ampliada */}
          <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.9)] cursor-default"
          >
            <div className="relative w-full h-full">
              <Image
                src={imagenSeleccionada}
                alt="Imagen Ampliada"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}