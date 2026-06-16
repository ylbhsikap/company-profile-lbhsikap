// src/app/(pusat)/tentang/page.tsx
import React from "react";
import { asetGambar, dataSeluruhCabang, dataKantorPusat } from "@/data/data"; //[cite: 3, 4]
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { BranchNetwork } from "@/components/features/cabang/BranchNetwork"; //[cite: 3]
import { OrganogramTree } from "@/components/features/tentang/OrganogramTree"; //

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
    };
  }); //[cite: 3]

  return (
    <main className="w-full bg-white">
      {/* 1. FOTO BACKGROUND JUDUL TENTANG KAMI */}
      <SubPageHeader 
        title="Tentang Kami" 
        subtitle="Profil & Rekam Jejak Lembaga" 
        bgImage={asetGambar.tentangkami} //[cite: 3]
      />

      {/* 2. AREA INTEGRASI KONTEN (Terpusat rapi di max-w-6xl) */}
      <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col gap-20">
       
        {/* SEKSI B: BAGAN STRUKTUR ORGANISASI (ORGANOGRAM) */}
        <section className="border-t border-gray-100 pt-12">
          <OrganogramTree treeOrga={dataKantorPusat.struktur} />
        </section>

      </div>

      {/* 3. JARINGAN KANTOR CABANG */}
      <BranchNetwork branches={listCabangData} />
    </main>
  );
}