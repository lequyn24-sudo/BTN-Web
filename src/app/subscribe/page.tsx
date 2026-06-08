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
          <div className="skeuo-card p-8 md:p-12 rounded-[32px] relative group">
            
            {/* Spotlight Hover Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] pointer-events-none z-20 flex justify-center">
              {/* Light Beam */}
              <div 
                className="absolute top-0 w-full h-0 group-hover:h-[350px] bg-gradient-to-b from-[#ff6b00]/60 via-[#ff6b00]/15 to-transparent blur-[25px] opacity-0 group-hover:opacity-100 transition-all duration-[1200ms] ease-out mix-blend-screen origin-top" 
                style={{ 
                  clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)',
                }}
              ></div>

              {/* Glowing Edge on Card Top */}
              <div className="absolute top-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 shadow-[0_0_20px_5px_rgba(255,107,0,0.8)]"></div>

              {/* Emitter Icon */}
              <div className="absolute -top-5 w-10 h-10 rounded-full bg-[#050505] border-[3px] border-white/90 shadow-[0_0_40px_15px_rgba(255,107,0,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transform -translate-y-8 group-hover:translate-y-0 transition-all duration-700 ease-out">
                {/* Custom Icon resembling the reference */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L22 20H2L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="14" r="3" fill="black" />
                </svg>
              </div>
            </div>

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
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
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
