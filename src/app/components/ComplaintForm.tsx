"use client";

import React from "react";

export function ComplaintForm() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Sistem Keamanan LBH SIKAP: Berkas pengaduan Anda telah berhasil dienkripsi...");
    
    const target = e.target as HTMLFormElement;
    target.reset();
  };

  return (
    // Wadah Utama Formulir (Card)
    <div className="w-full rounded-xl border border-gray-200 bg-white p-6 shadow-xs sm:p-8">
      {/* Judul Formulir */}
      <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-gray-950 md:text-2xl">
        Formulir Kontak Aduan
      </h2>
      
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
        
        {/* INPUT NAMA */}
        <div className="flex flex-col gap-2">
          <label htmlFor="nama" className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Nama Lengkap Sesuai KTP
          </label>
          <input 
            type="text" 
            id="nama" 
            name="nama" 
            required 
            placeholder="Contoh: Ahmad Fauzi"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-hidden transition-all focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
          />
        </div>

        {/* INPUT WHATSAPP */}
        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Nomor WhatsApp / HP
          </label>
          <input 
            type="tel" 
            id="whatsapp" 
            name="whatsapp" 
            required 
            placeholder="Contoh: 081234567890"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-hidden transition-all focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
          />
        </div>

        {/* PILIHAN JENIS KASUS */}
        <div className="flex flex-col gap-2">
          <label htmlFor="jenisKasus" className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Jenis Masalah Hukum
          </label>
          <select 
            id="jenisKasus" 
            name="jenisKasus" 
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-hidden transition-all focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10 appearance-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%234b5563' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>\")", backgroundPosition: "right 1rem center", backgroundSize: "1.25rem", backgroundRepeat: "no-repeat" }}
          >
            <option value="" className="text-gray-400">-- Pilih Kategori Kasus --</option>
            <option value="Perburuhan">Ketenagakerjaan / Perburuhan</option>
            <option value="Pertanahan">Sengketa Tanah / Rumah</option>
            <option value="Pidana">Kriminal / Pidana (Korban Kriminalisasi)</option>
            <option value="Keluarga">Hukum Keluarga / Waris</option>
            <option value="Lainnya">Lain-lain / Hak Sipil</option>
          </select>
        </div>

        {/* KRONOLOGI KASUS */}
        <div className="flex flex-col gap-2">
          <label htmlFor="kronologi" className="text-xs font-bold uppercase tracking-wider text-gray-700">
            Ringkasan Kronologi Kasus
          </label>
          <textarea 
            id="kronologi" 
            name="kronologi" 
            rows={5} 
            required 
            placeholder="Ceritakan singkat kronologi masalah hukum yang sedang Anda hadapi..."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-hidden transition-all focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10 resize-y min-h-30"
          ></textarea>
        </div>

        {/* TOMBOL SUBMIT */}
        <button 
          type="submit" 
          className="mt-2 w-full rounded-lg bg-gray-950 py-3.5 text-sm font-bold tracking-wider uppercase text-white shadow-xs transition-all duration-300 hover:bg-gray-800 focus:ring-4 focus:ring-gray-950/20 active:scale-[0.99] cursor-pointer"
        >
          Kirim Berkas Aduan Resmi
        </button>
      </form>
    </div>
  );
}