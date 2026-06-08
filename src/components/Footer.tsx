"use client";

import Link from "next/link";
import { Globe, Mail, Send, MessageCircle } from "lucide-react";

export function Footer() {
  const categories = [
    "Alt Coin News", "Bitcoin News", "Blockchain Event", "Crypto News",
    "Millionaire", "Mining", "News", "Other",
    "Press Release", "Sponsored Articles", "Top Project", "cmc"
  ];

  const company = ["About Us", "Contact Us", "Advertise With Us", "Careers", "Write For Us"];
  const resources = ["Terms of Service", "Privacy Policy", "Disclaimer", "Sitemap"];

  return (
    <footer className="bg-background/95 border-t border-border pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-display font-bold text-primary-foreground">
                B
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                BitcoinInfo<span className="text-primary">News</span>
              </span>
            </Link>
            <p className="text-foreground/70 mb-6 text-sm leading-relaxed max-w-sm">
              Your trusted source for Bitcoin, blockchain, and cryptocurrency news, insights, and market analysis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"><Globe className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"><MessageCircle className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"><Send className="w-4 h-4" /></Link>
              <Link href="#" className="p-2 bg-foreground/5 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"><Mail className="w-4 h-4" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((item) => (
                <li key={item}>
                  <Link href={`/category/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold mb-4 text-lg text-transparent select-none">More</h4>
            <ul className="space-y-2">
              {categories.slice(6, 12).map((item) => (
                <li key={item}>
                  <Link href={`/category/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 mb-8">
              {company.map((item) => (
                <li key={item}>
                  <Link href={`/about/${item.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © 2026 Bitcoin Info News. All Rights Reserved.
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
