"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  User, Shield, CreditCard, Share2, 
  Settings, Bell, TrendingUp, 
  Eye, Briefcase, Bookmark, History, 
  Users 
} from "lucide-react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuGroups = [
    {
      title: "Account",
      items: [
        { label: "Identity", href: "/profile/account/identity", icon: User },
        { label: "Social Accounts", href: "/profile/account/social-accounts", icon: Share2 },
        { label: "Security", href: "/profile/account/security", icon: Shield },
        { label: "Subscription", href: "/profile/account/subscription", icon: CreditCard },
      ]
    },
    {
      title: "Personalization",
      items: [
        { label: "Preferences", href: "/profile/personalization/preferences", icon: Settings },
        { label: "Notifications", href: "/profile/personalization/notifications", icon: Bell },
        { label: "Investment Profile", href: "/profile/personalization/investment-profile", icon: TrendingUp },
      ]
    },
    {
      title: "Content",
      items: [
        { label: "Watchlist", href: "/profile/content/watchlist", icon: Eye },
        { label: "Portfolio", href: "/profile/content/portfolio", icon: Briefcase },
        { label: "Saved Articles", href: "/profile/content/saved-articles", icon: Bookmark },
        { label: "Activity History", href: "/profile/content/activity-history", icon: History },
      ]
    },
    {
      title: "Community",
      items: [
        { label: "Reputation", href: "/profile/community/reputation", icon: Users },
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <main className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="skeuo-card rounded-[24px] p-6 h-full flex flex-col">
                
                {/* User Summary */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                  <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-primary/30 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-lg leading-tight">Crypto Whale</h2>
                    <p className="text-xs text-foreground/50">Pro Member</p>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-6 flex-1">
                  {menuGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-[10px] font-bold text-foreground/40 uppercase tracking-wider mb-3 px-3">
                        {group.title}
                      </h3>
                      <ul className="flex flex-col gap-1">
                        {group.items.map((item) => {
                          const isActive = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link 
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                  isActive 
                                    ? "bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_rgba(255,107,0,0.1)]" 
                                    : "text-foreground/70 hover:bg-card hover:text-foreground border border-transparent"
                                }`}
                              >
                                <item.icon className={`w-4 h-4 ${isActive ? "text-primary" : "text-foreground/50"}`} />
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <button 
                    onClick={() => {
                      localStorage.removeItem("isLoggedIn");
                      window.location.href = "/";
                    }}
                    className="w-full py-2.5 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
              <div className="skeuo-card rounded-[24px] p-8 md:p-10 flex-1 min-h-[600px] h-full">
                {children}
              </div>
            </div>

          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
