import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dataSeluruhCabang, asetGambar } from "@/data/data";
import NewsRowCard from "@/components/features/berita/NewsRowCard";
import { BranchOrgTree } from "@/components/features/tentang/BranchOrgTree";
// 💡 SOLUSI ERROR 2307: Menggunakan deklarasi komponen inline agar bebas dari error jalur file import
function MapBox({ src }: { src: string }) {
  return (
    <div className="w-full flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
      <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
        Peta Lokasi Resmi
      </h2>
      <div className="relative flex-1 w-full min-h-87.5 overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
        <iframe 
          src={src} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          title="Peta Lokasi Kantor LBH SIKAP" 
          allowFullScreen 
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        ></iframe>
      </div>
    </div>
  );
}

function ContactCard({ alamat, jamOperasional, whatsapp, email }: {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
}) {
  const waLink = `https://wa.me/${whatsapp.replace(/^0/, '62').replace(/[^0-9]/g, '')}`;
  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8 flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
          Informasi Kontak Utama
        </h2>
        <p className="text-sm leading-relaxed text-gray-600 text-justify">
          {alamat}
        </p>
        <hr className="my-2 border-0 border-t border-gray-150" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Jam Operasional</span>
            <span className="text-sm font-semibold text-gray-800">{jamOperasional}</span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center border-b border-gray-50 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Hotline / WhatsApp</span>
            <span className="text-sm font-black text-gray-950">{whatsapp}</span>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:items-center pb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Email Resmi</span>
            <span className="text-sm font-semibold text-gray-800 break-all">{email}</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="block w-full rounded-lg bg-gray-950 py-3.5 text-center text-sm font-bold tracking-wider uppercase text-white shadow-xs transition-all duration-300 hover:bg-gray-800">
          Hubungi Melalui WhatsApp
        </a>
      </div>
    </div>
  );
}

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
      
      {/* SECTION HERO */}
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

     {/* SECTION TENTANG & PERSONIL */}
<section id="tentang" className="w-full bg-white py-20 border-b border-gray-150 scroll-mt-20">
  <div className="mx-auto max-w-6xl px-6">
    <div className="mb-16 border-l-4 border-gray-950 pl-4">
      <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">
        Tentang Kami & Personil
      </h2>
      <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest font-medium">
        Profil struktural lembaga pembela hukum publik pro bono di {cabangAktif.info.kota}
      </p>
    </div>

    {/* Struktur Organisasi */}
    {strukturOrganisasi && (
      <div className="mb-20">
        <BranchOrgTree data={strukturOrganisasi} />
      </div>
    )}

    {/* Judul Daftar Anggota Dinamis */}
    <div className="mt-16 mb-8 border-l-4 border-amber-600 pl-4">
      <h3 className="text-xl font-black uppercase tracking-wider text-gray-950">
        Daftar Anggota LBH SIKAP {cabangAktif.info.kota}
      </h3>
      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">
        Para Advokat & Paralegal yang bertugas di {cabangAktif.info.nama}
      </p>
    </div>

    {/* Daftar Advokat */}
    {daftarAdvokat.length > 0 ? (
      <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:px-0 sm:pb-0 sm:overflow-visible">
        {daftarAdvokat.map((advokat) => (
          <div
            key={advokat.id}
            className="w-70 shrink-0 snap-center flex flex-col sm:w-full sm:flex-none sm:flex-row bg-gray-50 border border-gray-200 rounded-sm overflow-hidden shadow-xs"
          >
            <div className="relative w-full sm:w-36 h-44 bg-gray-200 shrink-0">
              <Image src={advokat.foto} alt={advokat.nama} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-center min-w-0 w-full">
              <h3 className="font-black text-gray-950 uppercase tracking-wide text-base truncate">
                {advokat.nama}
              </h3>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-3">
                {advokat.jabatan}
              </span>

              <div className="bg-slate-50 rounded-md px-2 py-1 mt-1 mb-2">
                <div className="flex items-center gap-1 text-[10px] text-black">
                  <span>📞</span><span>{advokat.noHp}</span>
                </div>
                <div className="border-t border-slate-200 my-1"></div>
                <div className="flex items-center gap-1 text-[10px] text-black">
                  <span>✉️</span><span className="truncate">{advokat.email}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {advokat.deskripsi}
              </p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-xs text-gray-400 italic uppercase tracking-wider">
        Daftar personil advokat wilayah sedang dalam proses pembaharuan.
      </p>
    )}
  </div>
</section>

      {/* SECTION BERITA */}
      <section id="berita" className="w-full py-20 bg-white border-b border-gray-150 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="border-l-4 border-gray-950 pl-4 mb-16">
            <h2 className="text-3xl font-black uppercase tracking-wider text-gray-950 sm:text-4xl">Kabar Advokasi Wilayah</h2>
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

      {/* SECTION POSBAKUM */}
<section id="posbakum" className="w-full py-20 bg-gray-50 border-t border-gray-100 scroll-mt-20">
  <div className="mx-auto max-w-6xl px-6">
    
    <div className="mb-12 text-center md:text-left">
      <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
        Jaringan Posbakum
      </span>
      <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
        Pos Bantuan Hukum
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
        Titik layanan bantuan hukum pro bono LBH SIKAP di {cabangAktif.info.kota} untuk mempermudah masyarakat dalam memperoleh konsultasi dan bantuan hukum.
      </p>
    </div>
    
    {/* 💡 PERUBAHAN UTAMA: Gunakan flex, overflow-x-auto, dan gap agar bisa di-swipe di HP */}
    <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 sm:pb-0 sm:overflow-visible">
      {cabangAktif.posbakum && cabangAktif.posbakum.length > 0 ? (
        cabangAktif.posbakum.map((pos) => (
          <div 
            key={pos.id} 
            /* 💡 Tambahkan w-[280px] dan shrink-0 agar kartu tetap punya lebar di mobile */
            className="w-70 shrink-0 snap-center flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 sm:w-full hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
          >
            <div>
              <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-100 mb-5 bg-gray-100 relative">
                <iframe
                  title={`Peta Lokasi ${pos.nama}`}
                  src={
                    (pos as any).gmapsUrl && (pos as any).gmapsUrl.includes("embed") 
                      ? (pos as any).gmapsUrl 
                      : `https://maps.google.com/maps?q=${encodeURIComponent(pos.nama + " " + pos.alamat)}&t=&z=14&ie=UTF8&iwloc=&output=embed`
                  }
                  className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                POSBAKUM <span className="text-amber-600">{pos.nama}</span>
              </h3>
              
              <div className="mt-4 space-y-2.5 text-xs text-gray-600" suppressHydrationWarning>
                <p className="flex items-start gap-2">
                  <span className="font-bold text-gray-400 min-w-16.25">Alamat:</span>
                  <span className="leading-relaxed line-clamp-3 sm:line-clamp-none">{pos.alamat}</span>
                </p>
                
                {(pos.kelurahan || pos.kapanewon) && (
                  <p className="flex items-start gap-2">
                    <span className="font-bold text-gray-400 min-w-16.25">Wilayah:</span>
                    <span>
                      {pos.kelurahan && ` ${pos.kelurahan}`}
                      {pos.kelurahan && pos.kapanewon && " | "}
                      {pos.kapanewon && ` ${pos.kapanewon}`}
                    </span>
                  </p>
                )}

                {pos.telepon && (
                  <p className="flex items-center gap-2">
                    <span className="font-bold text-gray-400 min-w-16.25">Telp:</span>
                    <span>{pos.telepon}</span>
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <a 
                href={(pos as any).gmapsUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white"
              >
                Kunjungi Posbakum
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-xs text-gray-400 italic uppercase tracking-wider">
            Jaringan Posbakum untuk cabang wilayah ini dalam tahap pemetaan.
          </p>
        </div>
      )}
    </div>
  </div>
</section>
  {/* SECTION KONTAK UTAMA */}
      <section id="kontak" className="w-full py-16 bg-gray-50 border-b border-gray-200/60 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactCard 
            alamat={cabangAktif.info.alamat}
            jamOperasional={cabangAktif.info.jamOperasional}
            whatsapp={cabangAktif.info.telepon}
            email={cabangAktif.info.email}
          />
          {/* 💡 SOLUSI ERROR 2339: Menggunakan cabangAktif.info.mapsEmbed sesuai dengan skema asli tipe data Anda */}
          <MapBox 
            src={
              cabangAktif.info.mapsEmbed && cabangAktif.info.mapsEmbed.includes("embed")
                ? cabangAktif.info.mapsEmbed
                : `https://maps.google.com/maps?q=${encodeURIComponent(cabangAktif.info.nama + " " + cabangAktif.info.alamat)}&t=&z=14&ie=UTF8&iwloc=&output=embed`
            }
          />
        </div>
      </section>
    </main>
  );
}