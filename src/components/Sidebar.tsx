import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Sidebar() {
  const trendingTags = [
    "#Bitcoin", "#Ethereum", "#DeFi", "#NFT", "#Solana", "#AI", "#Layer2", "#Web3", "#Halving", "#Airdrop", "#Metaverse", "#DePIN"
  ];

  const mostRead = [
    { title: "Bitcoin Breaks $70,000: What's Next for BTC in This Bull Run?", date: "May 12, 2026", time: "6 MIN READ" },
    { title: "Ethereum Dencun Upgrade Boosts Layer 2 Performance", date: "May 12, 2026", time: "4 MIN READ" },
    { title: "MicroStrategy Buys More Bitcoin, Holdings Top 214K BTC", date: "May 12, 2026", time: "4 MIN READ" },
    { title: "Solana Price Rally: Is SOL Ready to Flip BNB?", date: "May 11, 2026", time: "5 MIN READ" },
    { title: "Bitcoin Mining Difficulty Hits All-Time High", date: "May 11, 2026", time: "4 MIN READ" }
  ];

  return (
    <aside className="w-full flex flex-col gap-8">
      {/* Trending Tags */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-display font-semibold text-lg uppercase tracking-wide mb-4">Trending Tags</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTags.map((tag) => (
            <Link key={tag} href="#" className="text-xs bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors border border-border px-3 py-1.5 rounded-full">
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Most Read */}
      <div className="glass rounded-2xl p-6">
        <h3 className="font-display font-semibold text-lg uppercase tracking-wide mb-6">Most Read</h3>
        <div className="flex flex-col gap-6">
          {mostRead.map((item, idx) => (
            <div key={idx} className="flex gap-4 group cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-display font-bold flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {idx + 1}
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-foreground/50">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Ahead Subscribe */}
      <div className="glass rounded-2xl p-6 border-primary/30 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/20 blur-2xl rounded-full"></div>
        <h3 className="font-display font-bold text-xl mb-2 relative z-10">Stay Ahead in Crypto</h3>
        <p className="text-sm text-foreground/70 mb-4 relative z-10">Get the latest news, market updates, and exclusive insights straight to your inbox.</p>
        <form className="flex flex-col gap-3 relative z-10">
          <input type="email" placeholder="Enter your email" className="bg-background/50 border border-border rounded-md px-4 py-2 text-sm outline-none focus:border-primary" />
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-bold transition-colors">
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-foreground/40 mt-3 text-center relative z-10">No spam. Unsubscribe anytime.</p>
      </div>
    </aside>
  );
}
