// src/components/features/berita/FeaturedNews.tsx
import React from "react";
import NewsCard from "./NewsCard"; 
import { Berita } from "@/data/data";

interface FeaturedNewsProps {
  latestNews: Berita[];
}

export function FeaturedNews({ latestNews }: FeaturedNewsProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xl font-black uppercase tracking-widest text-gray-950 mb-8">
          Berita & Pernyataan Sikap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <NewsCard key={news.id} item={news} />
          ))}
        </div>
      </div>
    </section>
  );
}