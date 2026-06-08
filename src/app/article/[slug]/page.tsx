import { getArticleBySlug, categoriesData } from "@/data/mockData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";

export default async function ArticlePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="mb-8">
              <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.5)] mb-4 inline-block">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden relative border-2 border-primary/30">
                    <Image src="/mockups/1280X1280_1779175249LXbBvv3v8j-768x432.png" alt={article.author} fill className="object-cover" />
                  </div>
                  <span className="font-semibold text-foreground/80">{article.author}</span>
                </div>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="text-primary font-medium">{article.time}</span>
              </div>
            </div>

            <div className="w-full aspect-video rounded-2xl overflow-hidden glass relative mb-10 shadow-[0_0_30px_rgba(255,107,0,0.15)] border-primary/20">
               <Image 
                 src={article.img} 
                 alt={article.title} 
                 fill 
                 className="object-cover"
                 priority
               />
            </div>

            <div className="prose prose-invert prose-orange max-w-none prose-lg">
              <p className="lead text-xl text-foreground/80 mb-8 font-medium">
                {article.excerpt}
              </p>
              
              <p>
                In a recent turn of events that has caught the attention of both retail and institutional investors, the cryptocurrency market is demonstrating unprecedented resilience. As adoption metrics continue to climb, we are seeing a structural shift in how digital assets are perceived globally.
              </p>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">The Impact of Institutional Adoption</h3>
              
              <p>
                Major financial institutions are no longer standing on the sidelines. The influx of capital through regulated vehicles like ETFs has created a new baseline for market stability. This isn't just about price discovery; it's about the fundamental integration of blockchain technology into traditional finance.
              </p>

              <div className="glass p-6 my-8 rounded-xl border-l-4 border-l-primary bg-primary/5">
                <p className="italic text-lg text-foreground/90 m-0">
                  "The current market dynamics suggest we are entering a maturation phase. The focus is shifting from short-term speculation to long-term utility and network growth."
                </p>
              </div>

              <h3 className="text-2xl font-bold text-white mt-10 mb-4">Looking Ahead</h3>
              
              <p>
                As we move forward, key technical levels remain crucial for short-term traders, but the macro picture suggests a continuing trend of higher lows. Regulatory clarity in major jurisdictions will likely be the next significant catalyst for market movement.
              </p>

              <p>
                Investors are advised to maintain a balanced perspective, focusing on fundamentals while managing risk in this volatile yet promising asset class.
              </p>
            </div>
          </article>

          <div>
            <div className="sticky top-24">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return categoriesData.flatMap((category) => 
    category.articles.map((article) => ({
      slug: article.slug,
    }))
  );
}
