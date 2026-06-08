import { Star, TrendingUp, TrendingDown, Search, Plus, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export default function WatchlistPage() {
  const watchlist = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", price: "$64,230.00", change: "+2.4%", isUp: true, marketCap: "$1.2T", volume: "$32.4B" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", price: "$3,450.20", change: "-1.2%", isUp: false, marketCap: "$415B", volume: "$14.2B" },
    { id: "solana", name: "Solana", symbol: "SOL", price: "$145.60", change: "+5.7%", isUp: true, marketCap: "$65B", volume: "$4.1B" },
    { id: "chainlink", name: "Chainlink", symbol: "LINK", price: "$18.40", change: "+1.1%", isUp: true, marketCap: "$10B", volume: "$850M" },
    { id: "polkadot", name: "Polkadot", symbol: "DOT", price: "$7.20", change: "-0.5%", isUp: false, marketCap: "$9B", volume: "$320M" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Watchlist</h1>
          <p className="text-foreground/60 text-sm">Track your favorite cryptocurrencies in real-time.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors w-fit">
          <Plus className="w-4 h-4" /> Add Coin
        </button>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Search watchlist..."
            className="w-full bg-black/50 border border-border/50 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Search className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <button className="px-3 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-medium whitespace-nowrap">All Coins</button>
          <button className="px-3 py-1.5 bg-white/5 border border-border/50 text-foreground/70 hover:text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors">Top Gainers</button>
          <button className="px-3 py-1.5 bg-white/5 border border-border/50 text-foreground/70 hover:text-white rounded-full text-xs font-medium whitespace-nowrap transition-colors">DeFi</button>
        </div>
      </div>

      {/* Watchlist Table */}
      <div className="bg-black/20 rounded-xl border border-border/50 flex flex-col overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-white/5 border-b border-border/50">
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider w-10"></th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Asset</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Price</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">24h Change</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Market Cap</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Volume (24h)</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-center w-12"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-sm">
              {watchlist.map((coin, idx) => (
                <tr key={coin.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="py-4 px-6 text-center">
                    <Star className="w-4 h-4 fill-primary text-primary cursor-pointer hover:scale-110 transition-transform" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                        {coin.symbol[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-primary transition-colors">{coin.name}</span>
                        <span className="text-xs text-foreground/50 font-mono">{coin.symbol}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-white font-medium">
                    {coin.price}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className={`inline-flex items-center gap-1 font-medium ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
                      {coin.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {coin.change}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right text-foreground/80">
                    {coin.marketCap}
                  </td>
                  <td className="py-4 px-6 text-right text-foreground/80">
                    {coin.volume}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="p-1 rounded hover:bg-white/10 text-foreground/50 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}