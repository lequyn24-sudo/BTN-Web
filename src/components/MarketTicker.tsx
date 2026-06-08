export function MarketTicker() {
  const data = [
    { label: "BTC Dominance", value: "54.2%" },
    { label: "ETH Gas", value: "18 Gwei" },
    { label: "Fear & Greed Index", value: "71 (Greed)", color: "text-green-500" },
    { label: "Total Market Cap", value: "$2.46T", change: "+ 2.35%", changeColor: "text-green-500" },
  ];

  return (
    <div className="w-full bg-foreground/5 border-b border-border py-2 overflow-x-auto no-scrollbar">
      <div className="container mx-auto px-4 flex items-center min-w-max gap-8 text-xs font-medium">
        <div className="text-primary font-bold uppercase tracking-wider">Market Update</div>
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-foreground/60">{item.label}:</span>
            <span className={item.color || "text-foreground"}>{item.value}</span>
            {item.change && (
              <span className={item.changeColor}>{item.change}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
