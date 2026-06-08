import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, CheckCircle2 } from "lucide-react";

export default function SubscribePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full w-max text-sm font-medium">
              <Mail className="w-4 h-4" />
              <span>Free Weekly Newsletter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master the Crypto Market.
            </h1>
            
            <p className="text-foreground/70 text-lg">
              Get the latest insights, breaking news, and deep-dive analysis delivered straight to your inbox every week. No spam, just pure alpha.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Curated top news and events</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Exclusive market analysis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Early access to premium content</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="skeuo-card p-8 md:p-12 rounded-[32px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[32px] pointer-events-none"></div>
            
            <form className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Join 50,000+ Readers</h3>
                <p className="text-sm text-foreground/60">Enter your email to subscribe to our newsletter.</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-card border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="bg-card border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-foreground"
                  />
                </div>
              </div>

              <button type="button" className="btn-primary w-full mt-2 py-4 text-lg">
                Subscribe Now
              </button>

              <p className="text-xs text-center text-foreground/40 mt-2">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
