import { Trophy, Star, Shield, Award, MessageSquare, Flame } from "lucide-react";

export default function ReputationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Community Reputation</h1>
        <p className="text-foreground/60 text-sm">Track your standing, badges, and influence in the Bitcoin Info News community.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card rounded-xl border border-border/50 p-5 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-primary">
            <Trophy className="w-5 h-5" />
            <span className="font-medium">Reputation Score</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-foreground">4,250</span>
            <span className="text-sm text-green-500 font-medium mb-1">+120 this week</span>
          </div>
          <div className="w-full bg-card rounded-full h-2 mt-2">
            <div className="bg-gradient-to-r from-primary to-yellow-400 h-2 rounded-full w-[70%]"></div>
          </div>
          <p className="text-xs text-foreground/50 mt-1">750 points to next rank: "Crypto Sage"</p>
        </div>
        
        <div className="bg-card rounded-xl border border-border/50 p-5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-foreground/70">
            <Shield className="w-5 h-5" />
            <span className="font-medium">Current Rank</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground block">Market Analyst</span>
            <span className="text-sm text-foreground/50">Top 15% of users</span>
          </div>
        </div>
        
        <div className="bg-card rounded-xl border border-border/50 p-5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-foreground/70">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-orange-500">Activity Streak</span>
          </div>
          <div>
            <span className="text-2xl font-bold text-foreground block">14 Days</span>
            <span className="text-sm text-foreground/50">Read 5+ articles daily</span>
          </div>
        </div>
      </div>

      {/* Badges Collection */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-foreground">Earned Badges</h3>
          <span className="text-sm text-foreground/50">8 of 24 collected</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-primary/30 bg-primary/5 text-center group cursor-pointer hover:bg-primary/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_15px_rgba(255,165,0,0.3)]">
              <Star className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-foreground mt-1">Early Adopter</span>
            <span className="text-[10px] text-foreground/50">Joined in 2024</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/50 bg-card text-center group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-foreground mt-1">Top Commenter</span>
            <span className="text-[10px] text-foreground/50">100+ comments</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/50 bg-card text-center group cursor-pointer hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <Award className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-xs font-bold text-foreground mt-1">Fact Checker</span>
            <span className="text-[10px] text-foreground/50">Reported errors</span>
          </div>
          
          {/* Locked badges */}
          <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/20 bg-card text-center opacity-60">
            <div className="w-12 h-12 rounded-full bg-card border border-dashed border-white/20 flex items-center justify-center grayscale">
              <Shield className="w-6 h-6 text-foreground/40" />
            </div>
            <span className="text-xs font-bold text-foreground/70 mt-1">Moderator</span>
            <span className="text-[10px] text-foreground/40">Locked</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-border/20 bg-card text-center opacity-60">
            <div className="w-12 h-12 rounded-full bg-card border border-dashed border-white/20 flex items-center justify-center grayscale">
              <Trophy className="w-6 h-6 text-foreground/40" />
            </div>
            <span className="text-xs font-bold text-foreground/70 mt-1">Whale status</span>
            <span className="text-[10px] text-foreground/40">Locked</span>
          </div>
        </div>
      </div>

      {/* How to earn */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <h3 className="text-lg font-medium text-foreground">How to earn points</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex justify-between items-center p-3 border-b border-border/30">
            <span className="text-sm text-foreground/80">Reading an article to the end</span>
            <span className="text-sm font-bold text-primary">+5 pts</span>
          </div>
          <div className="flex justify-between items-center p-3 border-b border-border/30">
            <span className="text-sm text-foreground/80">Leaving a constructive comment</span>
            <span className="text-sm font-bold text-primary">+15 pts</span>
          </div>
          <div className="flex justify-between items-center p-3 border-b border-border/30">
            <span className="text-sm text-foreground/80">Receiving upvotes on your comment</span>
            <span className="text-sm font-bold text-primary">+2 pts/vote</span>
          </div>
          <div className="flex justify-between items-center p-3 border-b border-border/30">
            <span className="text-sm text-foreground/80">Sharing article to social media</span>
            <span className="text-sm font-bold text-primary">+25 pts</span>
          </div>
        </div>
      </div>

    </div>
  );
}