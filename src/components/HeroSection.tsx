import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 relative rounded-2xl overflow-hidden glass group cursor-pointer h-[400px] md:h-[500px]">
        {/* Placeholder gradient for image */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-amber-900 opacity-60 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10">
          <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm w-max mb-4">
            Bitcoin News
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4 text-white">
            Bitcoin Breaks $70,000: What's Next for BTC in This Bull Run?
          </h1>
          <p className="text-gray-300 max-w-2xl text-sm md:text-base mb-6 line-clamp-2">
            Bitcoin surges past $70K as institutional adoption accelerates and ETF inflows hit record levels. Analysts share key levels to watch and what could drive BTC to new all-time highs.
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <div className="w-8 h-8 rounded-full bg-slate-700"></div>
            <span>By James Carter</span>
            <span>•</span>
            <span>May 12, 2026</span>
            <span>•</span>
            <span>6 MIN READ</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="glass rounded-2xl p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-semibold text-lg uppercase tracking-wide">Market Mood</h3>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative w-40 h-20 overflow-hidden mb-4">
              <div className="absolute top-0 left-0 w-full h-[200%] rounded-full border-[15px] border-border border-t-green-500 border-r-green-500 rotate-45 transition-transform duration-1000"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <span className="text-4xl font-display font-bold text-green-500">71</span>
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
              <span className="font-semibold">$1.38T</span>
            </div>
            <div className="flex justify-between border-b border-border pb-2">
              <span className="text-foreground/60">24h Volume</span>
              <span className="font-semibold">$34.62B</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
