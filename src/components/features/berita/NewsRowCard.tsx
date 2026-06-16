// src/components/features/berita/NewsRowCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AsetGambarType } from "@/data/data";

interface BeritaItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  color?: string;
  gambarKunci?: keyof AsetGambarType;
}

interface NewsRowCardProps {
  item: BeritaItem;
  gambarTerpilih: string;
  isRightText: boolean;
  isPriority: boolean;
}

export default function NewsRowCard({ item, gambarTerpilih, isRightText, isPriority }: NewsRowCardProps) {
  return (
    <div className={`relative flex min-h-125 w-full items-center overflow-hidden rounded-xl border border-gray-200 bg-gray-950 shadow-md transition-all duration-500 hover:shadow-xl md:min-h-145 lg:min-h-160 ${isRightText ? "justify-end" : "justify-start"}`}>
      {/* LAYER GAMBAR */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image 
          src={gambarTerpilih} 
          alt={item.title}
          fill
          priority={isPriority}
          loading={isPriority ? undefined : "lazy"}
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover"
        />
      </div>

      {/* OVERLAY GRADASI */}
      <div className={`absolute inset-0 z-10 h-full w-full transition-opacity duration-300 ${isRightText ? "bg-linear-to-t from-black via-black/90 to-transparent md:bg-linear-to-l md:from-black md:via-black/85 md:to-transparent" : "bg-linear-to-t from-black via-black/90 to-transparent md:bg-linear-to-r md:from-black md:via-black/85 md:to-transparent"}`}></div>
      
      {/* KONTEN TEKS */}
      <div className="relative z-20 w-full p-6 text-white md:max-w-137.5 md:p-12 lg:max-w-162.5 lg:p-20">
        <span style={{ backgroundColor: item.color || "#111111" }} className="inline-block rounded-xs px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
          {item.category || "Advokasi"}
        </span>
        <h3 className="mb-4 mt-6 text-xl font-black leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {item.title}
        </h3>
        <p className="mb-4 text-xs font-semibold tracking-wide text-gray-400">{item.date}</p>
        <p className="mb-8 text-justify text-sm leading-relaxed text-gray-200 sm:text-base">{item.excerpt}</p>
        <Link href={`/berita/${item.id}`} className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-bold text-white transition-all hover:gap-4 sm:text-base">
          Baca Selengkapnya ➔
        </Link>
      </div>
    </div>
  );
}