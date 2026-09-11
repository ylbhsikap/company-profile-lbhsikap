// src/components/features/layanan/BranchFaqSection.tsx
"use client";
import React, { useState } from "react";
import { FaqItem, generateFaqSchema } from "@/data/faqData";

interface BranchFaqSectionProps {
  faqList: FaqItem[];
  namaCabang: string;
}

export function BranchFaqSection({ faqList, namaCabang }: BranchFaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [isExpanded, setIsExpanded] = useState(false);

  // Jika cabang belum memiliki FAQ khusus, komponen tidak akan dirender
  if (!faqList || faqList.length === 0) return null;

  // Ambil daftar kategori unik dari list FAQ cabang tersebut + opsi "Semua"
  const categories = ["Semua", ...Array.from(new Set(faqList.map(item => item.category)))];

  // Filter FAQ berdasarkan kategori yang aktif
  const filteredFaq = activeCategory === "Semua" 
    ? faqList 
    : faqList.filter(item => item.category === activeCategory);

  // Batasi item yang ditampilkan jika belum di-expand (maksimal 5)
  const displayedFaq = isExpanded ? filteredFaq : filteredFaq.slice(0, 5);

  // Generate skema JSON-LD secara dinamis khusus untuk FAQ cabang ini
  const structuredData = generateFaqSchema(faqList);

  return (
    <section id="faq" className="w-full py-0 bg-white border-b border-gray-150 scroll-mt-20">
      {/* Skema SEO JSON-LD untuk Crawler Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600">Pusat Bantuan Wilayah</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-gray-950 mt-2">
            FAQ {namaCabang}
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-wider mt-2">
            Pertanyaan seputar informasi operasional, kontak, dan layanan khusus wilayah {namaCabang}.
          </p>
        </div>

        {/* KATEGORI FILTER BUTTONS */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pb-8">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => { 
                  setActiveCategory(cat); 
                  setIsExpanded(false); // Reset ke batasan 5 item saat kategori berganti
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gray-950 text-white shadow-md shadow-black/10 scale-105"
                    : "bg-gray-50 text-neutral-600 border border-neutral-200 hover:border-black hover:text-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* LIST PERTANYAAN */}
        <div className="space-y-4 transition-all duration-500 ease-in-out">
          {displayedFaq.map((item) => (
            <div 
              key={item.id} 
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-xs hover:border-gray-400 transition-colors animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-widest">
                  FAQ // {item.category}
                </span>
              </div>
              <h3 className="font-bold text-base text-gray-950 mb-2 leading-snug">
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* TOMBOL BACA LEBIH LANJUT */}
        {/* Tombol HANYA MUNCUL jika item di kategori tersebut LEBIH DARI 5 */}
        {filteredFaq.length > 5 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-gray-900 bg-transparent text-gray-900 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 group"
            >
              {isExpanded ? (
                <>
                  Tampilkan Lebih Sedikit 
                  <span className="ml-2 group-hover:-translate-y-1 transition-transform">↑</span>
                </>
              ) : (
                <>
                  Baca Lebih Lanjut 
                  <span className="ml-2 group-hover:translate-y-1 transition-transform">↓</span>
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}