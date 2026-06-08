import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketTicker } from "@/components/MarketTicker";
import { HeroSection } from "@/components/HeroSection";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <MarketTicker />
      <main className="container mx-auto px-4 py-8 flex-1">
        <HeroSection />
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content Area (approx 70%) */}
          <div className="lg:w-2/3 xl:w-3/4">
            <ArticleGrid />
          </div>
          
          {/* Sidebar Area (approx 30%) */}
          <div className="lg:w-1/3 xl:w-1/4">
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
