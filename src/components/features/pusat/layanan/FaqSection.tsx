// src/components/features/layanan/FaqSection.tsx
"use client";
import React, { useState } from "react";
import { masterFaqData } from "@/data/faqData";

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Daftar kategori utama (bisa disesuaikan atau digenerate otomatis)
  const categories = [
    "Semua",
    "Umum LBH",
    "Regulasi & UU OBH",
    "Kriteria & SKTM",
    "Masalah Hukum",
    "Prosedur",
    "Konsultasi Online"
  ];

  // Mengambil data langsung dari master faqData.ts
  const faqData = masterFaqData;

  // Filter data berdasarkan kategori yang dipilih
  const filteredFaq = activeCategory === "Semua" 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  // Skema JSON-LD untuk SEO Google Rich Snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Script JSON-LD khusus untuk Crawler SEO Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400">Pusat Informasi</span>
        <h3 className="text-3xl font-black tracking-tight text-neutral-900 mt-2">Pertanyaan Umum (FAQ)</h3>
        <p className="text-neutral-500 text-sm mt-2">Pilih kategori di bawah ini untuk mempermudah pencarian informasi.</p>
      </div>

      {/* FILTER KATEGORI BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-black text-white shadow-md shadow-black/10 scale-105"
                : "bg-white text-neutral-600 border border-neutral-200 hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      {/* LIST PERTANYAAN */}
      <div className="space-y-4">
        {filteredFaq.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs hover:border-neutral-400 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold text-neutral-400">FAQ // {item.category}</span>
            </div>
            <h4 className="font-bold text-base text-neutral-900 mb-2">{item.question}</h4>
            <p className="text-neutral-600 text-sm leading-relaxed">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}