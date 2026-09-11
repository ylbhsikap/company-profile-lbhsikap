// src/components/features/pusat/layanan/FormKonsultasi.tsx
'use client';
import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image from 'next/image';
import { asetGambar } from '@/data/data'; // 💡 Pastikan path impor aset gambar sesuai

interface FormData {
  nama: string;
  nik: string;
  telepon: string;
  email: string;
  alamat: string;
  jenisKasus: string;
  pihakLawan: string;
  kronologi: string;
  tuntutan: string;
}

// 1. KOMPONEN TEMPLATE A4 UNTUK ADVOKAT (DENGAN KOP & TIMESTAMP)
function PrintableTemplate({ data }: { data: FormData }) {
  // Mendapatkan waktu cetak otomatis
  const waktuCetak = new Date().toLocaleString("id-ID", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  return (
    <div className="font-serif text-gray-900 bg-white relative min-h-[260mm] flex flex-col justify-between">
      <div>
        {/* KOP SURAT DENGAN LOGO */}
        <div className="flex items-center justify-between border-b-2 border-black pb-4 mb-6">
          <div className="relative w-16 h-16 shrink-0">
            <Image 
              src={asetGambar.logoResmi || "/images/logo.png"} 
              alt="Logo LBH SIKAP" 
              fill 
              className="object-contain" 
            />
          </div>
          <div className="text-center flex-1 px-4">
            <h2 className="text-sm font-black tracking-widest uppercase">LEMBAGA BANTUAN HUKUM SIKAP</h2>
            <h1 className="text-lg font-black uppercase mt-0.5">Formulir Intake Konsultasi & Layanan Hukum</h1>
            <p className="text-[9px] text-gray-600 uppercase tracking-wider mt-0.5">
              Dokumen Resmi Pendataan Kasus Pro Bono & Bantuan Hukum Struktural
            </p>
          </div>
          <div className="w-16"></div> {/* Spacer untuk menyeimbangkan flex */}
        </div>

        {/* INFORMASI WAKTU CETAK / GENERATE */}
        <div className="flex justify-between items-center text-[9px] text-gray-500 mb-4 uppercase tracking-wider border-b border-gray-200 pb-2">
          <span>Status: Dokumen Intake Resmi</span>
          <span>Dicetak pada: {waktuCetak}</span>
        </div>
        
        {/* I. IDENTITAS KLIEN */}
        <section className="mb-5">
          <h3 className="text-xs font-black bg-gray-100 p-1.5 border border-black mb-2 uppercase tracking-wide">
            I. Identitas Pemohon / Klien
          </h3>
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr>
                <td className="w-1/4 py-1 font-bold">Nama Lengkap</td>
                <td className="w-3/4 py-1">: {data.nama || ".................................................."}</td>
              </tr>
              <tr>
                <td className="py-1 font-bold">NIK / Identitas</td>
                <td className="py-1">: {data.nik || ".................................................."}</td>
              </tr>
              <tr>
                <td className="py-1 font-bold">No. WhatsApp / Telp</td>
                <td className="py-1">: {data.telepon || ".................................................."}</td>
              </tr>
              <tr>
                <td className="py-1 font-bold">Email</td>
                <td className="py-1">: {data.email || ".................................................."}</td>
              </tr>
              <tr>
                <td className="py-1 font-bold align-top">Alamat Domisili</td>
                <td className="py-1 align-top">: {data.alamat || ".................................................."}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* II. DETAIL PERKARA */}
        <section className="mb-5">
          <h3 className="text-xs font-black bg-gray-100 p-1.5 border border-black mb-2 uppercase tracking-wide">
            II. Pokok Perkara & Pihak Terkait
          </h3>
          <table className="w-full text-xs border-collapse">
            <tbody>
              <tr>
                <td className="w-1/4 py-1 font-bold">Klasifikasi Perkara</td>
                <td className="w-3/4 py-1">: {data.jenisKasus || "Belum dipilih"}</td>
              </tr>
              <tr>
                <td className="py-1 font-bold">Pihak Lawan / Terlapor</td>
                <td className="py-1">: {data.pihakLawan || "-"}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* III. KRONOLOGI KEJADIAN */}
        <section className="mb-5">
          <h3 className="text-xs font-black bg-gray-100 p-1.5 border border-black mb-2 uppercase tracking-wide">
            III. Uraian Singkat Kronologi Kejadian
          </h3>
          <div className="min-h-32 p-3 border border-black rounded-xs text-xs leading-relaxed text-justify bg-gray-50/30 whitespace-pre-wrap">
            {data.kronologi || "Belum ada kronologi yang diuraikan oleh pemohon..."}
          </div>
        </section>

        {/* IV. HARAPAN / TUNTUTAN KLIEN */}
        <section className="mb-6">
          <h3 className="text-xs font-black bg-gray-100 p-1.5 border border-black mb-2 uppercase tracking-wide">
            IV. Harapan & Bentuk Bantuan Hukum yang Diminta
          </h3>
          <div className="min-h-16 p-3 border border-black rounded-xs text-xs leading-relaxed text-justify bg-gray-50/30">
            {data.tuntutan || "-"}
          </div>
        </section>

        {/* V. TANDA TANGAN & VERIFIKASI */}
        <section className="mt-8 text-xs grid grid-cols-2 gap-8 pt-4">
          <div className="text-center">
            <p>Pemohon / Klien,</p>
            <div className="h-16"></div>
            <p className="font-bold underline uppercase">({data.nama || "........................................"})</p>
          </div>
          <div className="text-center">
            <p>Petugas Penerima / Advokat Piket,</p>
            <div className="h-16"></div>
            <p className="font-bold underline uppercase">(........................................)</p>
          </div>
        </section>
      </div>
    </div>
  );
}

// 2. KOMPONEN UTAMA FORMULIR & CANVAS PREVIEW
export function FormKonsultasi() {
  const printRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    nama: '',
    nik: '',
    telepon: '',
    email: '',
    alamat: '',
    jenisKasus: 'Perdata',
    pihakLawan: '',
    kronologi: '',
    tuntutan: ''
  });

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Form_Konsultasi_${formData.nama || 'Klien'}`,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto p-6 bg-gray-100 min-h-screen">
      
      {/* SISI KIRI: INPUT FORM (Lebar 5 Kolom) */}
      <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-4 self-start">
        <h2 className="text-lg font-black uppercase text-gray-950 border-b pb-3">
          Formulir Input Konsultasi
        </h2>
        
        <div>
          <label className="text-xs font-bold text-gray-700 uppercase">Nama Lengkap</label>
          <input 
            type="text" 
            className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
            placeholder="Sesuai KTP" 
            onChange={(e) => setFormData({...formData, nama: e.target.value})} 
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase">NIK</label>
            <input 
              type="text" 
              className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
              placeholder="16 digit NIK" 
              onChange={(e) => setFormData({...formData, nik: e.target.value})} 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase">No. WhatsApp</label>
            <input 
              type="text" 
              className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
              placeholder="08xxxxxxxxxx" 
              onChange={(e) => setFormData({...formData, telepon: e.target.value})} 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase">Email</label>
            <input 
              type="email" 
              className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
              placeholder="email@domain.com" 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase">Jenis Kasus</label>
            <select 
              className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden bg-white"
              onChange={(e) => setFormData({...formData, jenisKasus: e.target.value})}
            >
              <option value="Perdata">Perdata</option>
              <option value="Pidana">Pidana</option>
              <option value="PHI (Ketenagakerjaan)">PHI (Ketenagakerjaan)</option>
              <option value="TUN (Tata Usaha Negara)">TUN (Tata Usaha Negara)</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-700 uppercase">Alamat Domisili</label>
          <input 
            type="text" 
            className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
            placeholder="Alamat lengkap saat ini" 
            onChange={(e) => setFormData({...formData, alamat: e.target.value})} 
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-700 uppercase">Pihak Lawan / Terlapor</label>
          <input 
            type="text" 
            className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
            placeholder="Nama instansi / perorangan pihak lawan" 
            onChange={(e) => setFormData({...formData, pihakLawan: e.target.value})} 
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-700 uppercase">Uraian Kronologi Kejadian</label>
          <textarea 
            rows={4}
            className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
            placeholder="Jelaskan duduk perkara secara runut..." 
            onChange={(e) => setFormData({...formData, kronologi: e.target.value})} 
          />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-700 uppercase">Harapan / Tuntutan Hukum</label>
          <textarea 
            rows={2}
            className="w-full mt-1 p-2.5 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 outline-hidden" 
            placeholder="Apa yang diharapkan dari LBH SIKAP..." 
            onChange={(e) => setFormData({...formData, tuntutan: e.target.value})} 
          />
        </div>

        <button 
          onClick={() => handlePrint()} 
          className="w-full mt-4 flex items-center justify-center gap-2 bg-gray-950 text-white py-3 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all cursor-pointer"
        >
          <span>🖨️ Print / Download Dokumen A4</span>
        </button>
      </div>

      {/* SISI KANAN: CANVAS PREVIEW A4 (Lebar 7 Kolom) */}
      <div className="lg:col-span-7 bg-gray-200 p-6 rounded-xl border border-gray-300 overflow-auto flex justify-center items-start min-h-175">
        <div className="bg-white shadow-2xl p-12 w-[210mm] min-h-[297mm] box-border shrink-0 origin-top scale-[0.65] sm:scale-75 md:scale-90 lg:scale-85 xl:scale-95">
          <div ref={printRef} className="p-4">
            <PrintableTemplate data={formData} />
          </div>
        </div>
      </div>

    </div>
  );
}