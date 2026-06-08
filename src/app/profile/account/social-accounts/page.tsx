import { Globe, Wallet, CheckCircle2 } from "lucide-react";

export default function SocialAccountsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Social Accounts</h1>
        <p className="text-foreground/60 text-sm">Connect your social accounts and Web3 wallets.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Web2 Socials */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <h3 className="text-lg font-medium text-foreground">Linked Accounts</h3>
        
        <div className="flex flex-col gap-4">
          {/* Google */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                {/* Simple G for Google */}
                <span className="text-black font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Google</span>
                <span className="text-xs text-foreground/50">whale@bitcoininfonews.com</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Connected
              </span>
              <button className="px-3 py-1.5 bg-card border border-border text-foreground text-xs font-semibold rounded hover:bg-white/10 transition-colors">
                Disconnect
              </button>
            </div>
          </div>
          
          {/* Twitter / X */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-background border border-white/20 flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">X</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">X (Twitter)</span>
                <span className="text-xs text-foreground/50">@crypto_whale_99</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Connected
              </span>
              <button className="px-3 py-1.5 bg-card border border-border text-foreground text-xs font-semibold rounded hover:bg-white/10 transition-colors">
                Disconnect
              </button>
            </div>
          </div>

          {/* Discord */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">Discord</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Discord</span>
                <span className="text-xs text-foreground/50">Not connected</span>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded hover:bg-primary/90 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>

      {/* Web3 Wallets */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Wallet className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">Web3 Wallets</h3>
            <p className="text-sm text-foreground/60 mt-1">Connect your wallet to unlock premium features and portfolio tracking.</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          {/* MetaMask */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-primary/30 bg-primary/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F6851B] flex items-center justify-center">
                <span className="text-foreground font-bold text-xs">MM</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">MetaMask</span>
                <span className="text-xs text-primary font-mono">0x71C...976F</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-green-500 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Connected
              </span>
              <button className="px-3 py-1.5 bg-card border border-border text-foreground text-xs font-semibold rounded hover:bg-white/10 transition-colors">
                Disconnect
              </button>
            </div>
          </div>
          
          {/* Phantom */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-border/30 bg-card">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#AB9FF2] flex items-center justify-center">
                <span className="text-foreground font-bold text-xs">PH</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">Phantom</span>
                <span className="text-xs text-foreground/50">Solana Network</span>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded hover:bg-primary/90 transition-colors">
              Connect
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}