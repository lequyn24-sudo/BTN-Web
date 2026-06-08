import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categoriesData } from "@/data/mockData";

export function HeroSection() {
  const featuredArticle = categoriesData[0].articles[0];

  return (
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Link href={`/article/${featuredArticle.slug}`} className="lg:col-span-2 relative rounded-2xl overflow-hidden glass group cursor-pointer h-[400px] md:h-[500px] block">
        <Image 
          src={featuredArticle.img} 
          alt={featuredArticle.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
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
        <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg uppercase tracking-wide">Market Mood</h3>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative w-40 h-20 overflow-hidden mb-4">
              <div className="absolute top-0 left-0 w-full h-[200%] rounded-full border-[15px] border-border border-t-primary border-r-primary rotate-45 transition-transform duration-1000 shadow-[0_0_15px_rgba(255,107,0,0.4)]"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-4xl font-bold text-primary drop-shadow-[0_0_8px_rgba(255,107,0,0.8)]">71</span>
                <span className="text-xs uppercase tracking-widest text-foreground/60">Greed</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 text-sm mt-4">
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground/60">BTC PRICE</span>
              <span className="font-semibold text-green-500">$70,245.30 <span className="text-xs ml-1">+2.68%</span></span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground/60">Market Cap</span>
              <span className="font-semibold text-white">$1.38T</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground/60">24h Volume</span>
              <span className="font-semibold text-white">$34.62B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

