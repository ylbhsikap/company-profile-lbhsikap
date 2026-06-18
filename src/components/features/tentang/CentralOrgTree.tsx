import React from "react";

export function CentralOrgTree({ data }: { data: any }) {
  return (
    <section className="py-20 w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-600 mb-3">
          Struktur Yayasan
        </h2>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-950 mb-16">
          Kepengurusan Pusat
        </h1>

        {/* 1. PEMBINA - GRID ELEGANT */}
        <div className="mb-20">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-8 border-b border-gray-100 pb-4 inline-block">
            Dewan Pembina
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.values(data.pembina).map((nama: any, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-16 h-16 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-3 group-hover:bg-amber-50 transition-colors">
                  <span className="text-gray-400 font-bold text-xs">{i + 1}</span>
                </div>
                <p className="text-xs font-medium text-gray-950 uppercase tracking-wide">{nama}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. PENGURUS - LAYOUT SIMETRIS */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20">
          <div className="p-8 border-l-4 border-gray-950 bg-gray-50 text-left w-full md:w-80">
            <p className="text-[9px] font-black uppercase text-amber-600 tracking-[0.2em]">Ketua Umum</p>
            <p className="text-lg font-bold text-gray-950 mt-1">{data.pengurus.ketua}</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-60">
            <div className="p-4 border-b border-gray-200 text-left">
              <p className="text-[9px] font-bold uppercase text-gray-400">Sekretaris</p>
              <p className="text-sm font-semibold">{data.pengurus.sekretaris}</p>
            </div>
            <div className="p-4 border-b border-gray-200 text-left">
              <p className="text-[9px] font-bold uppercase text-gray-400">Bendahara</p>
              <p className="text-sm font-semibold">{data.pengurus.bendahara}</p>
            </div>
          </div>
        </div>

        {/* 3. PENGAWAS - FOOTER BOX */}
        <div className="inline-block border border-gray-200 rounded-sm px-10 py-6">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Dewan Pengawas</p>
          <p className="text-sm font-bold text-gray-950">{data.pengawas.ketua}</p>
        </div>
      </div>
    </section>
  );
}