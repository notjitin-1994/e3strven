"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ContactModal } from "./contact-modal";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isContactOpen, setContactOpen] = React.useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-background/90 backdrop-blur-xl border-b border-border z-50 sticky top-0 transition-colors duration-400 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group relative z-[60]">
              <img src="/assets/logo-black.png" alt="E3 Strategic Ventures" className="h-10 w-auto dark:hidden object-contain transition-transform duration-500 group-hover:scale-105" />
              <img src="/assets/logo-white.png" alt="E3 Strategic Ventures" className="h-10 w-auto hidden dark:block object-contain transition-transform duration-500 group-hover:scale-105" />
            </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.1em]">
            <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors duration-300">About</Link>
            <button onClick={() => setContactOpen(true)} className="text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase tracking-[0.1em]">Contact</button>
            
            <div className="ml-4 border-l border-border pl-6 transition-colors duration-400 flex items-center">
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-4 relative z-[60]">
            <ThemeToggle />
            <button 
              className="p-2 -mr-2 text-foreground"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer */}
      <div 
        className={`fixed inset-0 z-[45] bg-background flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col gap-8 text-3xl font-display tracking-tight text-foreground">
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors duration-300">
            About Us
          </Link>
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              setContactOpen(true);
            }} 
            className="text-left hover:text-primary transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
        
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
