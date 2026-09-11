"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Scale, FileText, Building2 } from "lucide-react";

const statistikData = [
  { id: 1, label: "Total Kasus Ditangani", value: 1240, icon: Scale, suffix: "+" },
  { id: 2, label: "Penerima Manfaat", value: 5800, icon: Users, suffix: " Jiwa" },
  { id: 3, label: "Laporan Riset & Kebijakan", value: 85, icon: FileText, suffix: "" },
  { id: 4, label: "Pos Bantuan Hukum", value: 12, icon: Building2, suffix: " Titik" },
];

export function StatistikLembaga() {
  return (
    <section className="w-full py-24 bg-white border-b border-gray-150">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Statistik */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Dampak & Kontribusi</span>
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-950 mt-2">
              Rekam Jejak Advokasi
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md">
            Akumulasi penanganan perkara, pendampingan hukum struktural, dan perluasan akses keadilan bagi masyarakat marjinal.
          </p>
        </div>

        {/* Grid Statistik ala Editorial Hukum */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistikData.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between p-8 bg-gray-50 border border-gray-200/80 rounded-xl hover:border-gray-950 hover:shadow-lg transition-all duration-300"
            >
              {/* Garis Aksen Emas di Atas Card saat Hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white rounded-lg shadow-xs text-gray-950 group-hover:bg-gray-950 group-hover:text-amber-500 transition-colors">
                  <stat.icon size={22} />
                </div>
                <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-gray-400">
                  // 0{stat.id}
                </span>
              </div>

              <div>
                <h3 className="text-4xl font-black text-gray-950 mb-2 tracking-tight">
                  {stat.value.toLocaleString()}
                  <span className="text-amber-600 text-xl font-bold ml-1">{stat.suffix}</span>
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}