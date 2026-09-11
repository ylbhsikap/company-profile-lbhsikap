// src/components/features/cabang/tentang/BranchOrgTree.tsx
import React from "react";

interface BranchOrgTreeProps {
  data: {
    pembina: { ketua: string };
    pengurus: { direktur: string; sekretaris: string; bendahara: string };
    bidang: {
      litigasi: { kepala: string; sub_bidang: { pidana: string; perdata: string; phi: string } };
      non_litigasi: { kepala: string };
    };
  };
}

export function BranchOrgTree({ data }: BranchOrgTreeProps) {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        {/* 1. PEMBINA (Center) */}
        <div className="text-center border-b border-gray-100 pb-6">
          <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Dewan Pembina</p>
          <p className="text-xs font-black text-gray-950 mt-1 uppercase tracking-wide">{data.pembina.ketua}</p>
        </div>

        {/* 2. PENGURUS UTAMA (Direktur, Sekretaris, Bendahara - Center Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "Direktur", val: data.pengurus.direktur, utama: true },
            { label: "Sekretaris", val: data.pengurus.sekretaris, utama: false },
            { label: "Bendahara", val: data.pengurus.bendahara, utama: false },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`p-5 rounded-xl border text-center transition-all duration-300 hover:shadow-sm ${
                item.utama 
                  ? "bg-gray-950 border-gray-950 text-white shadow-xs" 
                  : "bg-gray-50 border-gray-200 text-gray-950"
              }`}
            >
              <p className={`text-[9px] uppercase font-bold tracking-widest ${item.utama ? "text-amber-500" : "text-gray-400"}`}>
                {item.label}
              </p>
              <p className={`text-xs font-bold mt-1.5 leading-tight uppercase ${item.utama ? "text-white" : "text-gray-950"}`}>
                {item.val}
              </p>
            </div>
          ))}
        </div>

        {/* 3. BIDANG LITIGASI & NON-LITIGASI (Center Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
          
          {/* Bidang Litigasi */}
          <div className="text-center bg-gray-50/60 p-5 rounded-xl border border-gray-200/60 space-y-4">
            <div>
              <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Kepala Bidang Litigasi</p>
              <p className="text-xs font-black text-gray-950 mt-1 uppercase tracking-wide">{data.bidang.litigasi.kepala}</p>
            </div>
            
            {/* Sub Bidang Litigasi */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100">
              {Object.entries(data.bidang.litigasi.sub_bidang).map(([key, val]) => (
                <div key={key} className="bg-white p-2.5 rounded-lg border border-gray-200/80 text-center shadow-2xs">
                  <p className="text-[8px] uppercase text-gray-400 font-extrabold tracking-wider">{key}</p>
                  <p className="text-[10px] font-semibold text-gray-900 mt-1 leading-tight">{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bidang Non-Litigasi */}
          <div className="text-center bg-gray-50/60 p-5 rounded-xl border border-gray-200/60 flex flex-col justify-between space-y-4">
            <div>
              <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Kepala Bidang Non-Litigasi</p>
              <p className="text-xs font-black text-gray-950 mt-1 uppercase tracking-wide">{data.bidang.non_litigasi.kepala}</p>
            </div>
            <div className="pt-2 border-t border-gray-100 text-[10px] text-gray-500 font-medium italic">
              Pelayanan hukum di luar persidangan & mediasi struktural
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}