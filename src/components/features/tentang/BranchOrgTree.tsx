import React from "react";

// Tipe data yang sesuai dengan struktur baru Anda
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
    <div className="w-full bg-white py-10">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* 1. PEMBINA */}
        <div className="text-center border-b border-gray-100 pb-8">
          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Dewan Pembina</p>
          <p className="text-sm font-black text-gray-950 mt-1">{data.pembina.ketua}</p>
        </div>

        {/* 2. PENGURUS (Direktur, Sek, Bend) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Direktur", val: data.pengurus.direktur, utama: true },
            { label: "Sekretaris", val: data.pengurus.sekretaris, utama: false },
            { label: "Bendahara", val: data.pengurus.bendahara, utama: false },
          ].map((item, i) => (
            <div key={i} className={`p-6 rounded-xl border ${item.utama ? "bg-gray-950 border-gray-950 text-white" : "bg-gray-50 border-gray-200"}`}>
              <p className={`text-[9px] uppercase font-bold ${item.utama ? "text-amber-500" : "text-gray-400"}`}>{item.label}</p>
              <p className="text-sm font-bold mt-2">{item.val}</p>
            </div>
          ))}
        </div>

        {/* 3. BIDANG LITIGASI & NON-LITIGASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-100">
            {/* Litigasi */}
          <div className="space-y-4">
             <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Kepala Bidang Litigasi</p>
             <p className="text-lg font-black">{data.bidang.litigasi.kepala}</p>
          <div className="grid grid-cols-3 gap-2">
                 {Object.entries(data.bidang.litigasi.sub_bidang).map(([key, val]) => (
           <div key={key} className="bg-gray-50 p-3 rounded text-center">
             <p className="text-[8px] uppercase text-gray-400 font-bold">{key}</p>
             <p className="text-[10px] font-medium mt-1">{val}</p>
            </div>
            ))}
            </div>
         </div>

           {/* Non-Litigasi (padding kiri diubah jadi pl-0 atau sejajar dengan gap grid) */}
         <div className="md:border-l md:border-gray-100 md:pl-6 space-y-4">
             <p className="text-[9px] font-bold text-amber-600 uppercase tracking-widest">Kepala Bidang Non-Litigasi</p>
             <p className="text-lg font-black">{data.bidang.non_litigasi.kepala}</p>
           </div>
          </div>
       </div>
      </div>
  );
}