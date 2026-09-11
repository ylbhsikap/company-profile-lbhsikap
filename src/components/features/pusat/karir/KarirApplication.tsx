// src/components/features/pusat/karir/KarirApplication.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, FileText, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export default function KarirApplication() {
  const panduanBerkas = [
    {
      step: "01",
      title: "Penyusunan Berkas Utama (Wajib)",
      details: [
        "Curriculum Vitae (CV) terbaru yang mencantumkan riwayat pendidikan, organisasi, serta pengalaman penanganan kasus atau proyek terkait.",
        "Surat Lamaran / Cover Letter profesional yang menjelaskan motivasi spesifik bergabung dengan LBH SIKAP serta divisi yang dituju.",
        "Scan Ijazah dan Transkrip Nilai akademik terakhir (atau Surat Keterangan Mahasiswa Aktif bagi pendaftar program magang)."
      ]
    },
    {
      step: "02",
      title: "Lampiran Pendukung Khusus",
      details: [
        "Bagi pelamar posisi Advokat: Wajib melampirkan scan Berita Acara Sumpah (BAS) Advokat dan Kartu Tanda Anggota (KTA) organisasi advokat yang sah.",
        "Bagi pelamar Magang Mahasiswa / Mitra IT & Bisnis: Disarankan melampirkan portofolio karya, sertifikat keahlian, atau tautan proyek pendukung (GitHub, artikel riset, desain, dll)."
      ]
    },
    {
      step: "03",
      title: "Format Pengiriman & Subjek Email",
      details: [
        "Seluruh dokumen wajib digabungkan atau dikompres ke dalam format PDF (maksimal ukuran total file 5 MB).",
        "Kirimkan melalui email resmi ke: karir@ylbhsikap.or.id",
        "Gunakan format subjek email: [KODE_POSISI] - [NAMA_LENGKAP] (Contoh: INT-HUKUM - Budi Santoso atau ADV - Siti Rahma)."
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Panduan Administrasi</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 mt-2">
              Cara Melamar & Ketentuan Berkas
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md">
            Pastikan seluruh dokumen persyaratan disusun secara runut dan dikirimkan sesuai dengan format administrasi lembaga.
          </p>
        </div>

        {/* Kotak Utama Pengiriman Berkas (Grid Responsif) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Kolom Kiri & Tengah: Langkah Terperinci */}
          <div className="lg:col-span-2 space-y-6">
            {panduanBerkas.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-8 bg-white sm:bg-gray-50 border border-gray-200/80 rounded-2xl hover:border-gray-950 hover:shadow-xl transition-all duration-300"
              >
                {/* Garis Aksen Emas di Atas Card saat Hover */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-black uppercase tracking-wide text-gray-950 flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      // {item.step}
                    </span>
                    {item.title}
                  </h3>
                </div>

                <ul className="space-y-3 mt-4">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-gray-700 leading-relaxed">
                      <CheckCircle2 size={15} className="text-amber-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Kolom Kanan: Kotak Informasi Kontak Pengiriman */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col justify-between p-6 sm:p-8 bg-gray-950 text-white rounded-2xl border border-gray-800 shadow-2xl h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gray-900 rounded-xl text-amber-500 border border-gray-800">
                  <Mail size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-800/50">
                  Resmi & Terpusat
                </span>
              </div>

              <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                Kirimkan Berkas Anda
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Tim HR LBH SIKAP hanya memproses lamaran yang dikirimkan melalui alamat email resmi lembaga di bawah ini:
              </p>

              <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 mb-6 select-all">
                <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Alamat Email Tujuan:</span>
                <span className="text-sm font-mono font-bold text-amber-500">karir@ylbhsikap.or.id</span>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-950/30 border border-amber-900/50 rounded-xl mb-6">
                <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={16} />
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  Harap pastikan seluruh dokumen lengkap. Berkas yang tidak sesuai format atau melebihi batas ukuran file akan di-drop secara otomatis oleh sistem.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 text-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Bergabunglah Menegakkan Keadilan Bersama Kami
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}