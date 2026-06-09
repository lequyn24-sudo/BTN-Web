export const mockups = [
  "/mockups/1280X1280_1779175249LXbBvv3v8j-768x432.png",
  "/mockups/1280X1280_17792638184yOu83FmUb-768x432.png",
  "/mockups/20260522-175919_1779444420kVIOzuBKeB-768x403.jpg",
  "/mockups/PR_720p_1774355782kuCznX1THu_1779776140ln7AFoDr7x-768x461.jpg",
  "/mockups/cyble-malware-campaign-targeting-180-banking-financial-crypto-apps-thumbnail-768x512.jpg",
  "/mockups/kraken-us-compliant-bitcoin-perpetual-contracts-launch-30-days-thumbnail-768x512.jpg",
  "/mockups/strategic-bitcoin-reserve-bill-drops-1-million-btc-target-adds-20-year-lockup-thumbnail.jpg",
  "/mockups/sui-mainnet-suffers-multiple-disruptions-thumbnail-1-768x512.jpg",
  "/mockups/us-seizes-1-billion-in-crypto-from-iran-thumbnail-768x512.jpg",
  "/mockups/vaneck-debuts-spot-bnb-etf-vbnb-on-nasdaq-thumbnail-768x512.jpg",
  "/mockups/vaneck-debuts-us-spot-bnb-etf-thumbnail-768x512.jpg",
  "/mockups/vaneck-launches-us-spot-bnb-etf-thumbnail-768x512.jpg",
  "/mockups/vaneck-ranking-xrp-ledger-ahead-jpmorgan-kinexys-corporate-blockchain-comparison-thumbnail-2-768x512.jpg",
];

export const generateArticles = (categoryTitle: string, count: number = 10) => {
  return Array.from({ length: count }).map((_, i) => {
    const slug = `${categoryTitle.toLowerCase().replace(/ /g, "-")}-article-${i + 1}`;
    const imgIndex = (i + categoryTitle.length) % mockups.length;
    return {
      title: `${categoryTitle} Highlights: Major Updates and Market Analysis #${i + 1}`,
      slug,
      author: "Crypto Analyst",
      date: `May ${15 - (i % 10)}, 2026`,
      time: `${3 + (i % 5)} MIN READ`,
      img: mockups[imgIndex],
      excerpt: "The latest developments in the crypto space bring exciting new opportunities and challenges. Analysts are closely watching key support levels as institutional adoption continues to shape the market landscape.",
      eventDate: `${10 + (i % 20)}`,
      eventMonth: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][i % 12],
    };
  });
};

export const categoriesData = [
  { title: "Bitcoin News", slug: "bitcoin-news", articles: generateArticles("Bitcoin News", 10) },
  { title: "Alt Coin News", slug: "alt-coin-news", articles: generateArticles("Alt Coin News", 10) },
  { title: "Mining", slug: "mining", articles: generateArticles("Mining", 10) },
  { title: "Blockchain Event", slug: "blockchain-event", articles: generateArticles("Blockchain Event", 10) },
  { title: "Top Project", slug: "top-project", articles: generateArticles("Top Project", 10) },
  { title: "Other", slug: "other", articles: generateArticles("Other", 10) },
  { title: "Sponsored Articles", slug: "sponsored-articles", articles: generateArticles("Sponsored Articles", 10) },
  { title: "CMC", slug: "cmc", articles: generateArticles("CMC", 10) },
  { title: "Press Release", slug: "press-release", articles: generateArticles("Press Release", 10) },
  { title: "Millionaire", slug: "millionaire", articles: generateArticles("Millionaire", 10) },
];

export const getArticleBySlug = (slug: string) => {
  for (const category of categoriesData) {
    const article = category.articles.find(a => a.slug === slug);
    if (article) return { ...article, category: category.title };
  }
  return null;
};

export const eventsList = [
  {
    title: "Consensus 2024",
    location: "Austin, Texas",
    date: "10-12",
    month: "JUN",
    description: "The biggest Web3 event of the year returns.",
    img: "/mockups/1280X1280_1779175249LXbBvv3v8j-768x432.png",
    link: "/category/blockchain-event"
  },
  {
    title: "ETHGlobal Prague",
    location: "Prague, Czech Republic",
    date: "20-22",
    month: "MAY",
    description: "Building the future of Ethereum together.",
    img: "/mockups/kraken-us-compliant-bitcoin-perpetual-contracts-launch-30-days-thumbnail-768x512.jpg",
    link: "/category/blockchain-event"
  },
  {
    title: "Bitcoin 2024",
    location: "Nashville, Tennessee",
    date: "5-6",
    month: "JUN",
    description: "The world's largest Bitcoin conference.",
    img: "/mockups/sui-mainnet-suffers-multiple-disruptions-thumbnail-1-768x512.jpg",
    link: "/category/blockchain-event"
  },
  {
    title: "Token2049 Dubai",
    location: "Dubai, UAE",
    date: "15-16",
    month: "JUN",
    description: "Where the global crypto industry connects.",
    img: "/mockups/vaneck-debuts-us-spot-bnb-etf-thumbnail-768x512.jpg",
    link: "/category/blockchain-event"
  }
];
