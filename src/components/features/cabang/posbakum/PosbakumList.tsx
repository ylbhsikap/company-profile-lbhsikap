// src/components/features/cabang/PosbakumList.tsx
import React from "react";

interface PosbakumType {
  id: string | number;
  nama: string;
  alamat: string;
  telepon?: string;
  gmapsUrl: string;
  mapsLink?: string;
}

interface PosbakumListProps {
  kota: string;
  posbakumList?: PosbakumType[];
}

export function BranchPosbakumList({ kota, posbakumList = [] }: PosbakumListProps) {
  return (
    <section id="posbakum" className="w-full py-16 bg-white border-t border-gray-100 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* JUDUL SEKSI */}
        <div className="mb-12 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Jaringan Posbakum
          </span>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-gray-950 sm:text-4xl">
            Pos Bantuan Hukum
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600">
            Titik layanan bantuan hukum pro bono LBH SIKAP di {kota} untuk mempermudah masyarakat dalam memperoleh konsultasi dan bantuan hukum.
          </p>
        </div>
        
        {/* CONTAINER DAFTAR POSBAKUM */}
        <div className="-mx-6 flex overflow-x-auto px-6 pb-6 gap-6 snap-x snap-mandatory scrollbar-none sm:mx-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:px-0 sm:pb-0 sm:overflow-visible">
          {posbakumList && posbakumList.length > 0 ? (
            posbakumList.map((pos) => (
              <div 
                key={pos.id} 
                className="w-72 shrink-0 snap-center flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-xs transition-all duration-300 sm:w-full sm:flex-none hover:-translate-y-1 hover:border-amber-500/30 hover:shadow-md"
              >
                <div>
                  {/* EMBED MAPS */}
                  <div className="w-full h-40 rounded-lg overflow-hidden border border-gray-100 mb-5 bg-gray-50 relative">
                    <iframe
                      title={`Peta Lokasi ${pos.nama}`}
                      src={pos.gmapsUrl}
                      className="w-full h-full border-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                    ></iframe>
                  </div>

                  {/* NAMA POSBAKUM */}
                  <h3 className="text-lg font-black uppercase tracking-wide text-gray-950">
                    POSBAKUM <span className="text-amber-600">{pos.nama}</span>
                  </h3>

                  {/* DETAIL ALAMAT & TELEPON */}
                  <div className="mt-4 space-y-2.5 text-xs text-gray-600">
                    <div className="grid grid-cols-[56px_1fr] gap-2 items-start">
                      <span className="font-bold text-gray-400 uppercase tracking-wider">Alamat</span>
                      <span className="leading-relaxed line-clamp-3">{pos.alamat}</span>
                    </div>
                    
                    {pos.telepon && (
                      <div className="grid grid-cols-[56px_1fr] gap-2 items-center">
                        <span className="font-bold text-gray-400 uppercase tracking-wider">Telp</span>
                        <span className="font-semibold text-gray-900">{pos.telepon}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* TOMBOL AKSI */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a 
                    href={pos.mapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pos.nama + " " + pos.alamat)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex w-full items-center justify-center gap-1 rounded-lg border border-gray-950 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-950 transition-all hover:bg-gray-950 hover:text-white text-center"
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
            <p className="text-xs text-gray-400 italic uppercase tracking-wider">
              Jaringan Posbakum di wilayah ini sedang dalam tahap pemetaan.
            </p>
          )}
        </div>

      </div>
    </section>
  );
}