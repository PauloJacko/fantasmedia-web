import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const clientes = [
    "/logo-cliente1.png",
    "/logo-cliente2.png",
    "/logo-cliente3.png",
    "/logo-cliente4.png",
    "/logo-cliente5.png",
    "/logo-cliente6.png",
  ];

  return (
    <main className="relative w-full overflow-x-hidden bg-black text-white font-sans selection:bg-[#c22533] selection:text-white">
      
      {/* 1. VIDEO DE FONDO PERMANENTE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover scale-105 filter brightness-90 contrast-105"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
        
        {/* Capas de degradado atmosféricas */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-[#c22533]/10 mix-blend-multiply" />
      </div>

      {/* ========================================================= */}
      {/* SECCIÓN 1: VISTA INICIAL
      {/* ========================================================= */}
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
            { name: "Portafolio", href: "#portafolio" },
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

      {/* ========================================================= */}
      {/* SECCIÓN 2: CONTINUACIÓN HERO*/}
      {/* ========================================================= */}
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
            <Link
              href="#contacto"
              className="inline-block px-7 py-3 bg-[#c22533] text-white font-bold text-xs md:text-sm tracking-[0.2em] uppercase rounded-full shadow-[0_0_15px_rgba(194,37,51,0.6)] hover:bg-[#a01c27] hover:shadow-[0_0_25px_rgba(194,37,51,0.9)] hover:scale-105 transition-all duration-300"
            >
              Contáctanos
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECCIÓN 3: CÓMO LO HACEMOS */}
      {/* ========================================================= */}
      <section id="productora" className="relative z-10 w-full py-16 md:py-24 px-6 flex justify-center items-center">
        <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-14 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-wide leading-tight drop-shadow-md">
                  Cómo materializamos <br className="hidden sm:block"/>
                  <span className="text-zinc-200">cada proyecto</span>
                </h2>
              </div>

              <div className="py-2 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
                <p className="text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase text-zinc-300">
                  Visión <span className="text-[#c22533]">·</span> Creatividad <span className="text-[#c22533]">·</span> Realización <span className="text-[#c22533]">·</span> Entrega
                </p>
              </div>

              <div className="space-y-4 text-xs md:text-sm text-zinc-300 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c22533] mt-1.5 flex-shrink-0 shadow-[0_0_8px_#c22533]" />
                  <p>
                    <strong className="text-white font-semibold">Producción Audiovisual Integral:</strong> Fotografías de alta fidelidad, rodajes cinematográficos, postproducción con colorimetría avanzada y piezas optimizadas para Reels y TikTok.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#c22533] mt-1.5 flex-shrink-0 shadow-[0_0_8px_#c22533]" />
                  <p>
                    <strong className="text-white font-semibold">Búsqueda de Locaciones (Scouting):</strong> Exploramos e identificamos escenarios únicos en interiores y exteriores para potenciar la narrativa estética de tu marca.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)] group">
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

      {/* ========================================================= */}
      {/* BLOQUE GRAFITO CONTINUO */}
      {/* ========================================================= */}
      <div className="relative z-20 w-full bg-[#121318] border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">

        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '24px 24px, 48px 48px, 48px 48px'
          }}
        />

        {/* 4. CLIENTES */}
        <section id="clientes" className="relative z-10 w-full py-16 md:py-20">
          <div className="w-full text-center space-y-3 mb-12 px-6">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c22533]">
              Confían en Nosotros
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-wider">
              Nuestros Clientes
            </h2>
          </div>

          <div className="w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#121318] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#121318] to-transparent z-10 pointer-events-none" />

            <div className="flex items-center justify-start md:justify-center gap-8 md:gap-16 px-8 overflow-x-auto no-scrollbar py-4">
              {clientes.map((logo, index) => (
                <div 
                  key={index} 
                  className="relative min-w-[120px] md:min-w-[160px] h-16 md:h-20 flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Cliente ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. SECCIÓN DE CONTACTO */}
        {/* ========================================================= */}
        <section id="contacto" className="relative z-10 w-full py-28 md:py-40 px-6 flex flex-col justify-center items-center overflow-hidden border-t border-white/5 group">
          
          {/* IMAGEN COMPLETA DE FONDO (FULL HORIZONTE) */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/fantasmedia-web3.png"
              alt="Fantasmedia Universo"
              fill
              className="object-cover object-center brightness-75 contrast-110 opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
            {/* Sombras orgánicas en los bordes para fundirse suavemente arriba y abajo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#121318] via-transparent to-[#121318]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121318]/90 via-transparent to-[#121318]/90" />
            <div className="absolute inset-0 bg-[#c22533]/10 mix-blend-color-dodge" />
          </div>

          {/* CONTENIDO FLOTANTE */}
          <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-10">
            
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md text-[11px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#c22533] shadow-lg">
                Hagamos historia juntos
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]">
                Contáctanos, Háblanos <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  & Síguenos
                </span>
              </h2>

              <p className="text-sm md:text-base text-zinc-200 max-w-xl mx-auto font-light leading-relaxed drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] pt-2">
                ¿Tienes una idea en mente? Contáctanos a través de cualquiera de nuestros canales.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 pt-4">
              
              {/* Botón WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-8 py-4 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-black hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all duration-300 group/btn"
              >
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Botón Instagram */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-8 py-4 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-white hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:border-transparent hover:scale-110 hover:shadow-[0_0_35px_rgba(253,29,29,0.8)] transition-all duration-300 group/btn"
              >
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* Botón Correo Electrónico */}
              <a
                href="mailto:contacto@fantasmedia.com"
                className="flex items-center gap-3.5 px-8 py-4 rounded-full bg-black/50 border border-white/20 backdrop-blur-xl text-xs md:text-sm font-bold tracking-[0.15em] uppercase text-white hover:bg-[#c22533] hover:border-[#c22533] hover:scale-110 hover:shadow-[0_0_35px_rgba(194,37,51,0.9)] transition-all duration-300 group/btn"
              >
                <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover/btn:scale-125" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span>Correo</span>
              </a>

            </div>

          </div>

        </section>

        {/* FOOTER */}
        <footer className="relative z-10 w-full py-6 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-400 border-t border-white/5">
          Fantasmedia Producciones • All Rights Reserved
        </footer>

      </div>

    </main>
  );
}