"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Mail, Lock, User as UserIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call and login success
    localStorage.setItem("isLoggedIn", "true");
    
    // Force a small delay for realistic feel, then redirect to profile
    setTimeout(() => {
      // Use window.location to force a full reload so Header catches the localStorage change
      window.location.href = "/profile";
    }, 500);
  };

  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="w-full max-w-md relative z-10">
          <div className="skeuo-card rounded-[32px] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
            
            {/* Toggle Tabs */}
            <div className="flex bg-black/40 p-1 rounded-xl mb-8 relative">
              <div 
                className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white/10 rounded-lg shadow-sm transition-all duration-300 ease-out ${isLogin ? 'left-1' : 'left-[calc(50%+2px)]'}`}
              ></div>
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${isLogin ? 'text-white' : 'text-foreground/50 hover:text-foreground/80'}`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-sm font-medium z-10 transition-colors ${!isLogin ? 'text-white' : 'text-foreground/50 hover:text-foreground/80'}`}
              >
                Create Account
              </button>
            </div>

            <div className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">
                {isLogin ? 'Welcome back' : 'Join BitcoinInfoNews'}
              </h1>
              <p className="text-sm text-foreground/60">
                {isLogin ? 'Enter your credentials to access your account.' : 'Create an account to save articles and customize your feed.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="w-4 h-4 text-foreground/40" />
                    </div>
                    <input 
                      type="text" 
                      required={!isLogin}
                      placeholder="John Doe" 
                      className="w-full bg-black/50 border border-border/50 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-foreground/30"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="w-4 h-4 text-foreground/40" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com" 
                    className="w-full bg-black/50 border border-border/50 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-semibold text-foreground/80 uppercase tracking-wider">Password</label>
                  {isLogin && (
                    <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="w-4 h-4 text-foreground/40" />
                  </div>
                  <input 
                    type="password" 
                    required
                    placeholder="••••••••" 
                    className="w-full bg-black/50 border border-border/50 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white placeholder:text-foreground/30"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(255,107,0,0.3)] hover:shadow-[0_0_20px_rgba(255,107,0,0.5)] mt-2 flex items-center justify-center gap-2 group"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex-1 h-px bg-border/50"></div>
              <span className="text-xs text-foreground/40 uppercase">Or continue with</span>
              <div className="flex-1 h-px bg-border/50"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-border/50 rounded-xl py-2.5 transition-colors text-sm font-medium">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-border/50 rounded-xl py-2.5 transition-colors text-sm font-medium">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Facebook
              </button>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
