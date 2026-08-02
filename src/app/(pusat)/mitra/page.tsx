// src/app/(pusat)/layanan/page.tsx
import { asetGambar, dataKantorPusat } from "@/data/data";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { PartnerNetwork } from "@/components/features/mitra/PartnerNetwork";
import { PartnerLogoGrid } from "@/components/features/mitra/PartnerLogoGrid";

export default function LayananPusatPage() {
  return (
    <main className="w-full bg-white">
      <SubPageHeader 
        title="Mitra" 
        subtitle="Mitra & Partner Kolaborasi" 
        bgImage={asetGambar.mitra} 
      />
      {/* ZONA 1: Kriteria & Form - Tetap Sama (sudah benar) */}
      
      {/* ZONA 2: MITRA & PARTNERSHIP TEKNOLOGI */}
      <PartnerNetwork partners={dataKantorPusat.mitra} />

      {/* ZONA 3: INSTANSI, JARINGAN KELURAHAN & FIRMA HUKUM (LOGO SAJA) */}
      <PartnerLogoGrid 
        judul="Mitra & Partnership Nasional"
        subjudul="Instansi Pemerintah, Jaringan Kelurahan & Firma Hukum Anggota"
        logos={dataKantorPusat.instansiMitra}
      />
    </main>
  );
}