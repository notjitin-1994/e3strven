"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { ContactModal } from "./contact-modal";

export function Header() {
  const [isContactOpen, setContactOpen] = React.useState(false);

  return (
    <>
      <header className="w-full bg-background/90 backdrop-blur-xl border-b border-border z-50 sticky top-0 transition-colors duration-400 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="font-display text-2xl tracking-tight text-primary transition-colors duration-400">
              E3 <span className="font-display-italic text-foreground transition-colors duration-400">Strategic Ventures</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium uppercase tracking-[0.1em]">
            <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors duration-300">About</Link>
            <button onClick={() => setContactOpen(true)} className="text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase tracking-[0.1em]">Contact</button>
            
            <div className="ml-4 border-l border-border pl-6 transition-colors duration-400 flex items-center">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
