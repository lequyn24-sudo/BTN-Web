import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoriesData } from "@/data/mockData";
import { MarketWidget } from "./MarketWidget";
import { fetchMarketData } from "@/services/api";

export async function HeroSection() {
  const featuredArticle = categoriesData[0].articles[0];
  const marketData = await fetchMarketData();

  return (
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
      <Link href={`/article/${featuredArticle.slug}`} className="lg:col-span-2 relative rounded-2xl glass group cursor-pointer h-full min-h-[450px] block velocity-glow-hover">
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <Image 
            src={featuredArticle.img} 
            alt={featuredArticle.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        </div>
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
          <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-max mb-4 shadow-[0_0_10px_rgba(255,107,0,0.5)]">
            Bitcoin News
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-white group-hover:text-primary transition-colors">
            {featuredArticle.title}
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base mb-6 line-clamp-2">
            {featuredArticle.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden relative">
              <Image src="/mockups/1280X1280_1779175249LXbBvv3v8j-768x432.png" alt="Author" fill className="object-cover" />
            </div>
            <span>By {featuredArticle.author}</span>
            <span>•</span>
            <span>{featuredArticle.date}</span>
            <span>•</span>
            <span className="text-primary font-medium">{featuredArticle.time}</span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col gap-6">
        <MarketWidget initialData={marketData} />
      </div>
    </section>
  );
}

