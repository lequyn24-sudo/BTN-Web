"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Send, MessageCircle } from "lucide-react";

export function Footer() {
  const categories = [
    "Alt Coin News", "Bitcoin News", "Blockchain Event", "Crypto News",
    "Millionaire", "Mining", "News", "Other",
    "Press Release", "Sponsored Articles", "Top Project", "CMC"
  ];

  const company = ["About Us", "Contact Us", "Advertise With Us", "Careers", "Write For Us"];
  const resources = ["Terms of Service", "Privacy Policy", "Disclaimer", "Sitemap"];

  return (
    <footer className="bg-background/95 border-t border-border pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* Brand & Socials */}
          <div className="w-full lg:w-1/4 flex flex-col gap-6">
            <Link href="/" className="flex items-center">
              <div className="relative w-[180px] h-[40px]">
                <Image 
                  src="https://bitcoininfonews.com/wp-content/uploads/2024/12/logo.png" 
                  alt="Bitcoin Info News Logo" 
                  fill 
                  className="object-contain object-left" 
                />
              </div>
            </Link>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
              Your trusted source for Bitcoin, blockchain, and cryptocurrency news, insights, and market analysis.
            </p>
            <div className="flex gap-3">
              {/* Using plain custom SVGs or text for X, Telegram, Youtube, LinkedIn, RSS based on the image */}
              <Link href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"><span className="text-xs font-bold text-foreground/80 group-hover:text-primary-foreground">X</span></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"><Send className="w-3.5 h-3.5 text-foreground/80 group-hover:text-primary-foreground" /></Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80 group-hover:text-primary-foreground"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80 group-hover:text-primary-foreground"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/80 group-hover:text-primary-foreground"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="w-full lg:w-[30%]">
            <h4 className="font-semibold mb-6 text-sm text-foreground">Categories</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {categories.map((item) => (
                <Link key={item} href={`/category/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[13px] text-foreground/60 hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="w-full lg:w-[15%]">
            <h4 className="font-semibold mb-6 text-sm text-foreground">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link href={`/about/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[13px] text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full lg:w-[15%]">
            <h4 className="font-semibold mb-6 text-sm text-foreground">Resources</h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item}>
                  <Link href={`/about/${item.toLowerCase().replace(/ /g, "-")}`} className="text-[13px] text-foreground/60 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-border/50 h-[150px] mt-2"></div>

          {/* Newsletter */}
          <div className="w-full lg:w-[25%] flex flex-col gap-4">
            <h4 className="font-semibold mb-2 text-sm text-foreground">Newsletter</h4>
            <p className="text-[13px] text-foreground/60 mb-2 leading-relaxed">
              Get curated crypto news and insights delivered to your inbox.
            </p>
            <form className="flex w-full gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border border-border rounded-l-md px-3 py-2 text-sm w-full outline-none focus:border-primary text-foreground" 
              />
              <button type="button" className="bg-[#ffb042] hover:bg-[#ffa01c] text-black text-sm font-semibold px-4 py-2 rounded-r-md transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-foreground/40 mt-1">
              No spam. Unsubscribe anytime.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 BitcoinInfoNews.com. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <select className="bg-transparent border border-border rounded-md px-2 py-1 text-sm outline-none focus:border-primary">
              <option value="en">English</option>
              <option value="vi">Tiếng Việt</option>
            </select>
            <select className="bg-transparent border border-border rounded-md px-2 py-1 text-sm outline-none focus:border-primary">
              <option value="usd">USD</option>
              <option value="vnd">VND</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}
