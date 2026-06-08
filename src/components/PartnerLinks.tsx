import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const linksData = [
  {
    title: "cmc",
    desc: "Live data, rankings, and insights powered by CoinMarketCap.",
    linkText: "Explore CMC",
    icon: "/mockups/1280X1280_17792638184yOu83FmUb-768x432.png", // Using existing mockup for icon
    url: "#"
  },
  {
    title: "Press Release",
    desc: "Official announcements from leading blockchain projects.",
    linkText: "View All",
    icon: "/mockups/cyble-malware-campaign-targeting-180-banking-financial-crypto-apps-thumbnail-768x512.jpg",
    url: "#"
  },
  {
    title: "Sponsored Articles",
    desc: "In-depth stories and insights from our trusted partners.",
    linkText: "Explore",
    icon: "/mockups/kraken-us-compliant-bitcoin-perpetual-contracts-launch-30-days-thumbnail-768x512.jpg",
    url: "#"
  },
  {
    title: "Millionaire",
    desc: "Strategies, habits, and stories from crypto millionaires.",
    linkText: "Read More",
    icon: "/mockups/sui-mainnet-suffers-multiple-disruptions-thumbnail-1-768x512.jpg",
    bgImage: "/mockups/20260522-175919_1779444420kVIOzuBKeB-768x403.jpg", // Using as airplane bg
    url: "#"
  }
];

export function PartnerLinks() {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {linksData.map((item, idx) => (
          <Link href={item.url} key={idx} className="flex items-start gap-4 group skeuo-card velocity-glow-hover p-5 rounded-[20px] transition-transform hover:-translate-y-1 relative overflow-hidden">
            
            {item.bgImage && (
              <div className="absolute right-0 top-0 bottom-0 w-[60%] z-0">
                <Image 
                  src={item.bgImage} 
                  alt="" 
                  fill 
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
              </div>
            )}
            
            <div className="w-12 h-12 rounded-full overflow-hidden relative shrink-0 z-10 border border-border shadow-inner">
              <Image 
                src={item.icon} 
                alt={item.title} 
                fill 
                className="object-cover"
              />
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
        ))}
      </div>
    </section>
  );
}
