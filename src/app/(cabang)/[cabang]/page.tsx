import React, { use } from "react";
import { notFound } from "next/navigation";
import { dataSeluruhCabang } from "@/data/data";
import { faqCabangData, getDynamicFaqForBranch } from "@/data/faqData";
import { BranchHeroSection } from "@/components/features/cabang/beranda/BranchHeroSection";
import { BranchOrgSection } from "@/components/features/cabang/tentang/BranchOrgSection";
import { BranchAdvokatSection } from "@/components/features/cabang/tentang/BranchAdvokatSection";
import { BranchNewsSection } from "@/components/features/cabang/berita/BranchNewsSection";
import { BranchBackupSection } from "@/components/features/cabang/berita/BranchBackupSection";
import { BranchPosbakumList } from "@/components/features/cabang/posbakum/PosbakumList";
import { FormKonsultasi } from "@/components/features/pusat/layanan/FormKonsultasi"; // 💡 Impor Form Konsultasi
import { BranchFaqSection } from "@/components/features/cabang/faq/BranchFaqSection";
import { BranchContactSection } from "@/components/features/cabang/kontak/BranchContactSection";

interface HalamanCabangProps {
  params: Promise<{ cabang: string }>;
}

export default function HalamanCabangHome({ params }: HalamanCabangProps) {
  const { cabang } = use(params);
  const cabangAktif = dataSeluruhCabang[cabang];

  if (!cabangAktif) {
    notFound();
  }

  // MENGGABUNGKAN FAQ DINAMIS & FAQ MANUAL
  const faqManual = faqCabangData[cabang] || [];
  const faqDinamis = getDynamicFaqForBranch(cabangAktif.info, cabangAktif.posbakum);
  const faqCabangList = [...faqDinamis, ...faqManual];

  const beritaCabang = (cabangAktif.berita || []).map(item => ({
    ...item,
    category: item.category || "SIARAN PERS",
    color: item.color || "#09090b",
    slugCabang: cabang
  }));

  const daftarAdvokat = cabangAktif.anggota || [];
  const strukturOrganisasi = cabangAktif.struktur;

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen scroll-smooth">
      
      {/* SECTION HERO */}
      <BranchHeroSection info={cabangAktif.info} />

      {/* SECTION TENTANG & PERSONIL */}
      <BranchOrgSection kota={cabangAktif.info.kota} strukturOrganisasi={strukturOrganisasi} />
      <BranchAdvokatSection namaCabang={cabangAktif.info.nama} kota={cabangAktif.info.kota} daftarAdvokat={daftarAdvokat} />

      {/* SECTION BERITA */}
      <BranchNewsSection beritaList={beritaCabang} />

      {/* SECTION BACKUP (PERS & EDUKASI) */}
      <BranchBackupSection sectionBackup={cabangAktif.sectionBackup} />

      {/* SECTION POSBAKUM */}
      <BranchPosbakumList kota={cabangAktif.info.kota} posbakumList={cabangAktif.posbakum} />

      {/* SECTION FORM KONSULTASI & PREVIEW DOKUMEN A4 */}
      <section className="w-full py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 block mb-2">
            Layanan Pengaduan & Intake
          </span>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-gray-950">
            Formulir Konsultasi Hukum
          </h2>
          <p className="text-gray-500 text-xs uppercase tracking-wider max-w-xl mt-2 leading-relaxed">
            Isi formulir pengaduan perkara di bawah ini untuk mencatat rincian kasus secara resmi dan langsung cetak dokumen format A4.
          </p>
        </div>
        <FormKonsultasi />
      </section>

      {/* SECTION FAQ CABANG */}
      <BranchFaqSection faqList={faqCabangList} namaCabang={cabangAktif.info.nama} />

      {/* SECTION KONTAK UTAMA */}
      <BranchContactSection info={cabangAktif.info} />
      
    </main>
  );
}