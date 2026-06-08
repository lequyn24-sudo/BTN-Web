export interface CoinData {
  id: string;
  name: string;
  symbol: string;
  price: string;
  change: string;
  isUp: boolean;
}

export interface MarketData {
  btcPrice: string;
  btcChange: string;
  btcIsUp: boolean;
  marketCap: string;
  volume24h: string;
  btcDominance: string;
  circulatingSupply: string;
  fearAndGreed: number;
  fearAndGreedLabel: string;
  topGainers: CoinData[];
  topLosers: CoinData[];
  mostViewed: CoinData[]; // We'll just use top 5 by market cap as most viewed for demo
}

// Helper to format currency
const formatCurrency = (val: number) => {
  if (val >= 1e12) return `$${(val / 1e12).toFixed(2)}T`;
  if (val >= 1e9) return `$${(val / 1e9).toFixed(2)}B`;
  if (val >= 1e6) return `$${(val / 1e6).toFixed(2)}M`;
  return `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
};

export async function fetchMarketData(): Promise<MarketData | null> {
  try {
    // We use next: { revalidate: 300 } to cache the fetch for 5 minutes
    const [globalRes, marketsRes, fngRes] = await Promise.all([
      fetch("https://api.coingecko.com/api/v3/global", { next: { revalidate: 300 } }).then(res => res.json()),
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false", { next: { revalidate: 300 } }).then(res => res.json()),
      fetch("https://api.alternative.me/fng/", { next: { revalidate: 300 } }).then(res => res.json())
    ]);

    if (!globalRes || !marketsRes || !Array.isArray(marketsRes) || !fngRes) {
      throw new Error("Invalid API Response");
    }

    const btc = marketsRes.find((c: any) => c.symbol === 'btc');
    
    // Fear and Greed
    const fngValue = fngRes.data?.[0]?.value ? parseInt(fngRes.data[0].value) : 50;
    const fngLabel = fngRes.data?.[0]?.value_classification || "Neutral";

    // Global Stats
    const totalMarketCap = globalRes.data.total_market_cap.usd;
    const totalVolume = globalRes.data.total_volume.usd;
    const btcDom = globalRes.data.market_cap_percentage.btc;

    // Sort for gainers and losers
    const validCoins = marketsRes.filter((c: any) => c.price_change_percentage_24h !== null);
    const sortedByChange = [...validCoins].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
    
    const topGainers = sortedByChange.slice(0, 5).map(mapCoinData);
    const topLosers = sortedByChange.reverse().slice(0, 5).map(mapCoinData);
    const mostViewed = marketsRes.slice(0, 5).map(mapCoinData);

    return {
      btcPrice: formatCurrency(btc.current_price),
      btcChange: `${Math.abs(btc.price_change_percentage_24h).toFixed(2)}%`,
      btcIsUp: btc.price_change_percentage_24h >= 0,
      marketCap: formatCurrency(totalMarketCap),
      volume24h: formatCurrency(totalVolume),
      btcDominance: `${btcDom.toFixed(1)}%`,
      circulatingSupply: `${(btc.circulating_supply / 1e6).toFixed(2)}M BTC`,
      fearAndGreed: fngValue,
      fearAndGreedLabel: fngLabel,
      topGainers,
      topLosers,
      mostViewed
    };
  } catch (error) {
    console.error("Error fetching market data:", error);
    return null; // Will fallback to mock data in component
  }
}

function mapCoinData(coin: any, index: number): CoinData {
  return {
    id: (index + 1).toString(),
    name: coin.name,
    symbol: coin.symbol.toUpperCase(),
    price: formatCurrency(coin.current_price),
    change: `${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%`,
    isUp: coin.price_change_percentage_24h >= 0
  };
}
