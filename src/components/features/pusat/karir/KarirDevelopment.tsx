// src/components/features/pusat/karir/KarirDevelopment.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Scale, Code2 } from "lucide-react";

export default function KarirDevelopment() {
  const tracks = [
    {
      id: "01",
      title: "Magang Mahasiswa Hukum (Legal Intern)",
      target: "Mahasiswa S1 Hukum / Fresh Graduate",
      icon: GraduationCap,
      description: "Program intensif bagi mahasiswa untuk memahami dapur penegakan hukum struktural, riset dokumen perkara, pendampingan legal drafting, serta asistensi di posbakum.",
      output: "Sertifikat magang resmi, portofolio legal drafting, dan penguasaan dasar litigasi non-litigasi."
    },
    {
      id: "02",
      title: "Magang & Pengembangan Advokat",
      target: "Calon Advokat / Junior Associate",
      icon: Scale,
      description: "Jalur karier profesional (minmal memiliki Sertifikat PKPA) untuk terjun langsung menangani perkara litigasi pro-bono, mediasi klien, dan pembelaan di persidangan.",
      output: "Pengalaman jam terbang persidangan, perluasan jejaring hukum nasional, dan jenjang Partner."
    },
    {
      id: "03",
      title: "Magang Mahasiswa Mitra (IT, Hukum, & Bisnis)",
      target: "Mahasiswa / Profesional Lintas Disiplin",
      icon: Code2,
      description: "Inovasi kolaborasi lintas keilmuan. Melibatkan mahasiswa/praktisi IT (pengembangan sistem database hukum/website), bisnis/sosial (manajemen NGO & fundraising), serta kajian kebijakan publik.",
      output: "Pengalaman proyek nyata (real-world project) dalam digitalisasi bantuan hukum dan tata kelola NGO modern."
    }
  ];

  return (
    <section className="w-full py-0 bg-transparent">
      {/* Menggunakan w-full agar mengikuti lebar canvas utama secara fleksibel */}
      <div className="w-full">
        
        {/* Header Section: Sejajar kanan-kiri tapi berdempetan condong ke kiri */}
        <div className="flex flex-col md:flex-row md:items-end justify-start mb-16 gap-8 lg:gap-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Jalur Pengembangan</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 mt-2">
              Program Karier & Magang Terpadu
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md text-left">
            Peluang pengembangan kapasitas profesional dan akademik yang disesuaikan dengan lini keahlian, mulai dari hukum murni hingga kolaborasi teknologi & bisnis.
          </p>
        </div>

        {/* Grid Jalur Karier & Magang (3 Kolom di Desktop, Bertumpuk di Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-6 sm:p-8 bg-white sm:bg-gray-50 border border-gray-200/80 rounded-2xl hover:border-gray-950 hover:shadow-xl transition-all duration-300"
            >
              {/* Garis Aksen Emas di Atas Card saat Hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-neutral-100 rounded-xl shadow-2xs text-gray-950 group-hover:bg-gray-950 group-hover:text-amber-500 transition-colors">
                    <track.icon size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-gray-400">
                    // {track.id}
                  </span>
                </div>

                <span className="inline-block text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                  Target: {track.target}
                </span>

                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950 mb-3 leading-snug">
                  {track.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
                  {track.description}
                </p>
              </div>

              {/* Output / Hasil Pengembangan */}
              <div className="pt-4 border-t border-gray-200/60">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Capaian & Output:
                </span>
                <p className="text-xs font-semibold text-gray-950 leading-relaxed">
                  {track.output}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}