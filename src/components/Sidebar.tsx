import Link from "next/link";
import { categoriesData } from "@/data/mockData";

export function Sidebar() {
  const trendingTags = [
    "#Bitcoin", "#Ethereum", "#DeFi", "#NFT", "#Solana", "#AI", "#Layer2", "#Web3", "#Halving", "#Airdrop", "#Metaverse", "#DePIN"
  ];

  // Get first 5 articles across categories for "Most Read"
  const mostRead = categoriesData.flatMap(c => c.articles).slice(0, 5);

  return (
    <aside className="flex flex-col gap-6 w-full">
      {/* Trending Tags */}
      <div className="skeuo-card rounded-[24px] p-6">
        <h3 className="font-bold text-lg uppercase tracking-wide mb-4">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <Link key={tag} href="#" className="text-xs bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-full">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Most Read */}
      <div className="skeuo-card rounded-[24px] p-6">
        <h3 className="font-bold text-lg uppercase tracking-wide mb-6">Most Read</h3>
        <div className="flex flex-col gap-6">
          {mostRead.map((item, idx) => (
            <Link href={`/article/${item.slug}`} key={idx} className="flex gap-4 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-[0_0_10px_rgba(255,107,0,0.3)]">
                {idx + 1}
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-foreground/50">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span className="text-primary">{item.time}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stay Ahead Subscribe */}
      <div className="skeuo-card rounded-[24px] p-6 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-2xl rounded-full"></div>
        <h3 className="font-bold text-xl mb-2 relative z-10 text-white">Stay Ahead in Crypto</h3>
        <p className="text-sm text-foreground/70 mb-4 relative z-10">Get the latest news, market updates, and exclusive insights straight to your inbox.</p>
        <form className="flex flex-col gap-3 relative z-10">
          <input type="email" placeholder="Enter your email" className="bg-black/50 border border-border rounded-md px-4 py-3 text-sm outline-none focus:border-primary text-white" />
          <button type="button" className="btn-primary w-full text-center">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-foreground/40 mt-3 text-center relative z-10">No spam. Unsubscribe anytime.</p>
      </div>
      {/* Quick Categories */}
      <div className="skeuo-card rounded-[24px] p-6">
        <h3 className="font-bold text-lg uppercase tracking-wide mb-4">Quick Categories</h3>
        <div className="flex flex-col gap-3">
          {categoriesData.map((cat, idx) => (
            <Link key={idx} href={`/category/${cat.slug}`} className="flex items-center justify-between group">
              <span className="text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">{cat.title}</span>
              <div className="w-6 h-6 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50 group-hover:text-primary transition-colors"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Advertise With Us */}
      <div className="skeuo-card rounded-[24px] p-6 relative overflow-hidden group cursor-pointer hover:-translate-y-1 transition-transform">
        <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-yellow-500/10 blur-3xl rounded-full"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-primary transition-colors">Advertise With Us</h3>
            <p className="text-[13px] text-foreground/60 mb-4 leading-relaxed">Reach the world's most engaged crypto audience.</p>
            <div className="text-[12px] text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </div>
          <div className="w-16 h-16 relative shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-foreground/80 group-hover:text-primary transition-colors drop-shadow-[0_0_15px_rgba(255,107,0,0.3)]">
              <path d="m3 11 18-5v12L3 14v-3z"></path>
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
}

