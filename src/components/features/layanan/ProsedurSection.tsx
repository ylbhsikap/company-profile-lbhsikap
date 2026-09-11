// src/components/features/layanan/ProsedurSection.tsx
import React from "react";

interface ProsedurItem {
  step: number | string;
  title: string;
  desc: string;
}

interface ProsedurSectionProps {
  prosedurLayanan: ProsedurItem[];
}

export function ProsedurSection({ prosedurLayanan }: ProsedurSectionProps) {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-xl">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Alur Perkara</span>
        <h3 className="text-3xl font-black tracking-tight text-neutral-900 mt-2">Tahapan Pendampingan Lembaga</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prosedurLayanan.map((item) => (
          <div key={item.step} className="bg-white rounded-3xl p-8 border border-neutral-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-black transition-all duration-500">
            <div className="absolute -right-4 -bottom-4 text-neutral-100 font-black text-8xl select-none group-hover:text-neutral-200/60 transition-colors">
              {item.step}
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[10px] font-mono uppercase tracking-widest mb-6">
                Fase 0{item.step}
              </span>
              <h4 className="font-extrabold text-xl text-neutral-900 tracking-tight mb-3">{item.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}