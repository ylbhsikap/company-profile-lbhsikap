// src/app/(pusat)/layout.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { dataKantorPusat, dataSeluruhCabang } from "@/data/data"; // 💡 Import dataSeluruhCabang

export default function LayoutPusat({ children }: { children: React.ReactNode }) {
  const info = dataKantorPusat.info;
  const menuNavigasi = dataKantorPusat.menu;
  
  // 💡 EKSTRAKSI OTOMATIS: Mengubah data database cabang menjadi format menu dropdown
  const daftarCabang = Object.keys(dataSeluruhCabang).map((slug) => ({
    name: dataSeluruhCabang[slug].info.kota, // Mengambil teks kota, misal: "Yogyakarta"
    href: `/${slug}`,                       // Mengarahkan ke folder rute, misal: "/yogyakarta"
  }));

  return (
    <div className="flex flex-col min-h-screen">
      {/* 💡 Kirim data menu utama dan data cabang ke Navbar */}
      <Navbar 
        menuItems={menuNavigasi} 
        namaLembaga={info.nama} 
        cabangItems={daftarCabang} 
      />
      
      <main className="grow">{children}</main>
      
      <Footer 
        namaLembaga={info.nama}
        alamat={info.alamat}
        telepon={info.telepon}
        email={info.email}
      />
    </div>
  );
}