"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
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
    <header className="sticky top-0 z-50 w-full glass border-b-0 border-t-0 border-r-0 border-l-0 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-display font-bold text-primary-foreground">
              B
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
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
          <button className="p-2 hover:text-primary transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <ThemeToggle />
          <button className="p-2 lg:hidden hover:text-primary transition-colors" aria-label="Menu">
            <Menu className="w-5 h-5" />
          </button>
          <Link
            href="/subscribe"
            className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold transition-colors"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </header>
  );
}
