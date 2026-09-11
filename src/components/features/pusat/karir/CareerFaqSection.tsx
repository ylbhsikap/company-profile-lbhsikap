// src/components/features/pusat/karir/CareerFaqSection.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface CareerFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

interface CareerFaqSectionProps {
  faqList: CareerFaqItem[];
}

export function CareerFaqSection({ faqList }: CareerFaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faqList || faqList.length === 0) return null;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-0 bg-transparent">
      {/* Menggunakan w-full agar mengikuti lebar canvas utama secara fleksibel */}
      <div className="w-full">
        
        {/* Header Section: Sejajar kanan-kiri tapi berdempetan condong ke kiri */}
        <div className="flex flex-col md:flex-row md:items-end justify-start mb-16 gap-8 lg:gap-16 border-b border-gray-100 pb-8 text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Informasi Rekrutmen</span>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950 mt-2">
              FAQ & Panduan Karier
            </h2>
          </div>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-md text-left">
            Pertanyaan seputar tahapan seleksi, kualifikasi advokat/paralegal, dan ketentuan magang di LBH SIKAP.
          </p>
        </div>

        {/* List Akordeon FAQ (Membentang rapi mengikuti canvas) */}
        <div className="space-y-4">
          {faqList.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-white sm:bg-gray-50 border border-gray-200/80 rounded-2xl overflow-hidden hover:border-gray-950 transition-all duration-300"
              >
                {/* Garis Aksen Emas di Atas Card saat Terbuka/Hover */}
                <div className={`absolute top-0 left-6 right-6 h-0.5 bg-amber-600 transition-transform duration-300 ${isOpen ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"}`} />

                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-amber-600 transition-colors">
                      // {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <div>
                      <span className="inline-block text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-sm sm:text-base text-gray-950 leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`p-2.5 rounded-xl bg-neutral-100 sm:bg-white border border-gray-200 text-gray-700 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-gray-950 text-white border-gray-950" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                {/* Konten Jawaban */}
                {isOpen && (
                  <div className="px-6 pb-7 pt-2 sm:px-7 border-t border-gray-100/80 text-gray-600 text-xs sm:text-sm leading-relaxed text-justify animate-in fade-in duration-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}