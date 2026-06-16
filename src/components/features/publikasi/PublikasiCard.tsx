import Link from "next/link";
import { Berita } from "@/data/data";

export function PublikasiCard({ artikel }: { artikel: Berita }) {
  return (
    <div className="border border-gray-200 p-6 rounded-xl bg-gray-50 flex flex-col justify-between shadow-xs hover:border-amber-500 transition-all">
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-extrabold bg-gray-950 text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">
            {artikel.slugCabang}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: artikel.color }}>
            {artikel.category}
          </span>
        </div>
        <h2 className="text-base font-bold mt-3 text-gray-950 line-clamp-2 uppercase leading-tight">
          {artikel.title}
        </h2>
        <p className="text-xs text-gray-500 mt-2 line-clamp-2">{artikel.excerpt}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200/60">
        <Link 
          href={`/${artikel.slugCabang}/publikasi/${artikel.id}`}
          className="text-xs font-bold text-gray-950 hover:text-amber-600 transition-all inline-flex items-center gap-1 uppercase tracking-wider"
        >
          Lihat Detail &rarr;
        </Link>
      </div>
    </div>
  );
}