"use client";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 💡 SOLUSI TAILWIND v4:
          // Menghapus kelas 'invisible & tergeser' lalu menyuntikkan efek 'muncul & tegak lurus'
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      {
        threshold: 0.15, // Elemen terpicu jika 15% areanya sudah masuk layar
        rootMargin: "0px 0px -50px 0px" // Terpicu sedikit sebelum menyentuh batas pandang dasar
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    // Kondisi Awal: Transparan (opacity-0) dan amblas ke bawah sejauh 32px (translate-y-8)
    // transition-all duration-700 ease-out memastikan animasi bergeser naik ke atas berjalan sangat halus saat di-scroll
    <div 
      ref={ref} 
      className="opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}