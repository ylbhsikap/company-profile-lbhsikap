"use client";

import React, { useState } from "react";
import { Upload, CheckCircle, Send, Loader2, Calendar, MessageSquare, MapPin, Building2 } from "lucide-react";
// Import dataSeluruhCabang untuk mengambil daftar cabang secara otomatis
import { dataSeluruhCabang } from "@/data/data"; 

export function ComplaintForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<"konsultasi" | "temu">("konsultasi");

  // Mengambil daftar slug cabang untuk dropdown
  const daftarCabang = Object.keys(dataSeluruhCabang);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full rounded-2xl border border-green-100 bg-green-50 p-8 text-center shadow-sm">
        <CheckCircle className="mx-auto mb-4 text-green-600" size={48} />
        <h3 className="text-xl font-bold text-green-900">Permohonan Diterima!</h3>
        <p className="mt-2 text-sm text-green-700">
          {mode === "konsultasi" 
            ? "Tim kami akan segera menghubungi Anda via WhatsApp untuk konsultasi awal." 
            : "Tim kami akan mengonfirmasi jadwal pertemuan Anda di kantor segera."}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-100 sm:p-10">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-gray-950">Konsultasi Hukum Gratis</h2>
        <p className="mt-2 text-sm text-gray-500">Pilih metode layanan dan isi formulir untuk mendapatkan analisis awal.</p>
      </div>
      
      <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        
        {/* SWITCH MODE: Konsultasi vs Janji Temu */}
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setMode("konsultasi")}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${mode === "konsultasi" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"}`}
          >
            <MessageSquare size={20} />
            <span className="text-[10px] font-bold uppercase">Konsultasi Online</span>
          </button>
          <button
            type="button"
            onClick={() => setMode("temu")}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${mode === "temu" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-100 bg-gray-50 text-gray-500 hover:border-gray-200"}`}
          >
            <MapPin size={20} />
            <span className="text-[10px] font-bold uppercase">Janji Temu</span>
          </button>
        </div>

        {/* Pilihan Cabang */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
            <Building2 size={12} /> Pilih Kantor Cabang
          </label>
          <select required className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none bg-white uppercase tracking-wider">
            <option value="">Pilih Wilayah Cabang...</option>
            {daftarCabang.map((cabang) => (
              <option key={cabang} value={cabang}>
                {dataSeluruhCabang[cabang].info.nama}
              </option>
            ))}
          </select>
        </div>

        {/* Informasi Pribadi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nama Lengkap</label>
            <input type="text" required placeholder="Nama sesuai KTP" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-all" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nomor WhatsApp</label>
            <input type="tel" required placeholder="08xx-xxxx-xxxx" className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-all" />
          </div>
        </div>

        {/* Jenis Masalah */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Jenis Masalah</label>
          <select required className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 outline-none transition-all bg-white">
            <option value="">Pilih Kategori...</option>
            <option>Perburuhan</option>
            <option>Pertanahan</option>
            <option>Pidana</option>
            <option>Keluarga</option>
          </select>
        </div>

        {/* RENDER JIKA MODE JANJI TEMU DIPILIH */}
        {mode === "temu" && (
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-2">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-4 flex items-center gap-2">
              <Calendar size={14} /> Atur Jadwal Pertemuan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500">Tanggal Pertemuan</label>
                <input type="date" min={new Date().toISOString().split("T")[0]} required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-gray-500">Estimasi Jam</label>
                <select required className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none bg-white">
                  <option value="">Pilih Jam...</option>
                  <option>09:00 - 10:00</option>
                  <option>10:00 - 11:00</option>
                  <option>13:00 - 14:00</option>
                  <option>14:00 - 15:00</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Kronologi */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Kronologi / Pertanyaan</label>
          <textarea rows={4} required placeholder={mode === "konsultasi" ? "Tuliskan pertanyaan hukum Anda..." : "Ceritakan duduk perkara yang Anda alami..."} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all"></textarea>
        </div>

        {/* Upload File */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Lampirkan Bukti (PDF/Foto)</label>
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-6 flex flex-col items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
            <Upload className="text-gray-400 mb-2" size={24} />
            <span className="text-xs text-gray-500 font-medium">Klik untuk upload dokumen</span>
          </div>
        </div>

        {/* Checkbox Persetujuan */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-xs text-gray-500 leading-relaxed">
            Saya menyatakan bahwa data yang diberikan adalah benar dan saya setuju untuk dihubungi oleh tim LBH SIKAP terkait permohonan ini.
          </span>
        </label>

        {/* Tombol Submit */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full rounded-xl bg-blue-700 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-200 hover:bg-blue-800 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <>Kirim {mode === "temu" ? "Janji Temu" : "Konsultasi"} <Send size={16} /></>}
        </button>
      </form>
    </div>
  );
}