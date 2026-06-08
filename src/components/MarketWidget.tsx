"use client";

import { useState } from "react";
import Image from "next/image";
import { MarketData } from "@/services/api";

export function MarketWidget({ initialData }: { initialData: MarketData | null }) {
  const [activeTab, setActiveTab] = useState<"Gainers" | "Losers" | "Viewed">("Gainers");

  // Fallback data if API fails
  const fallbackData: MarketData = {
    btcPrice: "$70,245.30",
    btcChange: "2.68%",
    btcIsUp: true,
    marketCap: "$1.38T",
    volume24h: "$34.62B",
    btcDominance: "54.2%",
    circulatingSupply: "19.74M BTC",
    fearAndGreed: 71,
    fearAndGreedLabel: "Greed",
    topGainers: [
      { id: "1", name: "Bitcoin", symbol: "BTC", price: "$70,245.30", change: "2.68%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png" },
      { id: "2", name: "Ethereum", symbol: "ETH", price: "$3,765.12", change: "4.21%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png" },
      { id: "3", name: "Solana", symbol: "SOL", price: "$167.54", change: "6.72%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png" },
      { id: "4", name: "BNB", symbol: "BNB", price: "$615.43", change: "2.31%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png" },
      { id: "5", name: "Dogecoin", symbol: "DOGE", price: "$0.1652", change: "5.11%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png" },
    ],
    topLosers: [
      { id: "1", name: "XRP", symbol: "XRP", price: "$0.524", change: "1.24%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png" },
      { id: "2", name: "Cardano", symbol: "ADA", price: "$0.45", change: "2.10%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png" },
      { id: "3", name: "Polkadot", symbol: "DOT", price: "$7.12", change: "0.85%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png" },
      { id: "4", name: "Chainlink", symbol: "LINK", price: "$14.20", change: "3.40%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png" },
      { id: "5", name: "Avalanche", symbol: "AVAX", price: "$35.60", change: "1.50%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png" },
    ],
    mostViewed: [
      { id: "1", name: "Bitcoin", symbol: "BTC", price: "$70,245.30", change: "2.68%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png" },
      { id: "2", name: "Pepe", symbol: "PEPE", price: "$0.0000105", change: "15.2%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg" },
      { id: "3", name: "Solana", symbol: "SOL", price: "$167.54", change: "6.72%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png" },
      { id: "4", name: "Shiba Inu", symbol: "SHIB", price: "$0.000025", change: "0.5%", isUp: false, image: "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png" },
      { id: "5", name: "Ethereum", symbol: "ETH", price: "$3,765.12", change: "4.21%", isUp: true, image: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png" },
    ]
  };

  const data = initialData || fallbackData;

  const currentList = activeTab === "Gainers" ? data.topGainers : activeTab === "Losers" ? data.topLosers : data.mostViewed;
  
  // Calculate gauge rotation (0 to 180 degrees mapped to 0 to 100)
  // But wait, our SVG uses 3 paths for colors. We can just rotate the pointer.
  // The pointer points from 0 to 100 on an arc from left to right.
  // The arc is from 180deg (left) to 0deg (right).
  // Let's use simple SVG rotation for the pointer.
  // Center is (50, 45). Angle is 180 + (data.fearAndGreed / 100) * 180.
  // If F&G is 71, it's more to the right.
  // We can just use a transform rotation around (50, 45).
  // The base pointer points left (0 value). We rotate it by F&G * 1.8 degrees.
  const pointerRotation = (data.fearAndGreed / 100) * 180;

  return (
    <div className="skeuo-card rounded-[24px] p-6 h-full flex flex-col justify-between w-full max-w-sm mx-auto lg:max-w-none">
      {/* Top Section */}
      <div className="grid grid-cols-2 gap-4 border-b border-border/50 pb-5">
        {/* Left: Market Mood */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider mb-2 self-start font-medium">Market Mood</span>
          <div className="relative w-32 flex flex-col items-center mt-2">
            {/* SVG Gauge */}
            <svg viewBox="0 0 100 55" className="w-full overflow-visible">
              <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#222" strokeWidth="10" strokeLinecap="round" />
              <path d="M 10 50 A 40 40 0 0 1 35 18" fill="none" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
              <path d="M 35 18 A 40 40 0 0 1 65 18" fill="none" stroke="#eab308" strokeWidth="10" />
              <path d="M 65 18 A 40 40 0 0 1 90 50" fill="none" stroke="#22c55e" strokeWidth="10" strokeLinecap="round" />
              
              {/* Pointer */}
              <g transform={`rotate(${pointerRotation}, 50, 50)`}>
                {/* Pointer pointing to 0 (left) by default */}
                <polygon points="50,47 50,53 15,50" fill="currentColor" className="text-foreground drop-shadow-md" />
              </g>
              <circle cx="50" cy="50" r="4" fill="currentColor" className="text-foreground" />
            </svg>
            
            {/* Text Below Gauge */}
            <div className="flex flex-col items-center mt-1 space-y-1">
              <span className="text-2xl font-bold text-foreground drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] leading-none">
                {data.fearAndGreed}
              </span>
              <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-full ${
                data.fearAndGreed > 60 ? 'bg-green-500/20 text-green-400' :
                data.fearAndGreed < 40 ? 'bg-red-500/20 text-red-400' :
                'bg-yellow-500/20 text-yellow-400'
              }`}>
                {data.fearAndGreedLabel}
              </span>
            </div>
          </div>
          <span className="text-[9px] text-foreground/40 mt-1">Market is {data.fearAndGreedLabel}</span>
        </div>

        {/* Right: BTC Price */}
        <div className="flex flex-col border-l border-border/50 pl-4">
          <span className="text-[10px] text-foreground/50 uppercase tracking-wider mb-1 font-medium">BTC Price</span>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl font-bold text-foreground">{data.btcPrice}</span>
            <span className={`text-[10px] font-medium ${data.btcIsUp ? 'text-green-500' : 'text-red-500'}`}>
              {data.btcIsUp ? '▲' : '▼'} {data.btcChange}
            </span>
          </div>
          {/* Sparkline */}
          <div className="w-full h-10 mt-auto">
            <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="sparkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#FF6B00" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,20 Q5,15 10,18 T20,22 T30,12 T40,5 T50,15 T60,10 T70,18 T80,8 T90,15 T100,5 L100,30 L0,30 Z" fill="url(#sparkGradient)"/>
              <path d="M0,20 Q5,15 10,18 T20,22 T30,12 T40,5 T50,15 T60,10 T70,18 T80,8 T90,15 T100,5" fill="none" stroke="#FF6B00" strokeWidth="1.5" className="drop-shadow-[0_0_3px_rgba(255,107,0,0.8)]"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Middle Section: Stats */}
      <div className="py-4 space-y-3 text-xs border-b border-border/50">
        <div className="flex justify-between">
          <span className="text-foreground/60">Market Cap</span>
          <span className="font-semibold text-foreground/90">{data.marketCap}</span>
        </div>
        <div className="w-full h-[1px] bg-border/30"></div>
        <div className="flex justify-between">
          <span className="text-foreground/60">24h Volume</span>
          <span className="font-semibold text-foreground/90">{data.volume24h}</span>
        </div>
        <div className="w-full h-[1px] bg-border/30"></div>
        <div className="flex justify-between">
          <span className="text-foreground/60">BTC Dominance</span>
          <span className="font-semibold text-foreground/90">{data.btcDominance}</span>
        </div>
        <div className="w-full h-[1px] bg-border/30"></div>
        <div className="flex justify-between">
          <span className="text-foreground/60">Circulating Supply</span>
          <span className="font-semibold text-foreground/90">{data.circulatingSupply}</span>
        </div>
      </div>

      {/* Bottom Section: Tabs & List */}
      <div className="pt-4 flex-1 flex flex-col">
        <div className="flex bg-card rounded-md p-1 mb-4 text-[10px] font-medium border border-border/30">
          <button 
            className={`flex-1 py-1.5 rounded-sm transition-colors ${activeTab === "Gainers" ? "bg-primary/20 text-primary" : "text-foreground/50 hover:text-foreground"}`}
            onClick={() => setActiveTab("Gainers")}
          >
            Top Gainers
          </button>
          <button 
            className={`flex-1 py-1.5 rounded-sm transition-colors ${activeTab === "Losers" ? "bg-primary/20 text-primary" : "text-foreground/50 hover:text-foreground"}`}
            onClick={() => setActiveTab("Losers")}
          >
            Top Losers
          </button>
          <button 
            className={`flex-1 py-1.5 rounded-sm transition-colors ${activeTab === "Viewed" ? "bg-primary/20 text-primary" : "text-foreground/50 hover:text-foreground"}`}
            onClick={() => setActiveTab("Viewed")}
          >
            Most Viewed
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {currentList.map((coin, idx) => (
            <div key={coin.id} className="grid grid-cols-[16px_1fr_60px_50px] gap-2 items-center text-xs">
              <span className="text-[10px] text-foreground/40 text-center">{idx + 1}</span>
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-slate-700 shrink-0 border border-border/50">
                  {coin.image ? (
                    <img src={coin.image} alt={coin.symbol} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] font-bold text-foreground">{coin.symbol.charAt(0)}</span>
                  )}
                </div>
                <span className="font-medium text-foreground/90 truncate">{coin.name}</span>
                <span className="text-[9px] text-foreground/40 shrink-0 uppercase">{coin.symbol}</span>
              </div>
              <span className="font-medium text-foreground/80 text-right truncate">{coin.price}</span>
              <div className="text-right flex items-center justify-end gap-1">
                <span className={`text-[8px] ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.isUp ? '▲' : '▼'}
                </span>
                <span className={`text-[10px] font-medium ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {coin.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
