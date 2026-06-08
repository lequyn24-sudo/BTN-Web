import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categoriesData } from "@/data/mockData";

export function ArticleGrid() {
  // Only display the first 3 categories on homepage, 4 articles each
  const displayCategories = categoriesData.slice(0, 3).map(cat => ({
    ...cat,
    articles: cat.articles.slice(0, 4)
  }));

  return (
    <div className="flex flex-col gap-12">
      {displayCategories.map((category) => (
        <section key={category.title}>
          <div className="flex items-center justify-between mb-6 border-b border-border pb-2">
            <h2 className="text-2xl font-bold relative after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:w-1/2 after:h-[2px] after:bg-primary">
              {category.title}
            </h2>
            <Link href={`/category/${category.slug}`} className="text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.articles.map((article, idx) => (
              <Link href={`/article/${article.slug}`} key={idx} className="flex flex-col gap-4 group">
                <div className={`w-full aspect-[4/3] rounded-xl overflow-hidden glass relative group-hover:shadow-[0_0_15px_rgba(255,107,0,0.4)] transition-all`}>
                   <Image 
                     src={article.img} 
                     alt={article.title} 
                     fill 
                     className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
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

