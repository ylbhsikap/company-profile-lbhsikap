// src/components/features/pusat/karir/KarirRequirements.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Scale, FileText } from "lucide-react";

export default function KarirRequirements() {
  const kategoriPersyaratan = [
    {
      id: "req-1",
      kategori: "Persyaratan Umum Organisasi",
      deskripsi: "Kriteria dasar yang wajib dipenuhi oleh seluruh pelamar di berbagai divisi LBH SIKAP.",
      icon: FileText,
      items: [
        "Memiliki integritas moral yang tinggi dan komitmen kuat terhadap penegakan Hak Asasi Manusia (HAM).",
        "Memiliki kepedulian sosial terhadap isu-isu kemiskinan, marjinalisasi, dan ketidakadilan struktural.",
        "Bersedia bekerja secara mandiri maupun dalam tim di bawah tekanan serta mobilitas tinggi.",
        "Menguasai teknik penulisan hukum, investigasi fakta, atau analisis kebijakan publik."
      ]
    },
    {
      id: "req-2",
      kategori: "Magang Mahasiswa (Legal Intern)",
      deskripsi: "Khusus bagi mahasiswa tingkat akhir atau fresh graduate ilmu hukum yang ingin mendalami praktik bantuan hukum.",
      icon: GraduationCap,
      items: [
        "Berstatus sebagai mahasiswa aktif minimal semester 4 atau lulusan baru (Fresh Graduate) S1 Ilmu Hukum.",
        "Memiliki pemahaman dasar mengenai Hukum Acara (Perdata / Pidana / PTUN) dan Hukum Administrasi Negara.",
        "Bersedia berkomitmen menjalani program magang penuh waktu atau paruh waktu selama minimal 1 bulan.",
        "Melampirkan transkrip nilai akademik terakhir dengan IPK minimal 3.00 (skala 4.00)."
      ]
    },
    {
      id: "req-3",
      kategori: "Advokat Magang & Publik",
      deskripsi: "Khusus untuk penempatan penanganan perkara litigasi dan pendampingan korban di pengadilan.",
      icon: Scale,
      items: [
        "Memegang ijazah Sarjana Hukum (S1) dan diutamakan memiliki gelar Magister Hukum (S2).",
        "Memiliki Berita Acara Sumpah (BAS) Advokat dari Pengadilan Tinggi (opsional, minimal memiliki Sertifikat PKPA) atau Kartu Tanda Anggota (KTA) Organisasi Advokat yang sah.",
        "Memahami secara mendalam Undang-Undang Bantuan Hukum (UU OBH) dan kode etik profesi advokat."
      ]
    }
  ];

  return (
    <section className="w-full py-0 bg-transparent">
      {/* Menggunakan w-full agar mengikuti lebar canvas utama secara fleksibel */}
      <div className="w-full">
        
        {/* Header Section ala Editorial Hukum */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Kualifikasi Pelamar</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 mt-2">
              Persyaratan & Ketentuan
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md">
            Standar kompetensi dan kualifikasi terperinci yang dikelompokkan dari ketentuan umum hingga formasi khusus.
          </p>
        </div>

        {/* Grid Kartu Persyaratan (3 Kolom di Desktop, Bertumpuk di Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kategoriPersyaratan.map((group, idx) => (
            <motion.div
              key={group.id}
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
                    <group.icon size={22} />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-gray-400">
                    // 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-wide text-gray-950 mb-2 leading-snug">
                  {group.kategori}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-6 leading-relaxed">
                  {group.deskripsi}
                </p>

                <ul className="space-y-3 pt-4 border-t border-gray-200/60">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                      <CheckCircle2 size={15} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}