import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { aboutData } from "@/data/aboutData";

export function generateStaticParams() {
  return Object.keys(aboutData).map((slug) => ({
    slug,
  }));
}

export default async function AboutPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const data = aboutData[params.slug as keyof typeof aboutData];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background relative pt-24 pb-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="skeuo-card rounded-[24px] p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 pb-4 border-b border-border/50 relative after:content-[''] after:absolute after:-bottom-[1px] after:left-0 after:w-24 after:h-[2px] after:bg-primary">
              {data.title}
            </h1>
            
            <div 
              className="prose prose-invert max-w-none text-foreground/80"
              dangerouslySetInnerHTML={{ __html: data.content as string }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
