// src/components/ServiceCriteria.tsx
import React from "react";

interface KriteriaItem {
  judul: string;
  deskripsi: string;
  borderLeft: string; // Menyimpan data warna border kiri (misal: "#b45309" atau "#111111")
}

interface ServiceCriteriaProps {
  daftarKriteria: KriteriaItem[];
}

export function ServiceCriteria({ daftarKriteria }: ServiceCriteriaProps) {
  return (
    <div className="mt-12 w-full max-w-4xl mx-auto bg-white p-2">
      {/* Judul Seksi dengan Garis Pembatas Bawah Khas LBH */}
      <div className="border-b-2 border-gray-950 pb-3 mb-8">
        <h2 className="text-xl font-black uppercase tracking-wider text-gray-950 md:text-2xl">
          Kriteria Penerimaan Kasus
        </h2>
      </div>

      {/* Daftar Kriteria Menggunakan List Elemen Blok */}
      <ul className="flex flex-col gap-4">
        {daftarKriteria.map((item, index) => (
          <li 
            key={index} 
            style={{ borderLeftColor: item.borderLeft || "#111111" }} 
            className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 bg-gray-50 p-5 rounded-lg border-l-4 shadow-xs transition-all duration-300 hover:bg-gray-100/70 hover:shadow-sm"
          >
            {/* Judul Kriteria (Bagian Kiri) */}
            <strong className="text-sm font-black uppercase tracking-wide text-gray-950 min-w-45 shrink-0">
              {item.judul}
            </strong>
            
            {/* Titik Dua Pembatas (Hanya Muncul di Layar Lebar) */}
            <span className="hidden sm:inline font-bold text-gray-400">:</span>

            {/* Deskripsi Penjelasan (Bagian Kanan) */}
            <p className="text-sm leading-relaxed text-gray-700 text-justify">
              {item.deskripsi}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}