"use client";
import { useEffect, useRef } from "react";

export default function ScrollReveal({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { 
        threshold: 0.15, // Elemen terpicu jika 15% areanya sudah masuk layar
        rootMargin: "0px 0px -50px 0px" // Terpicu sedikit sebelum menyentuh batas pandang
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="reveal-box">
      {children}
    </div>
  );
}