// src/components/features/cabang/tentang/BranchOrgSection.tsx
import React from "react";
import { BranchOrgTree } from "@/components/features/cabang/tentang/BranchOrgTree";

interface BranchOrgSectionProps {
  kota: string;
  strukturOrganisasi?: any;
}

export function BranchOrgSection({ kota, strukturOrganisasi }: BranchOrgSectionProps) {
  if (!strukturOrganisasi) return null;

  return (
    <section id="tentang" className="w-full py-16 bg-white border-b border-gray-150 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI (Teks Tetap di Tengah / Center) */}
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Profil Struktural
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Tentang Kami & Personil
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm leading-relaxed text-gray-600">
            Profil struktural lembaga pembela hukum publik pro bono di wilayah {kota}.
          </p>
        </div>

        {/* POHON STRUKTUR ORGANISASI */}
        <div className="mb-8">
          <BranchOrgTree data={strukturOrganisasi} />
        </div>

      </div>
    </section>
  );
}