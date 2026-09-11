// src/components/features/pusat/karir/KarirProcess.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileSearch, ClipboardCheck, Users, Scale, Briefcase } from "lucide-react";

export default function KarirProcess() {
  const steps = [
    {
      id: "01",
      title: "Screening CV & Berkas",
      description: "Tim HR dan penilai memeriksa kelengkapan administrasi, ijazah, transkrip nilai, serta surat lamaran yang Anda kirimkan.",
      icon: FileSearch,
    },
    {
      id: "02",
      title: "Tes Tertulis Substansi",
      description: "Evaluasi kemampuan teknis berupa studi kasus hukum, pemahaman UU Bantuan Hukum, atau analisis kebijakan publik sesuai posisi.",
      icon: ClipboardCheck,
    },
    {
      id: "03",
      title: "Wawancara Kompetensi",
      description: "Sesi diskusi mendalam bersama tim manajerial terkait rekam jejak, motivasi sosial, dan visi penegakan hukum.",
      icon: Users,
    },
    {
      id: "04",
      title: "Uji Praktik & Partner",
      description: "Simulasi penanganan perkara, tes lisan kode etik advokat, atau wawancara akhir bersama Direktur dan Partner lembaga.",
      icon: Scale,
    },
    {
      id: "05",
      title: "Offering & Penempatan",
      description: "Pemberitahuan hasil kelulusan, penandatanganan kesepakatan kerja, dan orientasi penempatan di kantor pusat atau cabang.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="w-full py-0 bg-transparent">
      {/* Menggunakan w-full agar mengikuti lebar canvas utama secara fleksibel */}
      <div className="w-full">
        
        {/* Header Section: Sejajar kanan-kiri tapi berdempetan condong ke kiri */}
        <div className="flex flex-col md:flex-row md:items-end justify-start mb-16 gap-8 lg:gap-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Tahapan Rekrutmen</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 mt-2">
              Alur Seleksi & Penerimaan
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md text-left">
            Proses seleksi transparan dan terstruktur yang dirancang untuk menjaring advokat, paralegal, dan tenaga profesional berintegritas tinggi.
          </p>
        </div>

        {/* Grid Alur Seleksi (5 Kolom Penuh di Layar Desktop, Bertumpuk di Mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-6 bg-white sm:bg-gray-50 border border-gray-200/80 rounded-2xl hover:border-gray-950 hover:shadow-xl transition-all duration-300"
            >
              {/* Garis Aksen Emas di Atas Card saat Hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-neutral-100 rounded-xl shadow-2xs text-gray-950 group-hover:bg-gray-950 group-hover:text-amber-500 transition-colors">
                    <step.icon size={20} />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-gray-400">
                    // {step.id}
                  </span>
                </div>

                <h3 className="text-base font-black uppercase tracking-wide text-gray-950 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Indikator Langkah di Bawah Card */}
              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gray-400">Tahap {idx + 1} dari 5</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-600 group-hover:scale-150 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}