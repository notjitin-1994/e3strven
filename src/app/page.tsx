import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection, AnimatedStaggerParent, AnimatedStaggerChild } from "@/components/animated-section";
import { E3MediaLogo } from "@/components/e3-media-logo";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img src="/assets/hero.jpg" className="w-full h-full object-cover opacity-60 transition-opacity duration-400" alt="Hero Architecture" />
        </div>
        <AnimatedStaggerParent delay={0.2} className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <AnimatedStaggerChild>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-white mb-8 transition-colors duration-400">
              E3 Strategic <br /> <span className="font-display-italic text-primary">Ventures.</span>
            </h1>
          </AnimatedStaggerChild>
          <AnimatedStaggerChild>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 transition-colors duration-400">
              Consulting, coaching, media, and education working in synergy to accelerate business transformation and unlock human potential.
            </p>
          </AnimatedStaggerChild>
          <AnimatedStaggerChild className="flex flex-col sm:flex-row gap-6">
            <Link href="#group" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Explore Our Group
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/20 text-white text-xs font-medium uppercase tracking-widest rounded-full hover:border-white transition-all duration-300">
              Our Vision
            </Link>
          </AnimatedStaggerChild>
        </AnimatedStaggerParent>
      </section>

      {/* Hub About & Stats Bento */}
      <AnimatedSection id="about" className="py-16 sm:py-24 md:py-32 bg-paper transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-card p-8 md:p-12 rounded-2xl flex flex-col justify-center border border-border transition-colors duration-400">
              <span className="text-[11px] font-medium uppercase tracking-widest text-primary mb-6 block">The Hub</span>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.2] text-foreground mb-6 transition-colors duration-400">
                A unified ecosystem driving exponential growth through emotional connection and strategic precision.
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-prose mb-8 transition-colors duration-400">
                E3 Strategic Ventures is not a single entity, but a syndicate of specialized agencies. From C-suite consulting to emotional sales leadership, digital brand amplification, and continuous learning platforms—we build the future of human-centric business.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary hover:text-foreground transition-colors duration-300">
                Learn about us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="bg-primary text-primary-foreground p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-between transition-colors duration-400">
                <span className="text-[11px] font-medium uppercase tracking-widest mb-4 block opacity-80">Our Footprint</span>
                <p className="font-display text-5xl md:text-6xl mb-2">4+</p>
                <p className="text-sm font-medium opacity-90">Specialized Group Companies</p>
              </div>
              <div className="bg-sunken p-6 md:p-8 rounded-2xl flex-1 flex flex-col justify-between border border-border transition-colors duration-400">
                <span className="text-[11px] font-medium uppercase tracking-widest text-primary mb-4 block">Our Impact</span>
                <p className="font-display text-4xl mb-2 text-foreground">Global</p>
                <p className="text-muted-foreground text-sm">Transforming businesses across borders.</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* The Group Bento Grid */}
      <AnimatedSection id="group" className="py-16 sm:py-24 md:py-32 bg-background transition-colors duration-400">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl mb-12 md:mb-24 text-foreground tracking-tight transition-colors duration-400 text-center">The Ecosystem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* E3 Global - Large Card */}
            <a href="https://e3globalzone.com/" target="_blank" rel="noreferrer" className="group col-span-1 md:col-span-8 relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-10 border border-border transition-colors duration-400">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/bg-consulting.jpg" alt="Consulting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 dark:opacity-80" />
              </div>
              <div className="relative z-10 mt-auto w-full md:w-auto p-6 md:p-8 rounded-2xl bg-black/80 dark:bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-black/90 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-3 block">Consulting</span>
                  <h3 className="font-display text-3xl text-white mb-4">E3 Global Zone</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">High-level strategic consulting and business advisory for organizations looking to scale and dominate their markets.</p>
                </div>
                {/* Using logo-black.png (white text) because the card has a dark overlay in both light and dark themes */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/logo-black.png" alt="E3 Strategic Ventures" className="h-10 w-auto object-contain" />
              </div>
            </a>

            {/* Riyas Hakkim - Tall Card */}
            <a href="https://riyashakkim.com/" target="_blank" rel="noreferrer" className="group col-span-1 md:col-span-4 relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[400px] flex flex-col p-6 md:p-10 border border-border transition-colors duration-400">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/riyas-portfolio.png" alt="Riyas Hakkim Background" className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-100 dark:opacity-80" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="h-16 w-16 md:h-20 md:w-20 rounded-lg bg-[#000000] border border-white/10 shadow-xl p-3 flex items-center justify-center transition-all duration-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/riyas-hakkim.jpeg" alt="Riyas Hakkim Logo" className="w-full h-full object-contain rounded-sm" />
                </div>
                <div className="mt-8 p-6 md:p-8 rounded-2xl bg-black/80 dark:bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-black/90">
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-3 block">Coaching</span>
                  <h3 className="font-display text-3xl text-white mb-4">Riyas Hakkim</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs">Transformational sales coaching and leadership development for high-performing individuals and teams.</p>
                </div>
              </div>
            </a>

            {/* E3 Media - Wide Card */}
            <a href="https://e3mediaevents.com/" target="_blank" rel="noreferrer" className="group col-span-1 md:col-span-7 relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[350px] flex flex-col justify-end p-6 md:p-10 border border-border transition-colors duration-400">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/media-bg.jpg" alt="Media" className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-100 dark:opacity-80" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 w-full p-6 md:p-8 rounded-2xl bg-black/80 dark:bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:bg-black/90 mt-auto">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-3 block">Media</span>
                  <h3 className="font-display text-3xl text-white mb-4">E3 Media Events</h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-sm">World-class digital marketing, event management, and immersive video productions.</p>
                </div>
                <E3MediaLogo className="h-12 w-auto" />
              </div>
            </a>

            {/* Humans Hub - Square Card (Coming Soon) */}
            <div className="group col-span-1 md:col-span-5 relative overflow-hidden rounded-3xl min-h-[320px] md:min-h-[350px] flex flex-col p-6 md:p-10 border border-border transition-colors duration-400 bg-sunken cursor-default">
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/bg-education.jpg" alt="Education" className="w-full h-full object-cover opacity-20 mix-blend-multiply dark:mix-blend-screen transition-all duration-700 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between opacity-80">
                <div className="h-12 w-12 rounded-full bg-border text-foreground flex items-center justify-center font-display text-xl transition-colors duration-500">HH</div>
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">Education</span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-full">Coming Soon</span>
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-4">Humans Hub</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Democratizing advanced professional learning.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
