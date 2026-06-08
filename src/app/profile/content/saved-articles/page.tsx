import { Bookmark, Clock, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SavedArticlesPage() {
  const articles = [
    {
      id: 1,
      title: "Bitcoin Surges Past $64K as Institutional Adoption Accelerates",
      category: "Bitcoin News",
      date: "Oct 12, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "The Future of DeFi: Layer 2 Scaling Solutions Explained",
      category: "DeFi",
      date: "Oct 10, 2026",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Regulatory Crackdown: What It Means for Crypto Exchanges",
      category: "Regulation",
      date: "Oct 08, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Saved Articles</h1>
          <p className="text-foreground/60 text-sm">Read your bookmarked news and guides later.</p>
        </div>
        <div className="flex gap-2 text-sm text-foreground/60 font-medium bg-card px-4 py-2 rounded-lg border border-border/50">
          <Bookmark className="w-4 h-4 text-primary" /> {articles.length} Saved
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Filters */}
      <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
        <button className="px-4 py-1.5 bg-white text-black rounded-full text-sm font-semibold whitespace-nowrap">All Folders</button>
        <button className="px-4 py-1.5 bg-card border border-border/50 text-foreground hover:text-foreground rounded-full text-sm font-medium whitespace-nowrap transition-colors">Market Analysis</button>
        <button className="px-4 py-1.5 bg-card border border-border/50 text-foreground hover:text-foreground rounded-full text-sm font-medium whitespace-nowrap transition-colors">Tutorials</button>
        <button className="px-4 py-1.5 bg-card border border-border/50 text-foreground hover:text-foreground rounded-full text-sm font-medium whitespace-nowrap transition-colors border-dashed text-primary hover:border-primary/50">+ New Folder</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {articles.map((article) => (
          <div key={article.id} className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col h-full">
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 p-1.5 bg-card backdrop-blur-md rounded-md hover:bg-red-500/80 transition-colors cursor-pointer" title="Remove bookmark">
                <Trash2 className="w-4 h-4 text-foreground" />
              </div>
              <div className="absolute top-3 left-3 px-2 py-1 bg-primary text-black text-xs font-bold rounded">
                {article.category}
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-foreground font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                <Link href="#">{article.title}</Link>
              </h3>
              
              <div className="mt-auto flex items-center justify-between text-xs text-foreground/50">
                <div className="flex items-center gap-3">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty State Mock */}
        <div className="bg-card border border-border/30 border-dashed rounded-xl flex flex-col items-center justify-center p-8 text-center h-full min-h-[280px]">
          <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center mb-3">
            <Bookmark className="w-5 h-5 text-foreground/40" />
          </div>
          <h4 className="text-foreground font-medium mb-1">Discover more</h4>
          <p className="text-xs text-foreground/50 mb-4 max-w-[200px]">Save articles while reading to easily find them later.</p>
          <Link href="/" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
            Browse News <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

    </div>
  );
}