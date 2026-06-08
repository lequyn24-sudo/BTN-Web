import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Handshake, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
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
              <Handshake className="w-4 h-4" />
              <span>Sponsorship & Advertising</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Partner With Us.
            </h1>
            
            <p className="text-foreground/70 text-lg">
              Reach the world's most engaged crypto audience. We offer premium advertising, sponsored articles, and strategic partnerships tailored to your goals.
            </p>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Premium banner placements</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Sponsored articles and press releases</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Newsletter sponsorships</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="skeuo-card p-8 md:p-10 rounded-[32px] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[32px] pointer-events-none"></div>
            
            <form className="relative z-10 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-sm text-foreground/60">Fill out the form below and our team will get back to you shortly.</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@company.com" 
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground/80">Company / Project Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    placeholder="Acme Corp" 
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    placeholder="Tell us about your campaign goals..." 
                    className="bg-black/50 border border-border/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <button type="button" className="btn-primary w-full mt-2 py-3.5 text-base font-semibold">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
