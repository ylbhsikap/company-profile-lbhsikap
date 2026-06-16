// src/components/MemberList.tsx
import React from "react";
import Image from "next/image";

interface AnggotaType {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
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

      {/* List Anggota */}
      <div className="flex flex-col gap-12">
        {anggotaList.map((member, index) => {
          const isEven = index % 2 === 1;
          return (
            <div 
              key={member.id} 
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs md:grid md:grid-cols-2 md:min-h-95 lg:min-h-110"
            >
              {/* Kolom 1: Keterangan Profil */}
              <div className={`flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-white z-10
                ${isEven ? "md:order-2" : "md:order-1"}`}
              >
                <h3 className="text-xl font-black text-gray-950 lg:text-2xl">
                  {member.nama}
                </h3>
                <span className="mb-4 mt-1.5 inline-block text-xs font-bold uppercase tracking-widest text-amber-700">
                  {member.jabatan}
                </span>
                <p className="text-justify text-sm leading-relaxed text-gray-600 sm:text-base md:leading-loose">
                  {member.deskripsi}
                </p>
              </div>

              {/* Kolom 2: Area Wadah Foto */}
              <div className={`relative min-h-75 w-full bg-gray-50 md:min-h-full
                ${isEven ? "md:order-1" : "md:order-2"}`}
              >
                {/* 💡 PERBAIKAN: Gunakan 'absolute' agar 'inset-0' bekerja dengan benar untuk Image fill */}
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
                
                {/* Efek Sambungan Gradasi */}
                <div 
                  className={`absolute inset-0 z-20 h-full w-full pointer-events-none bg-linear-to-b from-white via-white/10 to-transparent
                    md:h-full md:w-1/4 md:from-white md:via-white/20 md:to-transparent
                    ${isEven ? "md:right-0 md:left-auto md:bg-linear-to-l" : "md:left-0 md:bg-linear-to-r"}`}
                ></div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}