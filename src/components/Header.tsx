"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu } from "lucide-react";

export function Header() {
  const navLinks = [
    "Bitcoin News",
    "Alt Coin News",
    "Mining",
    "Blockchain Event",
    "Top Project",
    "Other",
    "Sponsored Articles",
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden group-hover:shadow-[0_0_15px_rgba(255,107,0,0.6)] transition-all flex-shrink-0 bg-white">
              <Image src="https://bitcoininfonews.com/wp-content/uploads/2024/12/logo.png" alt="BTN Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block text-white">
              BitcoinInfo<span className="text-primary">News</span>
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`/category/${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-primary transition-colors text-white" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 lg:hidden hover:text-primary transition-colors text-white" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
          <Link
            href="/subscribe"
            className="hidden sm:flex btn-primary"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}

