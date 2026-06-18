// src/components/features/tentang/MemberList.tsx
import React from "react";
import Image from "next/image";

interface AnggotaType {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
  noHp: string;
  email: string;
  slugCabang: string;
}

interface MemberListProps {
  anggotaList: AnggotaType[];
}

export function MemberList({ anggotaList }: MemberListProps) {
  return (
    <div className="mt-12 w-full bg-white">
      {/* Judul Seksi Pengurus */}
      <h2 className="text-center text-2xl font-black uppercase tracking-wider text-gray-950 md:text-3xl">
        Profil Advokat & Anggota Lembaga
      </h2>
      <p className="mb-12 text-center text-sm font-medium text-gray-400 uppercase tracking-widest mt-1">
        Mengenal Lebih Dekat Penegak Keadilan Kami
      </p>

      {/* 💡 KUNCI SUKSES: Mengikuti Rumus Struktur Pembungkus BranchNetwork 100%
          - HP: Flex ke samping, bisa di-swipe, margin minus kiri-kanan.
          - Desktop (sm): Otomatis mematikan Flex dan berubah mutlak menjadi GRID 1 kolom (sm:grid-cols-1). */}
      <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-1 sm:gap-12 sm:px-0 sm:pb-0 sm:overflow-visible">
        {anggotaList.map((member, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={member.id} 
              /* 💡 KUNCI SUKSES KARTU:
                 - HP: Di-set w-[300px] agar kokoh tidak mengkerut (shrink-0) saat berjejer ke samping.
                 - Desktop (sm): Berubah menjadi lebar penuh (sm:w-full) dan membelah kartu menjadi 2 kolom (sm:grid-cols-2). */
              className="w-75 shrink-0 snap-center flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs sm:w-full sm:flex-none sm:grid sm:grid-cols-2 sm:min-h-95 lg:min-h-110"
            >
              {/* Kolom 1: Keterangan Profil */}
              <div className={`flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-white z-10
                ${isEven ? "sm:order-2" : "sm:order-1"}`}
              >
                <h3 className="text-xl font-black text-gray-950 lg:text-2xl">
                  {member.nama}
                </h3>
                <span className="mb-4 mt-1.5 inline-block text-xs font-bold uppercase tracking-widest text-amber-700">
                  {member.jabatan}
                </span>
                <p className="text-justify text-sm leading-relaxed text-gray-600 sm:text-base md:leading-loose line-clamp-6 sm:line-clamp-none">
                  {member.deskripsi}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">No. HP:</span> {member.noHp}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-bold">Email:</span> {member.email}
                  </p>
                </div>
              </div>

              {/* Kolom 2: Area Wadah Foto */}
              <div className={`relative min-h-64 w-full bg-gray-50 sm:min-h-full
                ${isEven ? "sm:order-1" : "sm:order-2"}`}
              >
                <div className="absolute inset-0 z-0 h-full w-full">
                  <Image
                    src={member.foto}
                    alt={member.nama}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                
                {/* Efek Sambungan Gradasi (Disinkronkan ke breakpoint sm:) */}
                <div 
                  className={`absolute inset-0 z-20 h-full w-full pointer-events-none bg-linear-to-b from-white via-white/10 to-transparent
                    sm:h-full sm:w-1/4 sm:from-white sm:via-white/20 sm:to-transparent
                    ${isEven ? "sm:right-0 sm:left-auto sm:bg-linear-to-l" : "sm:left-0 sm:bg-linear-to-r"}`}
                ></div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}