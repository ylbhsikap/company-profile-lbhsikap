import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dataSeluruhCabang, asetGambar } from "@/data/data";
import NewsRowCard from "@/components/features/berita/NewsRowCard";

interface HalamanCabangProps {
  params: Promise<{ cabang: string }>;
}

export default function HalamanCabangHome({ params }: HalamanCabangProps) {
  const { cabang } = use(params);
  const cabangAktif = dataSeluruhCabang[cabang];

  if (!cabangAktif) {
    notFound();
  }

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
      
      <section id="hero" className="relative w-full h-[85vh] md:h-[90vh] bg-gray-950 scroll-mt-0">
        <div className="absolute inset-0 z-0">
          <Image 
          src={cabangAktif.info.bannerCabang || asetGambar.bannerUtama} 
          alt={cabangAktif.info.nama} 
           fill 
           className="object-cover opacity-60" 
             />
        </div>
        <div className="absolute inset-0 z-0 bg-linear-to-b from-black/60 via-transparent to-transparent" />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
          <div className="pt-20"> 
            <span className="inline-block bg-amber-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
              Kantor Wilayah Resmi
            </span>
            <h1 className="text-4xl font-black uppercase tracking-wider md:text-7xl max-w-4xl leading-tight mb-4">
              {cabangAktif.info.nama}
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-2xl uppercase tracking-widest font-medium">
              Mewujudkan Akses Keadilan & Pendampingan Hukum Structural di {cabangAktif.info.kota}
            </p>
          </div>
        </div>
      </section>

      <section id="kontak" className="w-full py-12 bg-gray-950 text-white border-t border-gray-900/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-light">
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-2">Sekretariat</span>
            <p className="text-gray-300 leading-relaxed">{cabangAktif.info.alamat}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-2">Hubungi Kami</span>
            <p className="text-gray-300">Telepon: {cabangAktif.info.telepon}</p>
            <p className="text-gray-300 mt-0.5">Email: {cabangAktif.info.email}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 tracking-wider uppercase mb-2">Yurisdiksi Operasional</span>
            <p className="text-gray-300">{cabangAktif.info.jamOperasional}</p>
            <p className="text-amber-600 font-bold mt-2 uppercase tracking-wider">Direktur: {cabangAktif.info.direktur}</p>
          </div>
        </div>
      </section>

      <section id="tentang" className="w-full bg-white py-20 border-b border-gray-150 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 border-l-4 border-gray-950 pl-4">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Tentang Kami & Personil</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Profil struktural lembaga pembela hukum publik pro bono di {cabangAktif.info.kota}</p>
          </div>
          
          {strukturOrganisasi && (
            <div className="mb-20 bg-gray-50 border border-gray-200/80 rounded-sm p-8 sm:p-12">
              <div className="flex flex-col items-center gap-4">
                
                {strukturOrganisasi.pimpinan?.nama && (
                  <div className="text-center bg-white border border-gray-200 px-6 py-4 rounded-xs shadow-xs min-w-65">
                    <span className="block text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">{strukturOrganisasi.pimpinan.jabatan}</span>
                    <p className="font-black text-gray-950 uppercase text-sm">{strukturOrganisasi.pimpinan.nama}</p>
                  </div>
                )}

                {strukturOrganisasi.pimpinan?.nama && strukturOrganisasi.direktur?.nama && (
                  <div className="w-px h-6 bg-gray-300" />
                )}

                {strukturOrganisasi.direktur?.nama && (
                  <div className="text-center bg-white border border-gray-200 px-6 py-4 rounded-xs shadow-xs min-w-65">
                    <span className="block text-[9px] font-bold text-amber-600 uppercase tracking-widest mb-1">{strukturOrganisasi.direktur.jabatan}</span>
                    <p className="font-black text-gray-950 uppercase text-sm">{strukturOrganisasi.direktur.nama}</p>
                  </div>
                )}

                {strukturOrganisasi.divisi && strukturOrganisasi.divisi.length > 0 && (
                  <>
                    <div className="w-px h-6 bg-gray-300" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-2">
                      {strukturOrganisasi.divisi.map((div, index) => (
                        <div key={index} className="text-center bg-white border border-gray-200 p-4 rounded-xs shadow-xs">
                          <span className="block text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-1">{div.jabatan}</span>
                          <p className="font-bold text-gray-800 text-xs uppercase">{div.nama}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          
          {daftarAdvokat.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {daftarAdvokat.map((advokat) => (
                <div key={advokat.id} className="flex flex-col sm:flex-row bg-gray-50 border border-gray-200 rounded-sm overflow-hidden shadow-xs">
                  <div className="relative w-full sm:w-36 h-44 bg-gray-200 shrink-0">
                    <Image src={advokat.foto} alt={advokat.nama} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-black text-gray-950 uppercase tracking-wide text-base">{advokat.nama}</h3>
                    <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1 mb-2">{advokat.jabatan}</span>
                    <p className="text-xs text-gray-600 leading-relaxed">{advokat.deskripsi}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic uppercase tracking-wider">Daftar personil advokat wilayah sedang dalam proses pembaharuan.</p>
          )}
        </div>
      </section>

      <section id="berita" className="w-full py-20 bg-white border-b border-gray-150 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-gray-950 pl-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Kabar Advokat Wilayah</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Ringkasan rilis siaran pers dan penanganan kasus hukum</p>
          </div>
          
          {beritaCabang.length > 0 ? (
            <div className="space-y-4">
              {beritaCabang.map((item) => (
                <NewsRowCard 
                  key={item.id} 
                  item={item} 
                  gambarTerpilih={(item as any).image ? (item as any).image : (asetGambar[item.gambarKunci] ?? asetGambar.bannerUtama)}
                  isRightText={false} 
                  isPriority={false} 
                />
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-400 italic uppercase tracking-wider">Belum ada rilis siaran pers untuk wilayah ini.</p>
          )}
        </div>
      </section>

      <section id="posbakum" className="w-full py-20 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-amber-600 pl-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Jaringan Posbakum</h2>
            <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">Titik layanan bantuan hukum di {cabangAktif.info.kota}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cabangAktif.posbakum && cabangAktif.posbakum.length > 0 ? (
              cabangAktif.posbakum.map((pos) => (
                <div key={pos.id} className="bg-white border border-gray-200 p-6 rounded-sm shadow-xs hover:border-amber-600 transition-colors">
                  <h3 className="font-black text-gray-950 text-sm uppercase tracking-wide">{pos.nama}</h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{pos.alamat}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-gray-400">Kelurahan: {pos.kelurahan} | Kapanewon: {pos.kapanewon}</span>
                    <span className="text-amber-700">Hub: {pos.telepon}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-2">
                <p className="text-xs text-gray-400 italic uppercase tracking-wider">Jaringan Posbakum untuk cabang wilayah ini dalam tahap pemetaan.</p>
              </div>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}