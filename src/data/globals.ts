export interface AsetGambarType {
  bannerUtama: string;
  bannerPusat: string;
  kantorSekretariat: string;
  logoResmi: string;
  tentangkami: string;
  kontak: string;
  layananBawah: string;
  publikasi: string; 
  dokumentasiKasus: string;
  pks: string;
  demo: string;
  penyuluhan: string;
  mitra: string;
  karir: string;
}

export const asetGambar: AsetGambarType = {
  bannerUtama: "/assets/images/ruangan10.jpg",
  bannerPusat: "/assets/images/bannerPusat.jpg",
  kantorSekretariat: "/assets/images/ruangan1.jpg", 
  logoResmi: "/assets/images/logo-lbh.png",
  tentangkami: "/assets/images/tentangkami.jpg",
  kontak: "/assets/images/ruangan.jpg",
  layananBawah: "/assets/images/layananhukum.jpg",
  publikasi: "/assets/images/publikasi.jpg",
  dokumentasiKasus: "/assets/images/pkssamarinda.jpg",
  pks: "/assets/images/pkssamarinda.jpg",
  demo: "/assets/images/demo.jpg",
  penyuluhan: "/assets/images/penyuluhan.jpg",
  mitra: "/assets/images/mitraa.jpg",
  karir: "/assets/images/mitraa.jpg"
};

export interface KontakInfoType {
  alamat: string;
  jamOperasional: string;
  whatsapp: string;
  email: string;
  mapsEmbed: string;
}

export interface Berita {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  color: string;
  gambarKunci: keyof AsetGambarType;
  slugCabang: string; 
}

export interface AnggotaType {
  id: string;
  nama: string;
  jabatan: string;
  deskripsi: string;
  foto: string;
  noHp: string;
  email: string;
  slugCabang: string;
}

export interface LowonganKarir {
  id: string;
  judul: string;
  kategori: "Advokat Magang" | "Magang Mahasiswa" | "Paralegal" | "Advokat";
  deskripsi: string;
  kualifikasi: string[];
  isProgramMitra: boolean;
  mitraTarget?: string;
  backgroundKeahlian?: string[];
  penempatan?: string;
  deadline: string;
}

export const kriteriaLayananGlobal = [
  { judul: "Faktor Ekonomi", deskripsi: "Diutamakan bagi masyarakat marjinal/miskin yang dibuktikan dengan melampirkan Surat Keterangan Tidak Mampu (SKTM).", borderLeft: "#09090b" },
  { judul: "Kasus Dimensi Publik", deskripsi: "Kasus atau perkara yang dihadapi berdampak luas bagi komunitas, lingkungan hidup, atau hak-hak dasar kelompok (bukan murni sengketa privat antarelite).", borderLeft: "#4b5563" },
  { judul: "Pembatasan Kasus", deskripsi: "Secara ideologis, LBH SIKAP berkomitmen tidak akan bertindak sebagai pendamping bagi pelaku korupsi maupun pelaku kekerasan seksual.", borderLeft: "#dc2626" }
];

export const kriteriaLayanan = kriteriaLayananGlobal; 

export const kontakInfo: KontakInfoType = {
  alamat: "Pondok Condongcatur, Blok G No.10, Gorongan, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283.",
  jamOperasional: "Senin - Jumat | 09.00 - 16.00 WIB",
  whatsapp: "+62 819-0615-7620",
  email: "yogyakarta@ylbhsikap.or.id",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m12!1m3!1m2!1s0x2e7a599bdf99bf77%3A0x6bdaaa82d6da8!2sCondongcatur%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sid!2sid!4v1718520000000!5m2!1sid!2sid"
};

export const prosedurLayanan = [
  { step: "01", title: "Menyiapkan Dokumen Persyaratan", desc: "Pemohon wajib menyiapkan fotokopi KTP, KK, dokumen bukti tidak mampu seperti SKTM atau kartu jaminan sosial, serta berkas pendukung yang berkaitan dengan kasus hukumnya." },
  { step: "02", title: "Mendatangi Kantor LBH Terakreditasi", desc: "Pemohon mendatangi langsung kantor OBH atau LBH terdekat yang statusnya telah resmi terakreditasi oleh Kementerian Hukum dan HAM.." },
  { step: "03", title: "Mengajukan Permohonan dan Kronologis", desc: "Memberikan pendampingan hukum sesuai kebutuhan, baik litigasi maupun non-litigasi." },
  { step: "04", title: "Pemeriksaan Administrasi dan Kelayakan Kasus", desc: "Pihak OBH/LBH akan memverifikasi keabsahan dokumen persyaratan dan menganalisis kelayakan kasus hukum tersebut dalam waktu maksimal tiga hari kerja.." },
  { step: "05", title: " Pengambilan Keputusan dan Penandatanganan Kuasa", desc: "Apabila permohonan disetujui, pemohon akan menandatangani Surat Kuasa Khusus agar tim advokat lembaga tersebut dapat bertindak sebagai pendamping hukum resminya.." },
  { step: "06", title: "Pelaksanaan Bantuan Hukum Gratis", desc: "Tim OBH/LBH akan memberikan pendampingan hukum penuh secara gratis, baik melalui jalur persidangan (litigasi) maupun penyelesaian di luar pengadilan (non-litigasi)." }
];