// src/components/layout/ScrollReveal.tsx
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
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    // Penambahan 'relative' di sini memastikan wrapper animasi 
    // memiliki positioning yang valid untuk elemen anak (seperti Image fill)
    <div 
      ref={ref} 
      className="relative opacity-0 translate-y-8 transition-all duration-1000 ease-out will-change-transform"
    >
      {children}
    </div>
  );
}