import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketTicker } from "@/components/MarketTicker";
import { HeroSection } from "@/components/HeroSection";
import { ArticleGrid } from "@/components/ArticleGrid";
import { Sidebar } from "@/components/Sidebar";
import { BlockchainEvents } from "@/components/BlockchainEvents";

export default function Home() {
  return (
    <>
      <Header />
      <MarketTicker />
      <main className="container mx-auto px-4 py-8 flex-1">
        <HeroSection />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            <ArticleGrid />
            <BlockchainEvents />
          </div>
          
          {/* Sidebar Area */}
          <div className="flex flex-col gap-6 sticky top-24">
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
