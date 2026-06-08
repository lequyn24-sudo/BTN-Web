"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, Menu, User } from "lucide-react";
import { useState, useEffect } from "react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

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
    <header className="relative z-50 w-full glass border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center group">
            <div className="relative w-[180px] h-[40px] flex-shrink-0">
              <Image 
                src="https://bitcoininfonews.com/wp-content/uploads/2024/12/logo.png" 
                alt="Bitcoin Info News Logo" 
                fill 
                className="object-contain" 
              />
            </div>
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
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <Link href="/profile" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center border border-border/50 hover:border-primary/50 transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <User className="w-5 h-5 text-primary" />
              </Link>
            ) : (
              <Link href="/login" className="hidden sm:flex text-sm font-medium text-white hover:text-primary transition-colors whitespace-nowrap">
                Sign In
              </Link>
            )}
            
            <Link href="/contact" className="hidden lg:flex btn-secondary whitespace-nowrap">
              Sponsorship
            </Link>
            <Link href="/subscribe" className="hidden sm:flex btn-primary whitespace-nowrap">
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
