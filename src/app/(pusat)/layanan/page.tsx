// src/app/(pusat)/layanan/page.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { prosedurLayanan, asetGambar, dataKantorPusat } from "@/data/data";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { ComplaintForm } from "@/components/features/layanan/ComplaintForm"; 
import { FormKonsultasi } from "@/components/features/pusat/layanan/FormKonsultasi"; // 💡 Impor FormKonsultasi yang baru dibuat
import { KriteriaSection } from "@/components/features/layanan/KriteriaSection";
import { ProsedurSection } from "@/components/features/layanan/ProsedurSection";
import { FaqSection } from "@/components/features/pusat/layanan/FaqSection";
import { ArrowUpRight, Scale, ShieldCheck, FileText, HelpCircle, FileSpreadsheet, Menu, X } from "lucide-react";

export default function LayananPusatPage() {
  const { kriteria } = dataKantorPusat;
  const [activeTab, setActiveTab] = useState("kriteria");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: "kriteria", label: "01. Kriteria Bantuan", icon: Scale },
    { id: "prosedur", label: "02. Prosedur Perkara", icon: ShieldCheck },
    { id: "faq", label: "03. Tanya Jawab", icon: HelpCircle },
    { id: "konsultasi", label: "04. Formulir Konsultasi", icon: FileSpreadsheet }, // 💡 Menu Baru Canvas A4
    { id: "aduan", label: "05. Formulir Aduan", icon: FileText },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen relative selection:bg-black selection:text-white">
      <SubPageHeader 
        title="Layanan Hukum" 
        subtitle="Membuka Akses Keadilan Tanpa Batas Ruang & Waktu" 
        bgImage={asetGambar.layananBawah} 
      />

      {/* NAVBAR TAB */}
      <div className="sticky top-6 z-30 max-w-5xl mx-auto px-4 mt-8 sm:mt-12" ref={menuRef}>
        <nav className="bg-white/90 backdrop-blur-md border border-neutral-200/80 p-2 rounded-2xl shadow-xl shadow-black/10 flex items-center justify-between gap-1 relative">
          <div className="hidden md:flex items-center justify-between w-full gap-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap flex-1 ${
                    isActive 
                      ? "bg-black text-white shadow-md shadow-black/20 scale-[1.02]" 
                      : "text-neutral-500 hover:text-black hover:bg-neutral-100/60"
                  }`}
                >
                  <IconComponent size={14} className={isActive ? "text-amber-400" : "text-neutral-400"} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex md:hidden items-center justify-between w-full px-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-800">
              {(() => {
                const current = menuItems.find(m => m.id === activeTab);
                const IconComp = current?.icon || Scale;
                return (
                  <>
                    <IconComp size={16} className="text-black" />
                    <span>{current?.label}</span>
                  </>
                );
              })()}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 hover:bg-black hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              aria-label="Toggle Menu"
            >
              <span>Menu</span>
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-2 md:hidden animate-in fade-in slide-in-from-top-2 duration-300 z-50">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-left ${
                        isActive ? "bg-black text-white" : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <IconComponent size={16} className={isActive ? "text-amber-400" : "text-neutral-400"} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* RENDER KONTEN BERDASARKAN KOMPONEN */}
      <section className="mx-auto w-11/12 max-w-7xl py-16 min-h-125">
        {activeTab === "kriteria" && <KriteriaSection kriteria={kriteria} />}
        {activeTab === "prosedur" && <ProsedurSection prosedurLayanan={prosedurLayanan} />}
        {activeTab === "faq" && <FaqSection />}
        {activeTab === "konsultasi" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <FormKonsultasi />
          </div>
        )}
        {activeTab === "aduan" && (
          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ComplaintForm />
          </div>
        )}
      </section>

      {/* FLOATING ACTION BUTTON */}
      {activeTab !== "konsultasi" && activeTab !== "aduan" && (
        <button
          onClick={() => {
            setActiveTab("konsultasi");
            window.scrollTo({ top: 200, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-8 z-40 flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl shadow-2xl hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 group cursor-pointer border border-neutral-800"
        >
          <span className="text-xs font-bold uppercase tracking-widest">Buat Dokumen Konsultasi</span>
          <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </main>
  );
}