import { Mail, Smartphone, BellRing, TrendingUp, ShieldAlert } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Notifications</h1>
        <p className="text-foreground/60 text-sm">Choose what updates you want to receive and how.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Email Notifications */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-white">Email Notifications</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start border-b border-border/50 pb-4">
            <div className="flex flex-col pr-8">
              <span className="text-sm font-medium text-white mb-1">Daily Newsletter</span>
              <span className="text-xs text-foreground/60 leading-relaxed">A daily summary of top crypto news, market trends, and exclusive insights from our editors.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-start border-b border-border/50 pb-4">
            <div className="flex flex-col pr-8">
              <span className="text-sm font-medium text-white mb-1">Breaking News</span>
              <span className="text-xs text-foreground/60 leading-relaxed">Immediate alerts for major industry events, hacks, and regulatory announcements.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-start pb-2">
            <div className="flex flex-col pr-8">
              <span className="text-sm font-medium text-white mb-1">Weekly Market Report</span>
              <span className="text-xs text-foreground/60 leading-relaxed">In-depth technical analysis and on-chain data review sent every Monday.</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Push Notifications */}
      <div className="bg-black/20 rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Smartphone className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium text-white">Push Notifications</h3>
            <span className="text-xs text-foreground/50 mt-0.5">Alerts delivered directly to your device browser.</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b border-border/50 pb-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-white">Price Alerts (Watchlist)</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center border-b border-border/50 pb-4">
            <div className="flex items-center gap-3">
              <BellRing className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-white">New Article from Saved Authors</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-foreground/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-white">Security Alerts (Logins, PW changes)</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked disabled />
              <div className="w-11 h-6 bg-primary/50 cursor-not-allowed rounded-full peer after:translate-x-full after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white/80 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
            </label>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2.5 bg-[#ffb042] text-black text-sm font-bold rounded-lg hover:bg-[#ffa01c] transition-colors">
            Save Preferences
          </button>
        </div>
      </div>

    </div>
  );
}