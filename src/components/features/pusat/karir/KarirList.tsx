// src/components/features/pusat/karir/KarirList.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { dataKarir } from "@/data/data";
import KarirCard from "@/components/features/pusat/karir/KarirCard";
import { Briefcase, AlertCircle } from "lucide-react";

export default function KarirList() {
  return (
    <section className="w-full py-12 px-6 sm:px-10 lg:px-12 bg-neutral-100/70 border border-neutral-200/60 rounded-3xl">
      <div className="w-full">
        
        {/* Header Section: Sejajar kanan-kiri (horizontal) tapi berdempetan condong ke kiri */}
        <div className="flex flex-col md:flex-row md:items-end justify-start mb-16 gap-8 lg:gap-16 border-b border-neutral-200 pb-8 text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">
              Peluang Bergabung
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-neutral-950 mt-2">
              Lowongan & Posisi Aktif
            </h2>
          </div>
          <p className="text-neutral-500 text-xs uppercase tracking-wider max-w-md text-left leading-relaxed">
            Daftar formasi kebutuhan advokat publik, paralegal, peneliti, dan staf administratif di kantor pusat serta jaringan cabang LBH SIKAP.
          </p>
        </div>

        {/* Kondisi Jika Lowongan Tersedia vs Kosong */}
        {dataKarir && dataKarir.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataKarir.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full flex"
              >
                <KarirCard lowongan={item} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-neutral-200/80 rounded-2xl text-center shadow-2xs">
            <AlertCircle className="text-amber-600 mb-4" size={32} />
            <h3 className="text-base font-bold text-neutral-950 mb-1">Belum Ada Lowongan Aktif Saat Ini</h3>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              Silakan pantau halaman ini secara berkala atau kirimkan CV terbuka Anda melalui menu pengiriman berkas di bawah.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}