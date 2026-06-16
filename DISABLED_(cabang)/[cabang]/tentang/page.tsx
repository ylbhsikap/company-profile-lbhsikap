// src/app/(cabang)/[cabang]/tentang/page.tsx
import React, { use } from "react";
import { notFound } from "next/navigation";
import { dataSeluruhCabang } from "@/data/data";
import { MemberList } from "@/components/features/tentang/MemberList";
import { OrganogramTree } from "@/components/features/tentang/OrganogramTree";

interface TentangCabangProps {
  params: Promise<{ cabang: string }>;
}

export default function TentangCabangPage({ params }: TentangCabangProps) {
  const { cabang } = use(params);
  const cabangAktif = dataSeluruhCabang[cabang];

  if (!cabangAktif) {
    notFound();
  }

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Profil */}
        <div className="mb-12 border-b border-gray-200 pb-6">
          <h1 className="text-2xl font-black tracking-wider uppercase text-gray-950 sm:text-3xl">
            Profil & Struktur Wilayah
          </h1>
          <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">
            Mengenal jajaran pembela hukum publik pro bono di {cabangAktif.info.nama}
          </p>
        </div>

        {/* Struktur Bagan / Organogram */}
        <div className="mb-16">
          <OrganogramTree struktur={cabangAktif.struktur} namaCabang={cabangAktif.info.nama} />
        </div>

        {/* Daftar Kartu Profil Anggota */}
        <div>
          <MemberList anggota={cabangAktif.anggota} />
        </div>
      </div>
    </main>
  );
}