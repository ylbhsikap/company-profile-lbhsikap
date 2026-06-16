// src/app/components/features/layanan/PosbakumList.tsx
import React from "react";
import { daftarPosbakum } from "@/data/data";

export default function PosbakumList() {
  return (
    <div className="w-full">
      {/* Grid Utama: Menampilkan 2 kolom di desktop agar memanjang rapi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {daftarPosbakum.map((pos) => (
          <div 
            key={pos.id} 
            className="flex flex-col justify-between p-6 bg-white rounded-xl border border-gray-200/60 shadow-xs hover:shadow-md transition-all duration-300"
          >
            {/* Bagian Atas: Informasi Kantor */}
            <div>
              {/* Menampilkan pos.nama sesuai data sumber */}
              <h4 className="font-black text-gray-950 text-xl tracking-wide uppercase">
                {pos.nama}
              </h4>
              
              {/* Menampilkan pos.alamat */}
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                📍 {pos.alamat}
              </p>
              
              {/* Menampilkan pos.telepon */}
              <p className="text-gray-500 text-xs font-semibold mt-2">
                📞 Hubungi: {pos.telepon}
              </p>
            </div>

            {/* Bagian Bawah: Tombol Navigasi Google Maps (Penting untuk SEO Brand) */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <a 
                href={pos.gmapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-950 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gray-800"
              >
                Lihat Rute Lokasi ➔
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}