import Link from "next/link";
import Image from "next/image";
import { Berita, asetGambar } from "@/data/data";

export function PublikasiCard({ artikel }: { artikel: Berita }) {
  return (
    <div className="border border-gray-200 p-4 rounded-xl bg-white flex flex-col shadow-sm hover:border-amber-500 transition-all group overflow-hidden">
      
      {/* BAGIAN BANNER GAMBAR */}
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image 
          src={asetGambar[artikel.gambarKunci]} 
          alt={artikel.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* BAGIAN KONTEN */}
      <div className="flex flex-col grow">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-extrabold bg-gray-950 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {artikel.slugCabang}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: artikel.color }}>
            {artikel.category}
          </span>
        </div>
        
        <h2 className="text-base font-bold mt-3 text-gray-950 line-clamp-2 uppercase leading-tight group-hover:text-amber-700 transition-colors">
          {artikel.title}
        </h2>
        
        <p className="text-xs text-gray-500 mt-2 line-clamp-2 grow">
          {artikel.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-200/60">
          <Link 
            href={`/${artikel.slugCabang}/publikasi/${artikel.id}`}
            className="text-xs font-bold text-gray-950 hover:text-amber-600 transition-all inline-flex items-center gap-1 uppercase tracking-wider"
          >
            Lihat Detail &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}