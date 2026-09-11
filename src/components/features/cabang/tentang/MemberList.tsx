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
    <div className="mt-12 w-full bg-transparent">
      {/* Judul Seksi */}
      <div className="mb-12 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
          Profil Penegak Keadilan
        </span>
        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-gray-950 md:text-3xl">
          Advokat & Anggota Lembaga
        </h2>
      </div>

      <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-1 sm:gap-8 sm:px-0 sm:pb-0 sm:overflow-visible">
        {anggotaList.map((member, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={member.id} 
              className="w-72 shrink-0 snap-center flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs sm:w-full sm:flex-none sm:grid sm:grid-cols-2"
            >
              {/* Kolom 1: Keterangan Profil */}
              <div className={`flex flex-col justify-center p-6 sm:p-10 ${isEven ? "sm:order-2" : "sm:order-1"}`}>
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600">
                  {member.jabatan}
                </span>
                <h3 className="mt-1 text-lg sm:text-xl font-black text-gray-950 uppercase tracking-wide leading-tight">
                  {member.nama}
                </h3>
                
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-gray-600 line-clamp-4 sm:line-clamp-none">
                  {member.deskripsi}
                </p>

                {/* Grid Kontak Sejajar */}
                <div className="mt-6 space-y-2 border-t border-gray-100 pt-4 text-[10px] text-gray-600">
                  <div className="grid grid-cols-[64px_1fr] gap-2">
                    <span className="font-bold text-gray-400 uppercase tracking-wider">No. HP</span>
                    <span className="font-semibold text-gray-900">{member.noHp}</span>
                  </div>
                  <div className="grid grid-cols-[64px_1fr] gap-2">
                    <span className="font-bold text-gray-400 uppercase tracking-wider">Email</span>
                    <span className="font-semibold text-gray-900 break-all">{member.email}</span>
                  </div>
                </div>
              </div>

              {/* Kolom 2: Area Wadah Foto */}
              <div className={`relative h-64 w-full bg-gray-100 sm:h-full ${isEven ? "sm:order-1" : "sm:order-2"}`}>
                <Image
                  src={member.foto}
                  alt={member.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}