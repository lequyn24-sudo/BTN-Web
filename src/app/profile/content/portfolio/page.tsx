import { PieChart, Plus, Wallet, ArrowUpRight, ArrowDownRight, RefreshCcw } from "lucide-react";

export default function PortfolioPage() {
  const assets = [
    { id: "bitcoin", name: "Bitcoin", symbol: "BTC", amount: "0.245", value: "$15,736.35", avgBuy: "$42,500", pnl: "+51.1%", isUp: true, allocation: "65%" },
    { id: "ethereum", name: "Ethereum", symbol: "ETH", amount: "1.8", value: "$6,210.36", avgBuy: "$2,800", pnl: "+23.2%", isUp: true, allocation: "25%" },
    { id: "solana", name: "Solana", symbol: "SOL", amount: "15.5", value: "$2,256.80", avgBuy: "$180", pnl: "-19.1%", isUp: false, allocation: "10%" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-foreground/60 text-sm">Track your crypto holdings and performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-border/50 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors w-fit">
            <RefreshCcw className="w-4 h-4" /> Sync Wallet
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors w-fit">
            <Plus className="w-4 h-4" /> Add Asset
          </button>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">Total Balance</h3>
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-white">$24,203.51</span>
              <span className="flex items-center gap-1 text-sm font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 mb-1">
                <ArrowUpRight className="w-4 h-4" /> +$850.24 (24h)
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-border/30">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-foreground/50 uppercase tracking-wider">Invested</span>
              <span className="text-sm font-medium text-white">$18,450.00</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-foreground/50 uppercase tracking-wider">All-time PNL</span>
              <span className="text-sm font-medium text-green-500">+$5,753.51</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-foreground/50 uppercase tracking-wider">Best Performer</span>
              <span className="text-sm font-medium text-white">BTC</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-foreground/50 uppercase tracking-wider">Worst Performer</span>
              <span className="text-sm font-medium text-white">SOL</span>
            </div>
          </div>
        </div>
        
        <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col items-center justify-center relative min-h-[200px]">
          <PieChart className="w-24 h-24 text-primary/20 absolute" />
          <div className="relative z-10 text-center">
            <h3 className="text-lg font-bold text-white mb-4">Asset Allocation</h3>
            <div className="flex flex-col gap-2 w-full max-w-[150px] mx-auto text-sm">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#F7931A]"></div><span className="text-foreground/80">BTC</span></div>
                <span className="font-mono text-white">65%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#627EEA]"></div><span className="text-foreground/80">ETH</span></div>
                <span className="font-mono text-white">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#14F195]"></div><span className="text-foreground/80">SOL</span></div>
                <span className="font-mono text-white">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="bg-black/20 rounded-xl border border-border/50 flex flex-col overflow-hidden">
        <div className="p-6 border-b border-border/50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Your Assets</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white/5 border border-border rounded text-xs font-medium text-white hover:bg-white/10 transition-colors">Hide Small Balances</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-white/5 border-b border-border/50">
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Asset</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Balance</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Avg. Buy Price</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Current Value</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">PNL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-sm">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">
                        {asset.symbol[0]}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-primary transition-colors">{asset.name}</span>
                        <span className="text-xs text-foreground/50 font-mono">{asset.symbol}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-white">
                    {asset.amount} {asset.symbol}
                  </td>
                  <td className="py-4 px-6 text-right text-foreground/70 font-mono">
                    {asset.avgBuy}
                  </td>
                  <td className="py-4 px-6 text-right font-mono text-white font-medium">
                    {asset.value}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className={`inline-flex items-center gap-1 font-medium ${asset.isUp ? 'text-green-500' : 'text-red-500'}`}>
                      {asset.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {asset.pnl}
                    </div>
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