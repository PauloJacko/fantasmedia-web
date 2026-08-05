// components/CinematicIntro.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface CinematicIntroProps {
  onComplete: () => void; // Función que se ejecuta al terminar la animación
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [animationStage, setAnimationStage] = useState<'entry' | 'glow' | 'exit' | 'hidden'>('entry');

  useEffect(() => {
    // Línea de tiempo de la animación (tiempos en milisegundos)
    
    // 1. Iniciar stage de Glow/Pulso
    const glowTimer = setTimeout(() => {
      setAnimationStage('glow');
    }, 500); // Comienza a los 0.5s

    // 2. Iniciar stage de Salida (Zoom Out/Fade)
    const exitTimer = setTimeout(() => {
      setAnimationStage('exit');
    }, 1800); // Comienza a los 1.8s

    // 3. Ocultar completamente y notificar finalización
    const hiddenTimer = setTimeout(() => {
      setAnimationStage('hidden');
      onComplete(); // Llama a la función para mostrar la página real
    }, 2800); // Termina a los 2.8s

    // Limpieza de timers al desmontar el componente
    return () => {
      clearTimeout(glowTimer);
      clearTimeout(exitTimer);
      clearTimeout(hiddenTimer);
    };
  }, [onComplete]);

  if (animationStage === 'hidden') return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${animationStage === 'exit' ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Contenedor del Fantasma con animaciones CSS avanzadas */}
      <div className={`relative w-72 h-72 md:w-96 md:h-96 transition-all ease-out ${animationStage === 'entry' ? 'animate-cinema-focus' : ''} ${animationStage === 'glow' ? 'scale-105' : ''} ${animationStage === 'exit' ? 'scale-[2] opacity-0 blur-sm' : ''} duration-1000`}>
        
        {/* Efecto de Resplandor Rojo (Glow) de fondo */}
        <div className={`absolute inset-0 rounded-full bg-[#c22533]/50 blur-[60px] transition-all duration-500 ${animationStage === 'glow' ? 'opacity-100 animate-pulse-glow' : 'opacity-30'}`} />

        {/* Imagen de la Mascota */}
        <Image
          src="/mascota-fantasmedia.png"
          alt="Fantasmedia Mascota Intro"
          fill
          priority
          className="object-contain relative z-10"
        />
        
        {/* Superposición de destello óptico sutil */}
        <div className={`absolute inset-0 bg-white rounded-full blur-xl mix-blend-overlay transition-opacity duration-300 ${animationStage === 'glow' ? 'opacity-20' : 'opacity-0'}`} />
      </div>

      {/* Texto sutil opcional abajo (puedes borrarlo si prefieres solo el fantasma) */}
      <div className={`absolute bottom-10 text-white/40 text-xs font-mono tracking-[0.5em] uppercase transition-opacity duration-500 ${animationStage === 'exit' ? 'opacity-0' : 'opacity-100'}`}>
        Toma 1 • Acción
      </div>

      {/* Estilos CSS específicos para las animaciones de la intro */}
      <style jsx global>{`
        @keyframes cinema-focus {
          0% {
            filter: blur(20px);
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            filter: blur(0px);
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 50px 10px rgba(194, 37, 51, 0.5);
            opacity: 0.5;
          }
          50% {
            box-shadow: 0 0 100px 30px rgba(194, 37, 51, 0.8);
            opacity: 1;
          }
          100% {
            box-shadow: 0 0 50px 10px rgba(194, 37, 51, 0.5);
            opacity: 0.5;
          }
        }

        .animate-cinema-focus {
          animation: cinema-focus 0.7s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}