import Link from "next/link";

// 1. Definisikan tipe data untuk isi dari objek 'item' (Sudah Diperbaiki)
interface BeritaItem {
  id: string;      // ✨ Diubah menjadi string agar sinkron dengan data asli Anda
  title: string;   // Judul berita harus berupa teks
  excerpt: string; // Ringkasan berita harus berupa teks
  date?: string;   // Tanggal bersifat opsional (boleh ada atau tidak)
}

// 2. Definisikan properti (props) yang diterima oleh komponen NewsCard
interface NewsCardProps {
  item: BeritaItem;
}

// 3. Komponen Utama dengan tipe data yang sudah lengkap dan benar
export default function NewsCard({ item }: NewsCardProps) {
  return (
    <article className="card">
      {/* Tanggal hanya akan muncul jika data item.date tersedia */}
      {item.date && <span className="card-date">{item.date}</span>}
      
      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>
      
      {/* Tombol dinamis menuju ke halaman detail berita berdasarkan ID */}
      <Link href={`/berita/${item.id}`} className="read-more">
        Baca Selengkapnya &rarr;
      </Link>
    </article>
  );
}