// src/components/MapBox.tsx
import React from "react";

export function MapBox({ src }: { src: string }) {
  return (
    // w-full = Lebar penuh, bg-white = Background putih bersih
    // border & rounded-xl = Memberikan bingkai halus dengan shadow tipis khas tema monokrom
    <div className="w-full flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
      
      {/* Judul Sub-Seksi */}
      <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
        Peta Lokasi Resmi
      </h2>
      
      {/* Bingkai Peta Interaktif */}
      {/* flex-1 = Memaksa peta mengisi sisa ruang kotak agar tingginya otomatis sama rata dengan ContactCard */}
      {/* min-h-[350px] = Menggantikan min-h-87.5 dengan nilai piksel pasti agar aman di Tailwind v4 */}
      <div className="relative flex-1 w-full min-h-87.5 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
        <iframe 
          src={src} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          title="Peta Lokasi Kantor LBH SIKAP Yogyakarta" 
          allowFullScreen 
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        ></iframe>
      </div>
      
    </div>
  );
}