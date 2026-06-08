import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ArticleGrid() {
  const categories = [
    {
      title: "Bitcoin News",
      articles: [
        { title: "MicroStrategy Buys More Bitcoin, Holdings Top 214K BTC", author: "Michael Levin", date: "May 12, 2026", time: "4 MIN READ", img: "bg-orange-500/20" },
        { title: "Bitcoin ETFs See $200M Inflow as Demand Soars", author: "Emily Rogers", date: "May 12, 2026", time: "5 MIN READ", img: "bg-blue-500/20" },
        { title: "BTC Price Analysis: Key Levels to Watch This Week", author: "James Carter", date: "May 11, 2026", time: "6 MIN READ", img: "bg-green-500/20" },
        { title: "Bitcoin Halving Impact: What History Tells Us", author: "Sarah Wong", date: "May 11, 2026", time: "8 MIN READ", img: "bg-purple-500/20" }
      ]
    },
    {
      title: "Alt Coin News",
      articles: [
        { title: "Avalanche Subnets Drive Massive Ecosystem Growth", author: "David Chen", date: "May 11, 2026", time: "5 MIN READ", img: "bg-red-500/20" },
        { title: "Chainlink CCIP Expands Cross-Chain Interoperability", author: "Laura Kim", date: "May 11, 2026", time: "4 MIN READ", img: "bg-blue-600/20" },
        { title: "Polygon 2.0 Roadmap Unveiled at Polygon Connect", author: "John Miller", date: "May 10, 2026", time: "6 MIN READ", img: "bg-purple-600/20" },
        { title: "Arbitrum TVL Reaches New All-Time High", author: "Jessica Lee", date: "May 10, 2026", time: "3 MIN READ", img: "bg-cyan-500/20" }
      ]
    },
    {
      title: "Mining",
      articles: [
        { title: "Marathon Digital Reports Record Q1 Mining Output", author: "Kevin Zhao", date: "May 12, 2026", time: "5 MIN READ", img: "bg-yellow-500/20" },
        { title: "Clean Energy & Bitcoin Mining: The Future is Green", author: "Tom Wilson", date: "May 11, 2026", time: "7 MIN READ", img: "bg-green-600/20" },
        { title: "Bitcoin Miner Revenues Jump 15% in April", author: "Kevin Zhao", date: "May 10, 2026", time: "4 MIN READ", img: "bg-amber-600/20" },
        { title: "Best ASIC Miners in 2026: Top Picks and Reviews", author: "Chris Park", date: "May 10, 2026", time: "8 MIN READ", img: "bg-slate-500/20" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-12">
      {categories.map((category) => (
        <section key={category.title}>
          <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
            <h2 className="text-2xl font-display font-bold relative after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-1/2 after:h-[2px] after:bg-primary">
              {category.title}
            </h2>
            <Link href={`/category/${category.title.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.articles.map((article, idx) => (
              <Link href="#" key={idx} className="flex flex-col gap-4 group">
                <div className={`w-full aspect-[4/3] rounded-xl overflow-hidden glass ${article.img} relative`}>
                   <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   {/* Placeholder for image */}
                   <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500 text-foreground">
                      B
                   </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[10px] text-foreground/50">
                    <span>By {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="text-[10px] text-primary mt-1 font-medium tracking-wider">
                    {article.time}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
