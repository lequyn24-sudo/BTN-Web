import { CreditCard, Star, CheckCircle2, Download } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Subscription</h1>
        <p className="text-foreground/60 text-sm">Manage your membership plan and billing details.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Current Plan */}
      <div className="bg-card rounded-xl border border-primary/30 p-6 flex flex-col gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        
        <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3 border border-primary/30">
              <Star className="w-3.5 h-3.5 fill-primary" /> PRO MEMBER
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-1">Bitcoin Info Pro</h3>
            <p className="text-sm text-foreground/70 mb-4 max-w-sm">
              You are currently on the Pro plan. You have full access to premium insights, ad-free reading, and advanced portfolio tools.
            </p>
            
            <div className="flex items-end gap-1 mb-6">
              <span className="text-3xl font-bold text-foreground">$14.99</span>
              <span className="text-sm text-foreground/50 mb-1">/month</span>
            </div>
            
            <div className="flex gap-3">
              <button className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                Upgrade to Annual (Save 20%)
              </button>
              <button className="px-5 py-2.5 bg-card border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Cancel Plan
              </button>
            </div>
          </div>
          
          <div className="bg-background/40 border border-border/50 rounded-xl p-5 md:w-64 shrink-0 h-fit">
            <h4 className="text-sm font-medium text-foreground mb-3">Next Payment</h4>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-foreground/70">Date:</span>
              <span className="text-sm font-medium text-foreground">Jul 15, 2026</span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-foreground/70">Amount:</span>
              <span className="text-sm font-medium text-foreground">$14.99</span>
            </div>
            
            <div className="w-full h-px bg-border/50 mb-4"></div>
            
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-foreground/60" />
              <span className="text-sm text-foreground">•••• 4242</span>
            </div>
            <button className="text-xs font-medium text-primary hover:underline">Update payment method</button>
          </div>
        </div>
      </div>

      {/* Billing History */}
      <div className="bg-card rounded-xl border border-border/50 flex flex-col overflow-hidden">
        <div className="p-6 border-b border-border/50">
          <h3 className="text-lg font-medium text-foreground">Billing History</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-card border-b border-border/50">
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Description</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider">Amount</th>
                <th className="py-3 px-6 text-xs font-medium text-foreground/60 uppercase tracking-wider text-right">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50 text-sm">
              <tr className="hover:bg-card transition-colors">
                <td className="py-4 px-6 text-foreground">Jun 15, 2026</td>
                <td className="py-4 px-6 text-foreground/80">Pro Plan - Monthly</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Paid
                  </span>
                </td>
                <td className="py-4 px-6 text-foreground font-medium">$14.99</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-foreground/50 hover:text-primary transition-colors">
                    <Download className="w-4 h-4 ml-auto" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-card transition-colors">
                <td className="py-4 px-6 text-foreground">May 15, 2026</td>
                <td className="py-4 px-6 text-foreground/80">Pro Plan - Monthly</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Paid
                  </span>
                </td>
                <td className="py-4 px-6 text-foreground font-medium">$14.99</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-foreground/50 hover:text-primary transition-colors">
                    <Download className="w-4 h-4 ml-auto" />
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-card transition-colors">
                <td className="py-4 px-6 text-foreground">Apr 15, 2026</td>
                <td className="py-4 px-6 text-foreground/80">Pro Plan - Monthly</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Paid
                  </span>
                </td>
                <td className="py-4 px-6 text-foreground font-medium">$14.99</td>
                <td className="py-4 px-6 text-right">
                  <button className="text-foreground/50 hover:text-primary transition-colors">
                    <Download className="w-4 h-4 ml-auto" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}