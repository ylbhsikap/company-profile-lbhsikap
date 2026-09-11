// src/components/features/layanan/KriteriaSection.tsx
import React from "react";

interface KriteriaItem {
  judul: string;
  deskripsi: string;
  borderLeft?: string;
}

interface KriteriaSectionProps {
  kriteria: KriteriaItem[];
}

export function KriteriaSection({ kriteria }: KriteriaSectionProps) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-xl">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Standar Pelayanan</span>
        <h3 className="text-3xl font-black tracking-tight text-neutral-900 mt-2">Kriteria Substantif & Struktural</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {kriteria.map((item, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white rounded-3xl p-8 border border-neutral-200/80 hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 flex flex-col justify-between overflow-hidden"
          >
            {/* Absolute Glow Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-100 rounded-full blur-2xl group-hover:bg-amber-100/55 transition-colors duration-500 z-0" />
            
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold text-neutral-400 mb-4 block">0{idx + 1} //</span>
              <h4 className="font-extrabold text-xl mb-4 text-neutral-900 tracking-tight leading-snug">{item.judul}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.deskripsi}</p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
              <span>Validasi Hukum</span>
              <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-black transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}