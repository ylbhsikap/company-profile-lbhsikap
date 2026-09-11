// src/components/features/pusat/karir/KarirInfo.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, Users, ShieldCheck, HeartHandshake } from "lucide-react";

export default function KarirIntro() {
  const pilarNilai = [
    {
      icon: Scale,
      title: "Litigasi Struktural",
      description: "Berjuang tidak hanya di ruang sidang, tetapi juga mengadvokasi akar masalah ketidakadilan sistemik."
    },
    {
      icon: ShieldCheck,
      title: "Integritas & Pro-Bono",
      description: "Menjunjung tinggi kode etik advokat dan mendedikasikan keahlian demi perlindungan kelompok marjinal."
    },
    {
      icon: Users,
      title: "Kolaborasi Lintas Ilmu",
      description: "Menghubungkan praktisi hukum, teknologi, dan tata kelola sosial untuk modernisasi bantuan hukum."
    },
    {
      icon: HeartHandshake,
      title: "Dampak Sosial Nyata",
      description: "Menjadi bagian dari gerakan perubahan sosial yang memastikan akses keadilan dapat dirasakan semua kalangan."
    }
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-transparent">
      {/* Menggunakan w-full dan padding responsif agar mengikuti canvas utama */}
      <div className="w-full">
        
        {/* Header Intro Utama (Lebar responsif untuk teks deskripsi panjang agar nyaman dibaca di desktop) */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">
              Budaya & Visi Lembaga
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-gray-950 mt-3 mb-6 leading-tight">
              Membangun Keadilan, Mengabdi pada Rakyat.
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed text-justify md:text-center">
              LBH SIKAP bukan sekadar kantor hukum konvensional. Kami adalah wadah pergerakan sosial dan pembelaan hak asasi manusia bagi masyarakat yang terpinggirkan secara struktural. Budaya kerja kami berfokus pada kolaborasi lintas disiplin, ketajaman analisis kebijakan publik, serta komitmen moral yang teguh tanpa kompromi.
            </p>
          </motion.div>
        </div>

        {/* 4 Pilar Budaya Kerja & Nilai Lembaga (Otomatis membentang 4 kolom di desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pilarNilai.map((pilar, idx) => (
            <motion.div
              key={pilar.title}
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
                    <pilar.icon size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-gray-400">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-black uppercase tracking-wide text-gray-950 mb-3 leading-snug">
                  {pilar.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {pilar.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}