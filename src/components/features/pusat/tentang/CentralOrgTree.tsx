import React from "react";

export function CentralOrgTree({ data }: { data: any }) {
  return (
    <section className="py-12 w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* JUDUL */}
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-600 mb-2 block">
            Struktur Yayasan
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-950">
            Pengurus Pusat
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center space-y-10">
          {/* 1. PEMBINA - CENTER & COMPACT */}
          <div className="w-full">
            <h3 className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">
              Dewan Pembina
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {Object.values(data.pembina).map((nama: any, i) => (
                <div key={i} className="group cursor-pointer bg-gray-50/60 border border-gray-100 rounded-lg px-4 py-3 w-40 text-center hover:bg-amber-50/50 transition-colors">
                  <span className="text-[9px] font-bold text-amber-600 block mb-1">0{i + 1}</span>
                  <p className="text-xs font-semibold text-gray-950 uppercase tracking-wide leading-tight">{nama}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. PENGURUS - LAYOUT SIMETRIS CENTER */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="p-5 border-l-4 border-gray-950 bg-gray-50 text-center md:text-left w-full md:w-64 rounded-r-lg">
              <p className="text-[9px] font-black uppercase text-amber-600 tracking-[0.2em]">Ketua Umum</p>
              <p className="text-base font-bold text-gray-950 mt-1">{data.pengurus.ketua}</p>
            </div>
            <div className="flex flex-row md:flex-col gap-3 w-full md:w-56 justify-center">
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-md text-center md:text-left flex-1">
                <p className="text-[8px] font-bold uppercase text-gray-400">Sekretaris</p>
                <p className="text-xs font-semibold text-gray-950">{data.pengurus.sekretaris}</p>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-md text-center md:text-left flex-1">
                <p className="text-[8px] font-bold uppercase text-gray-400">Bendahara</p>
                <p className="text-xs font-semibold text-gray-950">{data.pengurus.bendahara}</p>
              </div>
            </div>
          </div>

          {/* 3. PENGAWAS - COMPACT BOX */}
          <div className="inline-block border border-gray-200 bg-gray-50/40 rounded-md px-8 py-4 text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">Dewan Pengawas</p>
            <p className="text-xs font-bold text-gray-950 uppercase tracking-wide">{data.pengawas.ketua}</p>
          </div>
        </div>
      </div>
    </section>
  );
}