import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, ScrollText, Gem, Bitcoin } from "lucide-react";

const linksData = [
  {
    title: "CMC",
    desc: "Live data, rankings, and insights powered by CoinMarketCap.",
    linkText: "EXPLORE CMC",
    url: "/category/cmc",
    icon: Activity,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-500/20",
  },
  {
    title: "Press Release",
    desc: "Official announcements from leading blockchain projects.",
    linkText: "VIEW ALL",
    url: "/category/press-release",
    icon: ScrollText,
    iconColor: "text-amber-100",
    iconBg: "bg-white/10",
  },
  {
    title: "Sponsored Articles",
    desc: "In-depth stories and insights from our trusted partners.",
    linkText: "EXPLORE",
    url: "/category/sponsored-articles",
    icon: Gem,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/20",
  },
  {
    title: "Millionaire",
    desc: "Strategies, habits, and stories from crypto millionaires.",
    linkText: "READ MORE",
    url: "/category/millionaire",
    icon: Bitcoin,
    iconColor: "text-yellow-400",
    iconBg: "bg-yellow-400/20",
    bgImage: "/mockups/20260522-175919_1779444420kVIOzuBKeB-768x403.jpg",
  }
];

export function PartnerLinks() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {linksData.map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link href={item.url} key={idx} className="flex items-start gap-4 group skeuo-card velocity-glow-hover p-5 rounded-[20px] transition-transform hover:-translate-y-1 relative overflow-hidden">
              
              {item.bgImage && (
                <div 
                  className="absolute right-0 top-0 bottom-0 w-[70%] z-0"
                  style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 40%)', maskImage: 'linear-gradient(to right, transparent 0%, black 40%)' }}
                >
                  <Image 
                    src={item.bgImage} 
                    alt="" 
                    fill 
                    className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 group-hover:opacity-40" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-full overflow-hidden relative shrink-0 z-10 border border-border/50 shadow-inner flex items-center justify-center ${item.iconBg}`}>
                <Icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              
              <div className="flex flex-col z-10">
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-foreground/60 mb-3 leading-snug pr-2">
                  {item.desc}
                </p>
                <div className="text-[11px] text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto uppercase tracking-wider">
                  {item.linkText} <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
