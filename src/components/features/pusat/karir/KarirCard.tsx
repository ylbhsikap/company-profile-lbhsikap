// src/components/KarirCard.tsx
"use client";

import { useState } from "react";
import { LowonganKarir } from "@/data/data";
import KarirForm from "./KarirForm"; 
import { ArrowRight, Building2, Calendar, CheckCircle2, Layers, MapPin } from "lucide-react";

export default function KarirCard({ lowongan }: { lowongan: LowonganKarir }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white sm:bg-gray-50 border border-gray-200/80 rounded-2xl hover:border-gray-950 hover:shadow-xl transition-all duration-300">
        
        {/* Garis Aksen Emas di Atas Card saat Hover */}
        <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

        <div>
          {/* Label Kategori, Badge Mitra, & Penempatan Cabang */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
            <span className="text-[9px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              {lowongan.kategori}
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {/* Badge Penempatan Cabang */}
              <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-gray-700 bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs">
                <MapPin size={11} className="text-amber-600" /> 
                {lowongan.penempatan || "Pusat & Seluruh Cabang"}
              </span>

              {lowongan.isProgramMitra && (
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase text-gray-900 bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-2xs">
                  <Building2 size={11} className="text-amber-600" /> {lowongan.mitraTarget}
                </span>
              )}
            </div>
          </div>

          {/* Judul & Deskripsi Utama */}
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-gray-950 mb-3 group-hover:text-amber-600 transition-colors leading-snug">
            {lowongan.judul}
          </h3>
          
          <p className="text-xs sm:text-sm text-gray-600 mb-6 line-clamp-3 leading-relaxed">
            {lowongan.deskripsi}
          </p>

          {/* Meta Info: Background Keahlian / Syarat Singkat */}
          {lowongan.backgroundKeahlian && lowongan.backgroundKeahlian.length > 0 && (
            <div className="space-y-2 mb-6 pt-4 border-t border-gray-200/60">
              <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                <Layers size={12} /> Fokus Keahlian / Kualifikasi:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {lowongan.backgroundKeahlian.map((keahlian, i) => (
                  <span key={i} className="inline-flex items-center gap-1 text-[10px] font-medium text-gray-700 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                    <CheckCircle2 size={10} className="text-amber-600" /> {keahlian}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Tombol Action & Deadline */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200/60 mt-4">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-medium text-gray-500">
            <Calendar size={12} className="text-gray-400" />
            <span>Batas: {lowongan.deadline}</span>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-950 hover:text-amber-600 transition-colors group-hover:gap-3 cursor-pointer"
          >
            Daftar Posisi <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Modal Popup Formulir Pendaftaran */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/70 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg my-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Tombol Tutup Modal */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute -top-12 right-0 text-white font-bold hover:text-amber-400 transition-colors flex items-center gap-1 text-xs bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg shadow-lg cursor-pointer"
            >
              ✕ Tutup Jendela
            </button>

            {/* Komponen Form Pendaftaran Terintegrasi */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <KarirForm kategori={lowongan.judul} />
            </div>

          </div>
        </div>
      )}
    </>
  );
}