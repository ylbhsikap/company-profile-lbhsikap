// src/components/karir/KarirForm.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UploadCloud, CheckCircle, Loader2 } from "lucide-react";

// 1. Skema Validasi dengan Zod
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  motivasi: z.string().min(10, "Ceritakan motivasi Anda minimal 10 karakter"),
  file: z.any().refine((files) => files?.length > 0, "CV/Berkas wajib diunggah"),
});

type FormValues = z.infer<typeof formSchema>;

export default function KarirForm({ kategori }: { kategori: string }) {
  const [submitted, setSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Data Lamaran:", data); 
    await new Promise((resolve) => setTimeout(resolve, 2000)); 
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-green-50 text-green-800 rounded-2xl flex flex-col items-center text-center">
        <CheckCircle size={48} className="mb-4 text-green-600" />
        <h4 className="text-xl font-bold">Lamaran Berhasil Terkirim!</h4>
        <p>Terima kasih telah bergabung. Kami akan segera meninjau data Anda.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">Daftar sebagai: {kategori}</h3>
      
      <div className="space-y-4">
        {/* Input Nama */}
        <div>
          <input {...register("nama")} placeholder="Nama Lengkap" className="w-full p-3 bg-gray-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none" />
          {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama.message as string}</p>}
        </div>
        
        {/* Input Email */}
        <div>
          <input {...register("email")} placeholder="Email Aktif" className="w-full p-3 bg-gray-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
        </div>
        
        {/* Input Motivasi */}
        <div>
          <textarea {...register("motivasi")} placeholder="Ceritakan motivasi Anda bergabung di LBH SIKAP..." className="w-full p-3 bg-gray-50 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none h-32"></textarea>
          {errors.motivasi && <p className="text-red-500 text-xs mt-1">{errors.motivasi.message as string}</p>}
        </div>

        {/* Input File */}
        <div className="border-2 border-dashed border-gray-200 rounded-2xl p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
          <input type="file" {...register("file")} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer block">
            <UploadCloud className="mx-auto text-blue-600 mb-2" />
            <p className="text-sm text-gray-500">Klik untuk upload CV & Berkas (PDF)</p>
          </label>
          {errors.file && <p className="text-red-500 text-xs mt-1">{errors.file.message as string}</p>}
        </div>

        {/* Tombol Kirim */}
        <button 
          disabled={isSubmitting} 
          className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all flex justify-center items-center gap-2 cursor-pointer"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : "Kirim Lamaran Sekarang"}
        </button>
      </div>
    </form>
  );
}