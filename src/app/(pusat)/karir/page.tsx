// src/app/(pusat)/karir/page.tsx
"use client";
import { useState, useRef, useEffect } from "react";
import { asetGambar } from "@/data/data";
import { SubPageHeader } from "@/components/layout/SubPageHeader";

// Impor komponen
import KarirIntro from "@/components/features/pusat/karir/KarirInfo";
import KarirList from "@/components/features/pusat/karir/KarirList";
import KarirDevelopment from "@/components/features/pusat/karir/KarirDevelopment";
import ProgramMagangNasional from "@/components/features/pusat/karir/ProgramMagangNasional";
import KarirRequirements from "@/components/features/pusat/karir/KarirRequirements";
import KarirApplication from "@/components/features/pusat/karir/KarirApplication";
import KarirProcess from "@/components/features/pusat/karir/KarirProcess";
import { CareerFaqSection } from "@/components/features/pusat/karir/CareerFaqSection";
import { masterFaqData } from "@/data/faqData";

// Impor Ikon
import { Briefcase, Layers, GraduationCap, FileText, CheckCircle2, RefreshCw, Code, Menu, X, HelpCircle } from "lucide-react";

export default function KarirPage() {
  const [activeSection, setActiveSection] = useState("pengantar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const faqKarir = masterFaqData.filter(item => item.category === "Karier & Rekrutmen");

  const menuItems = [
    { id: "pengantar", label: "01. Budaya Kerja", icon: Briefcase },
    { id: "lowongan", label: "02. Lowongan", icon: Layers },
    { id: "pengembangan", label: "03. Pengembangan", icon: GraduationCap },
    { id: "magang", label: "04. Magang", icon: Code },
    { id: "persyaratan", label: "05. Syarat", icon: CheckCircle2 },
    { id: "aplikasi", label: "06. Cara Melamar", icon: FileText },
    { id: "seleksi", label: "07. Seleksi", icon: RefreshCw },
    { id: "faq", label: "08. FAQ", icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

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
    // 💡 PERBAIKAN: Hapus overflow-x-hidden dari tag main agar fungsi sticky CSS tidak terhalang
    <main className="w-full bg-[#FAFAFA] min-h-screen selection:bg-black selection:text-white pb-24">
      
      {/* HERO SECTION */}
      <SubPageHeader 
        title="Karir" 
        subtitle="Kesempatan Bergabung Bersama LBH SIKAP" 
        bgImage={asetGambar.karir} 
      />

      {/* NAVBAR TAB (Sticky akan berfungsi normal menempel di atas saat discroll) */}
      <div className="sticky top-18 z-30 max-w-5xl mx-auto px-4 -mt-20 sm:-mt-24" ref={menuRef}>
        <nav className="relative bg-white/95 backdrop-blur-md border border-neutral-200/80 p-2 rounded-2xl shadow-2xl shadow-black/15 flex items-center justify-between gap-1">
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center w-full gap-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex-1 ${
                    isActive ? "bg-black text-white shadow-lg" : "text-neutral-500 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  <IconComponent size={12} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Nav */}
          <div className="flex lg:hidden items-center justify-between w-full px-2">
            <span className="text-xs font-bold uppercase text-neutral-900">
              {menuItems.find(m => m.id === activeSection)?.label}
            </span>
            <button 
              onClick={(e) => { 
                e.stopPropagation(); 
                setIsMenuOpen(!isMenuOpen); 
              }} 
              className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-neutral-200 shadow-2xl p-2 z-100 animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-1">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all text-left cursor-pointer ${
                        isActive ? "bg-black text-white" : "text-neutral-600 hover:bg-neutral-100"
                      }`}
                    >
                      <IconComponent size={14} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* CANVAS UTAMA FULL VIEW */}
      <div className="w-full max-w-[96%] sm:max-w-[97%] lg:max-w-[98%] mx-auto pt-16 px-4 sm:px-8 lg:px-10 flex flex-col gap-24">
        
        <div id="pengantar">
          <KarirIntro />
        </div>
        
        <div id="lowongan">
          <KarirList />
        </div>

        <div id="pengembangan">
          <KarirDevelopment />
        </div>

        <div id="magang">
          <ProgramMagangNasional />
        </div>

        {/* Khusus Desktop: Bagian Persyaratan dan Cara Melamar Dibuat Berdampingan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div id="persyaratan">
            <KarirRequirements />
          </div>
          <div id="aplikasi">
            <KarirApplication />
          </div>
        </div>

        <div id="seleksi">
          <KarirProcess />
        </div>

        <div id="faq" className="pt-8 border-t border-neutral-200">
          <CareerFaqSection faqList={faqKarir} />
        </div>

      </div>
    </main>
  );
}