import { TrendingUp, Target, Briefcase } from "lucide-react";

export default function InvestmentProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Investment Profile</h1>
        <p className="text-foreground/60 text-sm">Tell us about your crypto journey to get personalized content.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Experience Level */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-white">Experience Level</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label className="relative flex flex-col gap-2 p-4 rounded-xl border-2 border-border/50 bg-white/5 cursor-pointer hover:border-primary/50 transition-colors">
            <input type="radio" name="experience" value="beginner" className="sr-only" />
            <span className="text-sm font-bold text-white">Beginner</span>
            <span className="text-xs text-foreground/60">Just starting out, learning the basics of crypto.</span>
          </label>
          
          <label className="relative flex flex-col gap-2 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
            <input type="radio" name="experience" value="intermediate" className="sr-only" defaultChecked />
            <div className="absolute top-4 right-4 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            </div>
            <span className="text-sm font-bold text-white">Intermediate</span>
            <span className="text-xs text-foreground/60">Familiar with trading, wallets, and basic DeFi.</span>
          </label>
          
          <label className="relative flex flex-col gap-2 p-4 rounded-xl border-2 border-border/50 bg-white/5 cursor-pointer hover:border-primary/50 transition-colors">
            <input type="radio" name="experience" value="advanced" className="sr-only" />
            <span className="text-sm font-bold text-white">Advanced</span>
            <span className="text-xs text-foreground/60">Experienced trader or developer, deep into Web3.</span>
          </label>
        </div>
      </div>

      {/* Interests */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">Topics of Interest</h3>
            <p className="text-sm text-foreground/60 mt-1">Select the topics you want to see more of in your feed.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {["Bitcoin", "Ethereum", "Altcoins", "DeFi", "NFTs", "GameFi", "Regulation", "Mining", "Trading Strategies", "Airdrops", "Memecoins", "Macroeconomics"].map((topic, i) => (
            <label key={topic} className="relative cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={i < 5} />
              <div className="px-4 py-2 rounded-full border border-border/50 bg-white/5 text-sm font-medium text-foreground/70 peer-checked:bg-primary/20 peer-checked:border-primary/50 peer-checked:text-primary transition-colors hover:bg-white/10">
                {topic}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Primary Goal */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-white">Primary Goal</h3>
        </div>
        
        <div className="relative max-w-md">
          <select className="w-full appearance-none bg-black/50 border border-border/50 rounded-lg pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors cursor-pointer">
            <option value="long-term">Long-term Holding (HODL)</option>
            <option value="day-trading">Day Trading & Technical Analysis</option>
            <option value="research">Industry Research & Learning</option>
            <option value="development">Building Web3 Applications</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2.5 bg-[#ffb042] text-black text-sm font-bold rounded-lg hover:bg-[#ffa01c] transition-colors">
            Save Profile
          </button>
        </div>
      </div>

    </div>
  );
}