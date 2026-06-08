import { categoriesData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default async function CategoryPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const category = categoriesData.find(c => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground relative inline-block">
            {category.title}
            <span className="absolute -bottom-2 left-0 w-1/2 h-[3px] bg-primary rounded-full shadow-[0_0_10px_rgba(255,107,0,0.8)]"></span>
          </h1>
          <p className="text-foreground/60 mt-6 max-w-2xl">
            Read the latest {category.title.toLowerCase()} from our expert analysts and reporters. Stay ahead of the market with breaking updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.articles.map((article, idx) => (
            <Link href={`/article/${article.slug}`} key={idx} className="flex flex-col gap-4 group skeuo-card velocity-glow-hover p-[6px] rounded-[20px] transition-transform hover:-translate-y-1">
              <div className={`w-full aspect-[4/3] rounded-[14px] overflow-hidden shadow-inner relative`}>
                 <Image 
                   src={article.img} 
                   alt={article.title} 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                 <div className="absolute top-4 left-4">
                   <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)]">
                     {category.title}
                   </span>
                 </div>
              </div>
              <div className="px-3 pb-3 pt-2">
                <h3 className="font-semibold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-3 text-foreground">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-[11px] text-foreground/50">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return categoriesData.map((category) => ({
    slug: category.slug,
  }));
}
