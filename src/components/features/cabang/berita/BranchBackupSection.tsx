// src/components/features/cabang/BranchBackupSection.tsx
import React from "react";

interface BackupItem {
  id: string | number;
  title: string;
  excerpt: string;
  date?: string;
}

interface BranchBackupSectionProps {
  sectionBackup?: {
    pers: BackupItem[];
    edukasi: BackupItem[];
  };
}

export function BranchBackupSection({ sectionBackup }: BranchBackupSectionProps) {
  if (!sectionBackup) return null;

  return (
    <section id="backup" className="w-full py-16 bg-white border-b border-gray-150 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL UTAMA SEKSI (Diposisikan di Sebelah Kanan) */}
        <div className="mb-12 flex flex-col items-center md:items-end text-center md:text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Arsip & Publikasi
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Rilis Pers & Edukasi Publik
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Kumpulan siaran pers resmi serta materi edukasi hukum untuk meningkatkan kesadaran hukum masyarakat.
          </p>
        </div>

        {/* CONTAINER 2 KOLOM (RILIS PERS & EDUKASI PUBLIK) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* KOLOM RILIS PERS */}
          <div className="flex flex-col space-y-4">
            <div className="border-l-4 border-amber-600 pl-3">
              <h3 className="text-lg font-black uppercase tracking-wider text-gray-950">
                Rilis Pers
              </h3>
            </div>
            <div className="space-y-4">
              {sectionBackup.pers.map((item) => (
                <div 
                  key={item.id} 
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {item.date && (
                      <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600">
                        {item.date}
                      </span>
                    )}
                    <h4 className="font-black text-gray-950 uppercase tracking-wide text-sm mt-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-600 mt-2 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* KOLOM EDUKASI PUBLIK */}
          <div className="flex flex-col space-y-4">
            <div className="border-l-4 border-gray-950 pl-3">
              <h3 className="text-lg font-black uppercase tracking-wider text-gray-950">
                Edukasi Publik
              </h3>
            </div>
            <div className="space-y-4">
              {sectionBackup.edukasi.map((item) => (
                <div 
                  key={item.id} 
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600">
                      Edukasi Hukum
                    </span>
                    <h4 className="font-black text-gray-950 uppercase tracking-wide text-sm mt-1 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-600 mt-2 line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}