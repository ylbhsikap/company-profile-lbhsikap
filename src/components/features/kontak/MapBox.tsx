// src/components/MapBox.tsx
import React from "react";

export function MapBox({ src }: { src: string }) {
  return (
    <div className="w-full flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
        Peta Lokasi Resmi
      </h2>
      
      {/* 💡 Perbaikan: Menggunakan min-h-[350px] agar konsisten mengisi ruang kosong */}
      <div className="relative flex-1 w-full min-h-87.5 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
        <iframe 
          src={src} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          title="Peta Lokasi Kantor LBH SIKAP" 
          allowFullScreen 
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}