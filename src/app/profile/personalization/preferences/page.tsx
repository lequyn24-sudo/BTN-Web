"use client";

import { Moon, Sun, Monitor, Globe2, DollarSign } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PreferencesPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Preferences</h1>
        <p className="text-foreground/60 text-sm">Customize your viewing experience and regional settings.</p>
      </div>
      
      <div className="w-full h-[1px] bg-border/50 my-2"></div>
      
      {/* Display Settings */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <h3 className="text-lg font-medium text-foreground">Appearance</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* System Mode */}
          <label className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${theme === 'system' ? 'border-primary bg-primary/5' : 'border-border/50 bg-black/40 hover:border-primary/50'}`}>
            <input type="radio" name="theme" value="system" className="sr-only" checked={theme === 'system'} onChange={() => setTheme('system')} />
            {theme === 'system' && (
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            )}
            <div className="w-full h-24 rounded-lg bg-gradient-to-br from-gray-200 to-gray-800 border border-border/30 flex items-center justify-center">
              <Monitor className="w-8 h-8 text-foreground/50" />
            </div>
            <span className="text-sm font-medium text-foreground">System Default</span>
          </label>
          
          {/* Dark Mode */}
          <label className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-border/50 bg-black/40 hover:border-primary/50'}`}>
            <input type="radio" name="theme" value="dark" className="sr-only" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
            {theme === 'dark' && (
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            )}
            <div className="w-full h-24 rounded-lg bg-black border border-white/10 flex items-center justify-center">
              <Moon className="w-8 h-8 text-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">Dark Mode</span>
          </label>
          
          {/* Light Mode */}
          <label className={`relative flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-border/50 bg-white/5 hover:border-primary/50'}`}>
            <input type="radio" name="theme" value="light" className="sr-only" checked={theme === 'light'} onChange={() => setTheme('light')} />
            {theme === 'light' && (
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
            )}
            <div className="w-full h-24 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
              <Sun className="w-8 h-8 text-black" />
            </div>
            <span className="text-sm font-medium text-foreground">Light Mode</span>
          </label>
        </div>
      </div>

      {/* Region & Language */}
      <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col gap-6">
        <h3 className="text-lg font-medium text-foreground">Region & Language</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">Language</label>
            <div className="relative">
              <select className="w-full appearance-none bg-card border border-border/50 rounded-lg pl-10 pr-10 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors cursor-pointer">
                <option value="en">English (US)</option>
                <option value="vi">Tiếng Việt</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
              </select>
              <Globe2 className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground/80">Local Currency</label>
            <div className="relative">
              <select className="w-full appearance-none bg-card border border-border/50 rounded-lg pl-10 pr-10 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors cursor-pointer">
                <option value="usd">USD - US Dollar</option>
                <option value="eur">EUR - Euro</option>
                <option value="vnd">VND - Vietnamese Dong</option>
                <option value="jpy">JPY - Japanese Yen</option>
              </select>
              <DollarSign className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
            <p className="text-xs text-foreground/50 mt-1">This currency will be used to display crypto prices across the site.</p>
          </div>
          
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-sm font-medium text-foreground/80">Timezone</label>
            <div className="relative">
              <select className="w-full appearance-none bg-card border border-border/50 rounded-lg pl-4 pr-10 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors cursor-pointer">
                <option value="utc">UTC (Coordinated Universal Time)</option>
                <option value="ict">ICT (Indochina Time) - UTC+07:00</option>
                <option value="est">EST (Eastern Standard Time) - UTC-05:00</option>
              </select>
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/50"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>
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