// src/app/(cabang)/[cabang]/page.tsx
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

  // =========================================================================
  // 💡 METODE RINGKASAN: Hanya ambil maksimal 2 berita terbaru untuk dashboard
  // =========================================================================
  const beritaRingkasan = beritaCabang.slice(0, 2);
  const daftarAdvokat = cabangAktif.anggota || [];
  const strukturOrganisasi = cabangAktif.struktur;

  return (
    <main className="w-full bg-white text-gray-900 min-h-screen scroll-smooth">
      
      {/* 🏛️ SEKSI 1: HERO BANNER */}
      <section id="hero" className="relative w-full h-[60vh] bg-gray-950 scroll-mt-16">
        <div className="absolute inset-0 z-0">
          <Image src={asetGambar.bannerUtama} alt={cabangAktif.info.nama} fill priority className="object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white">
          <div>
            <span className="inline-block bg-amber-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm mb-4">Kantor Wilayah Resmi</span>
            <h1 className="text-4xl font-black uppercase tracking-wider md:text-6xl max-w-4xl leading-tight">{cabangAktif.info.nama}</h1>
            <p className="mt-4 text-sm sm:text-lg text-gray-200 max-w-2xl uppercase tracking-widest font-medium">Mewujudkan Akses Keadilan & Pendampingan Hukum Struktural di {cabangAktif.info.kota}</p>
          </div>
        </div>
      </section>

      {/* 📞 SEKSI 2: INFO KONTAK */}
      <section id="kontak" className="w-full py-8 bg-gray-950 text-white border-t border-gray-900/50 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-light">
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-1">Sekretariat</span>
            <p className="text-gray-300 leading-relaxed">{cabangAktif.info.alamat}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 uppercase tracking-wider mb-1">Hubungi Kami</span>
            <p className="text-gray-300">Telepon: {cabangAktif.info.telepon}</p>
            <p className="text-gray-300 mt-0.5">Email: {cabangAktif.info.email}</p>
          </div>
          <div>
            <span className="block font-black text-amber-500 tracking-wider uppercase mb-1">Yurisdiksi Operasional</span>
            <p className="text-gray-300">{cabangAktif.info.jamOperasional}</p>
            <p className="text-amber-600 font-bold mt-1 uppercase tracking-wider">Direktur: {cabangAktif.info.direktur}</p>
          </div>
        </div>
      </section>

      {/* ⚖️ SEKSI 3: PROFIL & STRUKTUR TIM */}
      <section id="tentang" className="w-full bg-white py-16 border-b border-gray-150 scroll-mt-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 border-l-4 border-gray-950 pl-4">
            <h2 className="text-2xl font-black uppercase tracking-wider text-gray-950 sm:text-3xl">Tentang Kami & Personil Wilayah</h2>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">Profil struktural lembaga pembela hukum publik pro bono di {cabangAktif.info.kota}</p>
          </div>

          {/* BAGAN STRUKTUR ORGANISASI */}
          {strukturOrganisasi && (
            <div className="mb-16 bg-gray-50 border border-gray-200/80 rounded-sm p-6 sm:p-8">
              <div className="text-center mb-8 border-b border-gray-200/60 pb-4">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-1">Struktur Organisasi</h3>
                <p className="text-xs sm:text-sm text-gray-600 uppercase tracking-wider font-bold">Bagan Garis Komando & Kepengurusan Kantor Cabang</p>
              </div>
              <div className="flex flex-col items-center max-w-2xl mx-auto">
                {strukturOrganisasi.pimpinan && (
                  <div className="text-center bg-white border border-gray-200 px-5 py-3 rounded-sm min-w-55">
                    <p className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider">{strukturOrganisasi.pimpinan.jabatan}</p>
                    <p className="text-xs font-black text-gray-950 uppercase mt-0.5">{strukturOrganisasi.pimpinan.nama}</p>
                  </div>
                )}
                <div className="w-0.5 h-6 bg-gray-300"></div>
                {strukturOrganisasi.direktur && (
                  <div className="text-center bg-white border border-gray-950 px-5 py-3 rounded-sm shadow-xs min-w-55">
                    <p className="text-[9px] font-extrabold text-amber-600 uppercase tracking-wider">{strukturOrganisasi.direktur.jabatan}</p>
                    <p className="text-xs font-black text-gray-950 uppercase mt-0.5">{strukturOrganisasi.direktur.nama}</p>
                  </div>
                )}
                {strukturOrganisasi.divisi && strukturOrganisasi.divisi.length > 0 && (
                  <>
                    <div className="w-0.5 h-6 bg-gray-300"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-1">
                      {strukturOrganisasi.divisi.map((div, index) => (
                        <div key={index} className="text-center bg-white border border-gray-200 px-4 py-2.5 rounded-sm">
                          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{div.jabatan}</p>
                          <p className="text-xs font-black text-gray-950 uppercase mt-0.5">{div.nama}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="w-full border-t border-dashed border-gray-200 mb-12" />

          {/* DAFTAR ADVOKAT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {daftarAdvokat.map((advokat) => (
              <div key={advokat.id} className="flex flex-col sm:flex-row bg-gray-50 border border-gray-200 rounded-sm overflow-hidden">
                <div className="relative w-full sm:w-44 h-60 sm:h-auto shrink-0 bg-gray-950">
                  <Image src={advokat.foto || "/assets/images/ruangan10.jpg"} alt={advokat.nama} fill className="object-cover object-center" sizes="180px" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-black text-gray-950 uppercase tracking-wide">{advokat.nama}</h3>
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">{advokat.jabatan}</p>
                    <hr className="my-3 border-gray-200" />
                    <p className="text-xs text-gray-600 text-justify leading-relaxed">{advokat.deskripsi}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase">
                    <span>LBH SIKAP BASE</span>
                    <span className="text-gray-950">ACTIVE ADVOCATE</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📰 SEKSI 4: RINGKASAN BERITA & ADVOKASI [ANCHOR: #berita] */}
      <section id="berita" className="w-full py-16 bg-white scroll-mt-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-gray-950 pl-4 mb-12">
            <h2 className="text-2xl font-black uppercase tracking-wider text-gray-950 sm:text-3xl">Kabar Advokat Wilayah</h2>
            <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-medium">Ringkasan rilis siaran pers dan penanganan kasus hukum di tingkat cabang</p>
          </div>

          {beritaRingkasan.length > 0 ? (
            <div className="flex flex-col gap-12">
              {beritaRingkasan.map((berita, index) => (
                <NewsRowCard 
                  key={berita.id}
                  item={berita} 
                  gambarTerpilih={asetGambar[berita.gambarKunci as keyof typeof asetGambar]}
                  isRightText={index % 2 === 1}
                  isPriority={index === 0}
                />
              ))}

              {/* 🎯 LINK UTAMA MENUJU HALAMAN ARSIP PENUH */}
              <div className="text-center mt-6">
                <Link 
                  href={`/publikasi#${cabang}-siaran`}
                  className="inline-block bg-gray-950 text-white hover:bg-amber-600 transition-colors px-8 py-3 rounded-sm text-xs font-black uppercase tracking-widest shadow-xs"
                >
                  Lihat Seluruh Berita & Publikasi {cabangAktif.info.kota} &rarr;
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 border border-gray-200">
              <p className="text-xs text-gray-400 italic">Belum ada dokumen publikasi atau siaran pers khusus di wilayah ini.</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}