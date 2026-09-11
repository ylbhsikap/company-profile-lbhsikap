// src/components/features/pusat/karir/ProgramMagangNasional.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, BarChart3, Briefcase, FileText } from "lucide-react";

export default function ProgramMagangNasional() {
  const kuartalMagang = [
    { q: "KUARTAL 1", periode: "Januari — Maret", fokus: "Legal Research & Drafting", detail: "Fokus pada penguasaan teknik perancangan kontrak, penelaahan dokumen perkara, dan riset hukum mendalam untuk kasus litigasi." },
    { q: "KUARTAL 2", periode: "April — Juni", fokus: "Field Advocacy & Posbakum", detail: "Praktik langsung di Pos Bantuan Hukum (Posbakum) untuk memberikan konsultasi hukum kepada masyarakat miskin." },
    { q: "KUARTAL 3", periode: "Juli — September", fokus: "Mediasi & Industrial Relations", detail: "Pendampingan sengketa hubungan industrial (PHK) serta mediasi non-litigasi dengan stakeholder perusahaan dan pekerja." },
    { q: "KUARTAL 4", periode: "Oktober — Desember", fokus: "Policy Paper & Public Campaign", detail: "Penyusunan naskah kajian kebijakan (policy paper) dan merancang strategi kampanye publik untuk isu-isu HAM nasional." }
  ];

  return (
    <section className="w-full py-0 bg-transparent">
      {/* Menggunakan w-full agar mengikuti lebar canvas utama secara fleksibel */}
      <div className="w-full">
        
        {/* Layout Utama: Judul di Kolom Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16 items-start">
          
          {/* Deskripsi (Kolom Kiri - 7 grid) */}
          <div className="lg:col-span-7 flex items-center h-full">
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
              Siklus pengembangan kader hukum struktural yang terukur. Program ini dilaksanakan secara seragam di seluruh kantor cabang dengan durasi 3 bulan per periode kuartal, memastikan setiap peserta mendapatkan eksposur yang sama terhadap realitas bantuan hukum di Indonesia.
            </p>
          </div>

          {/* Judul (Kolom Kanan - 5 grid) */}
          <div className="lg:col-span-5 text-left border-l-4 border-gray-950 pl-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 block mb-2">
              Program Eksklusif
            </span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 leading-tight">
              Program Magang Nasional LBH SIKAP
            </h2>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
          {kuartalMagang.map((item) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 flex flex-col justify-between hover:bg-gray-50/80 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black text-white bg-gray-950 px-3.5 py-1 rounded-md uppercase tracking-widest shadow-2xs">
                    {item.q}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                    {item.periode}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-gray-950 mb-3 uppercase tracking-tight flex items-center gap-2.5">
                  <Target size={18} className="text-amber-600 shrink-0" />
                  {item.fokus}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FileText, title: "Output Akademik", desc: "Portofolio kasus nyata & sertifikat ber-SK." },
            { icon: BarChart3, title: "Evaluasi Berkala", desc: "Penilaian kinerja bulanan oleh mentor." },
            { icon: Briefcase, title: "Jalur Rekrutmen", desc: "Prioritas akses ke posisi staf tetap." }
          ].map((info, i) => (
            <div key={i} className="flex items-center gap-4 p-6 border border-gray-200/80 rounded-2xl bg-white sm:bg-gray-50/60 shadow-2xs">
              <div className="p-3 bg-neutral-100 rounded-xl text-gray-950 shrink-0">
                <info.icon size={22} />
              </div>
              <div>
                <h5 className="text-xs font-black uppercase tracking-wider text-gray-950">{info.title}</h5>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{info.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}