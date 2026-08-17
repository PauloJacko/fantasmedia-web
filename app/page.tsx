"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CinematicIntro from "@/app/components/CinematicIntro";

interface Servicio {
  id: string;
  titulo: string;
  imagen: string;
  color: string;
  descripcion: string;
}

export default function Home() {

  const [showIntro, setShowIntro] = useState(true);

  const [activeService, setActiveService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setActiveService((prev) => (prev === index ? null : index));
  };

const clientes = [
    "/logo-cliente1.png",
    "/logo-cliente2.png",
    "/logo-cliente3.png",
    "/logo-cliente4.png",
    "/logo-cliente5.png",
    "/logo-cliente6.png",
    "/logo-cliente7.png",
    "/logo-cliente8.png",
    "/logo-cliente9.png",
    "/logo-cliente10.png",
    "/logo-cliente11.png",
    "/logo-cliente12.png",
    "/logo-cliente13.png",
    "/logo-cliente14.jpeg",
  ];

  const servicios: Servicio[] = [
    {
      id: "fotografia",
      titulo: "Fotografía",
      imagen: "/fantasmedia-web4.png",
      color: "from-red-900/80 via-red-600/30 to-transparent",
      descripcion:
        "Sesiones fotográficas publicitarias, editoriales y de moda con tratamiento de iluminación cinematográfica y retoque digital de alta fidelidad.",
    },
    {
      id: "publicidad",
      titulo: "Publicidad",
      imagen: "/fantasmedia-web5.png",
      color: "from-amber-900/80 via-amber-600/30 to-transparent",
      descripcion:
        "Comerciales y campañas creativas diseñadas para captar la atención de tu audiencia y potenciar el valor de marca en cualquier formato.",
    },
    {
      id: "videoclip",
      titulo: "Videoclip",
      imagen: "/fantasmedia-web6.png",
      color: "from-purple-900/80 via-purple-600/30 to-transparent",
      descripcion:
        "Producción de videos musicales con propuesta conceptual potente, dinamismo visual, diseño de arte y postproducción de estándar internacional.",
    },
    {
      id: "corporativo",
      titulo: "Corporativo",
      imagen: "/fantasmedia-web9.png",
      color: "from-cyan-900/80 via-cyan-600/30 to-transparent",
      descripcion:
        "Contenido audiovisual institucional, retratos ejecutivos y cobertura de instalaciones. Comunicación estratégica para proyectar la identidad, valores y profesionalismo de tu empresa.",
    },
    {
      id: "cine",
      titulo: "Cine",
      imagen: "/fantasmedia-web7.png",
      color: "from-blue-900/80 via-blue-600/30 to-transparent",
      descripcion:
        "Cortometrajes, documentales y proyectos de ficción. Desarrollamos historias profundas cuidando la narrativa, el ritmo y la óptica cinematográfica.",
    },
    {
      id: "eventos",
      titulo: "Eventos",
      imagen: "/fantasmedia-web8.png",
      color: "from-emerald-900/80 via-emerald-600/30 to-transparent",
      descripcion:
        "Cobertura audiovisual multi-cámara para lanzamientos, festivales y conferencias, capturando la energía del momento con calidad impecable.",
    },
    {
      id: "streaming",
      titulo: "Streaming",
      imagen: "/fantasmedia-web11.png",
      color: "from-[#c22533]/90 via-[#c22533]/30 to-transparent",
      descripcion:
        "Transmisiones en vivo de alta definición con switcheo en directo, gráficas personalizadas e interacción fluida para tus plataformas.",
    },
  ];

  return (
    <>
      {/* 1. MOSTRAR INTRO CINEMATOGRÁFICA */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* 2. CONTENIDO PRINCIPAL */}
      <main
        className={`relative w-full overflow-x-hidden bg-black text-white font-sans selection:bg-[#c22533] selection:text-white scroll-pt-12 transition-opacity duration-1000 ${
          showIntro ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
        }`}
      >
        {/* 1. VIDEO DE FONDO PERMANENTE */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-105 filter brightness-95 contrast-105"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            Tu navegador no soporta videos en HTML5.
          </video>

          {/* Capas de degradado atmosféricas */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
          <div className="absolute inset-0 bg-[#c22533]/10 mix-blend-multiply" />
        </div>

      {/* SECCIÓN 1: VISTA INICIAL */}

      <section className="relative z-10 w-full h-screen flex flex-col justify-between items-center px-6 py-8">
        
        {/* Header: Mascota y Logo */}
        <header className="w-full pt-4 md:pt-6 flex justify-center">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0 drop-shadow-[0_0_25px_rgba(194,37,51,0.95)]">
              <Image
                src="/mascota-fantasmedia.png"
                alt="Mascota Fantasmedia"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative w-56 h-14 md:w-80 md:h-20">
              <Image
                src="/logo-fantasmedia.png"
                alt="Fantasmedia Producciones"
                fill
                className="object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
                priority
              />
            </div>
          </div>
        </header>

        {/* Navegación al centro */}
        <nav className="my-auto flex flex-wrap justify-center gap-6 md:gap-12">
          {[
            { name: "Productora", href: "#productora" },
            { name: "Servicios", href: "#servicios" },
            { name: "Portafolio", href: "/portafolio" },
            { name: "Clientes", href: "#clientes" },
            { name: "Contacto", href: "#contacto" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-zinc-100 hover:text-white transition-all duration-300 hover:scale-110 inline-block drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] group py-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c22533] transition-all duration-300 group-hover:w-full drop-shadow-[0_0_8px_#c22533]" />
            </Link>
          ))}
        </nav>

        {/* Indicador de Scroll Down */}
        <div className="pb-2 flex flex-col items-center gap-1 opacity-75 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Desplaza hacia abajo
          </span>
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* SECCIÓN 2: CONTINUACIÓN HERO */}

      <section className="relative z-10 w-full py-12 md:py-16 flex flex-col justify-center items-center px-6 text-center">
        <div className="max-w-3xl space-y-5 px-4">
          
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            Narrativa Visual & <span className="text-[#c22533]">Estética Cinematográfica</span>
          </h1>

          <div className="pt-1 flex flex-wrap justify-center gap-2 md:gap-3 text-[11px] md:text-xs text-zinc-300 tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <span>Videoclips</span> • 
            <span>Corporativo</span> • 
            <span>Publicidad</span> • 
            <span>Cine</span> • 
            <span>Fotografía</span> • 
            <span>Eventos</span> • 
            <span>Streaming</span>
          </div>

          <div className="pt-4">
            <a
              href="https://wa.me/56941459096"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-[#c22533] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_0_15px_rgba(194,37,51,0.6)] hover:bg-[#a01c27] hover:shadow-[0_0_25px_rgba(194,37,51,0.9)] hover:scale-105 transition-all duration-300"
            >
              Contáctanos
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN 3: CÓMO LO HACEMOS */}
      <section id="productora" className="relative z-10 w-full py-12 md:py-20 px-6 flex justify-center items-center">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 p-6 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide leading-tight drop-shadow-md">
                  Cómo materializamos tu proyecto <br className="hidden sm:block"/>
                </h2>
              </div>

              <div className="py-2 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-zinc-300">
                  Visión <span className="text-[#c22533]">·</span> Creatividad <span className="text-[#c22533]">·</span> Realización <span className="text-[#c22533]">·</span> Entrega
                </p>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c22533] mt-1.5 flex-shrink-0 shadow-[0_0_8px_#c22533]" />
                  <p>
                    <strong className="text-white font-semibold">Desde la Pre a la Post:</strong> Desarrollamos tu proyecto de inicio a fin, desde la idea, guion, scouting, hasta la entrega final y/o distribución. Nuestro equipo profesional te acompaña en todo el proceso.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c22533] mt-1.5 flex-shrink-0 shadow-[0_0_8px_#c22533]" />
                  <p>
                    <strong className="text-white font-semibold">Atención personalizada:</strong> Comprendemos que no todos los proyectos se llevan a cabo con el mismo proceso, por lo que nos acomodamos a la exigencia del proyecto presentado.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c22533] mt-1.5 flex-shrink-0 shadow-[0_0_8px_#c22533]" />
                  <p>
                    <strong className="text-white font-semibold">Servicios individuales:</strong> Contamos con una gama de profesionales que recorren el camino desde el diseño gráfico, animación, 3D, ilustración, fotografía, efectos especiales, etc. Más allá del audiovisual, te presentamos un abanico creativo completo.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-56 md:h-72 w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group">
              <Image
                src="/fantasmedia-web1.png"
                alt="Fantasmedia Producción"
                fill
                className="object-cover contrast-105 brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
              <div className="absolute inset-0 bg-[#c22533]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_25px_rgba(0,0,0,0.8)] pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* BLOQUE GRAFITO CONTINUO */}

      <div className="relative z-20 w-full bg-[#121318] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">

        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 48px 48px, 48px 48px'
          }}
        />

        {/* 4. NUESTROS SERVICIOS */}

        <section id="servicios" className="relative z-10 w-full py-12 md:py-16">
          <div className="w-full text-center space-y-2 mb-8 px-6">
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wider">
              Nuestros Servicios
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 max-w-xl mx-auto font-light">
              Haz clic en cualquier servicio para desplegar sus detalles.
            </p>
          </div>

          {/* CONTENEDOR MÓVIL Y PC */}
          <div className="w-full px-4 md:px-8 max-w-[1500px] mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row h-auto md:h-[420px] w-full gap-3 transition-all duration-500 ease-in-out">
              {servicios.map((servicio, index) => {
                const isOpen = activeService === index;

                return (
                  <div
                    key={servicio.id}
                    onClick={() => toggleService(index)}
                    className={`relative overflow-hidden rounded-xl cursor-pointer border border-white/10 transition-all duration-500 ease-in-out select-none ${
                      isOpen
                        ? "md:flex-[3] border-[#c22533] shadow-[0_0_20px_rgba(194,37,51,0.4)] bg-black/80"
                        : "md:flex-1 border-white/10 hover:border-white/30 bg-black/40"
                    }`}
                  >
                    {/* Imagen de fondo a color real */}
                    <div className={`relative w-full ${isOpen ? "h-44 md:h-full" : "h-28 md:h-full"} transition-all duration-500`}>
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        fill
                        className={`object-cover transition-all duration-700 ease-out ${
                          isOpen
                            ? "scale-105 brightness-100 contrast-100"
                            : "brightness-75 group-hover:brightness-100 group-hover:scale-105"
                        }`}
                        priority={index < 3}
                      />

                      {/* Viñeta de degradado oscuro neutro (solo para lectura clara del texto) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                      {/* Encabezado sobre la imagen */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10 pointer-events-none">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-zinc-300 uppercase drop-shadow-md">
                            0{index + 1}
                          </span>

                          {/* Título Vertical en PC cuando está cerrado */}
                          {!isOpen && (
                            <div className="hidden md:block [writing-mode:vertical-lr] rotate-180 text-base lg:text-lg font-extrabold uppercase tracking-[0.2em] text-zinc-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                              {servicio.titulo}
                            </div>
                          )}

                          {/* Icono Abrir/Cerrar en Móvil */}
                          <div className="md:hidden w-6 h-6 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white">
                            {isOpen ? "−" : "+"}
                          </div>
                        </div>

                        {/* Título Horizontal en Móvil y en PC cuando está abierto */}
                        <div className={`${!isOpen ? "block md:hidden" : "hidden md:block"}`}>
                          <h3 className="text-base md:text-2xl font-black uppercase tracking-wide text-white drop-shadow-lg">
                            {servicio.titulo}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Desplegable de Contenido para Móvil y PC */}
                    {isOpen && (
                      <div className="p-4 md:absolute md:bottom-0 md:left-0 md:right-0 md:p-6 z-20 bg-gradient-to-t from-black via-black/90 to-transparent">
                        <h3 className="text-lg font-black uppercase tracking-wide text-white mb-1.5 md:text-2xl">
                          {servicio.titulo}
                        </h3>
                        <p className="text-xs md:text-sm text-zinc-200 leading-relaxed font-light max-w-md drop-shadow-md">
                          {servicio.descripcion}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BOTÓN CONTACTANOS ABAJO */}

            <div className="w-full flex justify-center md:justify-end items-center mt-6 px-1">
              <a
                href="https://wa.me/56941459096"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#c22533] text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full shadow-[0_0_15px_rgba(194,37,51,0.5)] hover:bg-[#a01c27] hover:shadow-[0_0_25px_rgba(194,37,51,0.8)] hover:scale-105 transition-all duration-300"
              >
                <span>Cotiza tu Proyecto</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 5. CLIENTES */}

        <section id="clientes" className="relative z-10 w-full py-12 md:py-16 border-t border-white/5">
          <div className="w-full text-center space-y-2 mb-8 px-6">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c22533]">
              Confían en Nosotros
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wider text-white">
              Nuestros Clientes
            </h2>
          </div>

          {/* Contenedor Grid Responsivo */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 md:gap-4 items-center justify-center">
              {clientes.map((logo, index) => (
                <div 
                  key={index} 
                  className="group relative h-14 sm:h-16 md:h-18 w-full flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:scale-105 shadow-sm"
                >
                  <div className="relative w-full h-full grayscale opacity-75 contrast-125 brightness-200 group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 transition-all duration-300">
                    <Image
                      src={logo}
                      alt={`Cliente ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PRODUCTORAS ASOCIADAS - SHOWCASE CON LOGOS PROTAGÓNICOS */}
        <section id="productoras-asociadas" className="relative z-10 w-full py-16 md:py-24 border-t border-white/10 overflow-hidden bg-gradient-to-b from-transparent via-black/40 to-transparent">
          
          {/* Encabezado Minimalista */}
          <div className="w-full text-center space-y-2 mb-10 px-6">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#c22533]" />
              <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-[#c22533]">
                Co-Producciones & Alianzas
              </span>
              <span className="w-8 h-[1px] bg-[#c22533]" />
            </div>
            <h2 className="text-xl md:text-3xl font-black uppercase tracking-[0.2em] text-white/90">
              Productoras Asociadas
            </h2>
          </div>

          {/* Banner con Logos Protagónicos de Gran Tamaño */}
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center border border-white/10 rounded-2xl md:rounded-3xl bg-black/50 backdrop-blur-md divide-y md:divide-y-0 md:divide-x divide-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {/* Productora 1: Spectral Films */}
              <div className="group relative p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.03]">
                {/* Resplandor rojo en Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#c22533]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Contenedor del Logo de Gran Tamaño */}
                <div className="relative h-32 md:h-44 w-full max-w-[280px] md:max-w-[360px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/productora1.png"
                    alt="Spectral Films"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(194,37,51,0.6)] transition-all duration-500"
                  />
                </div>
                
                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#c22533] transition-colors">
                    Spectral Films
                  </h3>
                </div>
              </div>

              {/* Productora 2: Ugly Monster */}
              <div className="group relative p-6 md:p-10 flex flex-col items-center justify-center transition-all duration-500 hover:bg-white/[0.03]">
                {/* Resplandor rojo en Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#c22533]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Contenedor del Logo de Gran Tamaño */}
                <div className="relative h-32 md:h-44 w-full max-w-[280px] md:max-w-[360px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/productora2.png"
                    alt="Ugly Monster"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_25px_rgba(194,37,51,0.6)] transition-all duration-500"
                  />
                </div>

                <div className="mt-4 text-center space-y-1">
                  <h3 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#c22533] transition-colors">
                    Ugly Monster
                  </h3>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* 7. SECCIÓN DE CONTACTO */}

        <section id="contacto" className="relative z-10 w-full py-20 md:py-32 px-6 flex flex-col justify-center items-center overflow-hidden border-t border-white/5 group">
          
          {/* IMAGEN COMPLETA DE FONDO */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/fantasmedia-web3.png"
              alt="Fantasmedia Universo"
              fill
              className="object-cover object-center brightness-75 contrast-110 opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#121318] via-transparent to-[#121318]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121318]/90 via-transparent to-[#121318]/90" />
            <div className="absolute inset-0 bg-[#c22533]/10 mix-blend-color-dodge" />
          </div>

          {/* CONTENIDO FLOTANTE */}
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-8">
            
            <div className="space-y-3 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#c22533] shadow-lg">
                Hablemos de tu idea
              </span>

              <h4 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                Conectemos & Creemos juntos <br />
              </h4>

              <p className="text-xs md:text-sm text-zinc-200 max-w-xl mx-auto font-light leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] pt-1">
                ¿Tienes una idea en mente? Contáctanos a través de cualquiera de nuestros canales.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-2">
              
              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/56941459096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all duration-300 group/btn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Botón Instagram */}
              <a
                href="https://instagram.com/fantasmedia.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent hover:scale-105 hover:shadow-[0_0_30px_rgba(253,29,29,0.8)] transition-all duration-300 group/btn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* Botón Correo Electrónico */}
              <a
                href="mailto:contactofantasmedia@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs font-bold tracking-[0.15em] uppercase text-white hover:bg-[#c22533] hover:border-[#c22533] hover:scale-105 hover:shadow-[0_0_30px_rgba(194,37,51,0.9)] transition-all duration-300 group/btn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span>Correo</span>
              </a>

            </div>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="relative z-10 w-full py-6 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-400 border-t border-white/5">
          Fantasmedia Producciones • All Rights Reserved • Página creada por Paulokko
        </footer>

      </div>

    </main>
  </>
);
}