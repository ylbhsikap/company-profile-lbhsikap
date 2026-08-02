// src/app/(pusat)/tentang/page.tsx
import React from "react";
import { asetGambar, dataSeluruhCabang, dataKantorPusat } from "@/data/data";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { BranchNetwork } from "@/components/features/cabang/BranchNetwork";
import { CentralOrgTree } from "@/components/features/tentang/CentralOrgTree";
import { LogoSejarahSection } from "@/components/features/tentang/LogoSejarahSection"; // 💡 1. Import komponen Logo & Sejarah

export default function TentangPusatPage() {
  // Pemetaan data cabang nasional untuk komponen BranchNetwork
  const listCabangData = Object.keys(dataSeluruhCabang).map((slug) => {
    const cabang = dataSeluruhCabang[slug as keyof typeof dataSeluruhCabang];
    return {
      slug,
      kota: cabang.info.kota,
      alamat: cabang.info.alamat,
      telepon: cabang.info.telepon,
      email: cabang.info.email,
      direktur: cabang.info.direktur,
    };
  });

  return (
    <main className="w-full bg-white">
      {/* 1. FOTO BACKGROUND JUDUL TENTANG KAMI */}
      <SubPageHeader 
        title="Tentang Kami" 
        subtitle="Profil & Rekam Jejak Lembaga" 
        bgImage={asetGambar.tentangkami} 
      />

      {/* 2. AREA INTEGRASI KONTEN (Terpusat rapi di max-w-6xl) */}
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-20">
       
        {/* SEKSI B: BAGAN STRUKTUR ORGANISASI (ORGANOGRAM) */}
        <section className="border-t border-gray-100 pt-12">
          <CentralOrgTree data={dataKantorPusat.struktur} />
        </section>

        {/* 💡 3. SEKSI C: LOGO, SEJARAH & TOMBOL DOWNLOAD (Diletakkan di bawah struktur organisasi) */}
        <section className="border-t border-gray-100 pt-12">
          <LogoSejarahSection 
            logoUrl={asetGambar.logoResmi}
            namaLembaga={dataKantorPusat.info.nama}
            sejarahTeks="Lembaga Bantuan Hukum & Studi Kebijakan Publik (LBH SIKAP) lahir dari kesadaran kolektif atas pentingnya akses keadilan yang merata bagi seluruh masyarakat marjinal. Sejak awal pendiriannya, lembaga ini konsisten bergerak di garis depan memberikan advokasi litigasi, non-litigasi, serta kajian kebijakan publik yang berpihak pada kebenaran dan keadilan sosial."
            downloadUrl="/assets/images/logo-lbh.png"
            downloadLabel="Unduh Paket Logo HD & Profil (PNG)"
          />
        </section>

      </div>

      {/* 4. JARINGAN KANTOR CABANG */}
      <BranchNetwork branches={listCabangData} />
    </main>
  );
}