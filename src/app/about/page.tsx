import { AnimatedSection, AnimatedStaggerParent, AnimatedStaggerChild } from "@/components/animated-section";

export default function AboutPage() {
  return (
    <>
      {/* Hero: Photographic Editorial Header */}
      <section className="relative h-[80dvh] min-h-[600px] w-full flex items-end pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/about-hero.jpg" alt="Corporate Architecture" className="w-full h-full object-cover opacity-100 dark:opacity-60 transition-opacity duration-400" />
        </div>
        
        {/* Diffused Ambient Glow */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-0 pb-24">
           <div className="w-[90vw] h-[60vh] bg-background/90 dark:bg-background/70 blur-[120px] rounded-[100%]" />
        </div>
        <div className="relative z-10 w-full">
          <AnimatedStaggerParent delay={0.1} className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="md:w-2/3">
              <AnimatedStaggerChild className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6 block">Our Identity</AnimatedStaggerChild>
              <AnimatedStaggerChild>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-foreground transition-colors duration-400">
                  Architects of<br />Human Potential.
                </h1>
              </AnimatedStaggerChild>
            </div>
            <AnimatedStaggerChild className="md:w-1/3">
              <p className="text-muted-foreground text-lg leading-relaxed">
                We are a syndicate of specialized agencies scaling the philosophy of emotional connection across global markets.
              </p>
            </AnimatedStaggerChild>
          </AnimatedStaggerParent>
        </div>
      </section>

      {/* Vision & Mission: Dark Cinematic Split */}
      <AnimatedSection className="py-32 bg-paper transition-colors duration-400 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10">
          <div className="border-t border-border pt-12 flex flex-col">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6 block">01 &mdash; Vision</span>
            <h2 className="font-display text-4xl lg:text-5xl mb-8 text-foreground transition-colors duration-400">
              The Global Benchmark.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed transition-colors duration-400">
              To be the global benchmark in transforming organizational culture, redefining leadership through emotional intelligence, and building human-centric ecosystems that drive sustainable, exponential growth.
            </p>
          </div>
          <div className="border-t border-border pt-12 flex flex-col">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6 block">02 &mdash; Mission</span>
            <h2 className="font-display text-4xl lg:text-5xl mb-8 text-foreground transition-colors duration-400">
              Harmonizing Connection.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed transition-colors duration-400">
              To empower leaders, teams, and enterprises by delivering world-class consulting, coaching, and strategic media solutions that harmonize emotional connection with measurable business performance.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* The Founder: Photographic Shift */}
      <AnimatedSection className="py-32 bg-background transition-colors duration-400 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-5/12">
            {/* Founder Image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl group">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/assets/riyas-about.png" alt="Riyas Hakkim" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 border border-border rounded-2xl pointer-events-none"></div>
            </div>
            <div className="flex gap-4 items-center mt-8">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground">Established 2026</span>
            </div>
          </div>
          <div className="md:w-7/12">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6 block">The Founder</span>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-foreground transition-colors duration-400">Riyas Hakkim</h2>
            <p className="font-display-italic text-3xl text-muted-foreground mb-10 transition-colors duration-400">
              India's First Emotional Sales Leadership Coach
            </p>
            <div className="space-y-6 text-foreground/80 leading-relaxed max-w-prose text-lg">
              <p>
                With over a decade of redefining how enterprises approach sales and leadership, Riyas Hakkim founded E3 Strategic Ventures to scale his philosophy of "Emotional Selling" across global markets. 
              </p>
              <p>
                He believes that at the core of every transaction is a human emotion. By training leaders to tap into these drivers, he has accelerated growth for countless organizations. Today, he leads a syndicate of specialized agencies spanning consulting, coaching, media, and education, all unified by a single goal: humanizing business.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* The Culture Boardroom */}
      <AnimatedSection className="relative py-48 bg-background transition-colors duration-400 border-b border-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/about-culture.jpg" alt="Leadership Boardroom" className="w-full h-full object-cover opacity-100 dark:opacity-60 transition-all duration-1000" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-xl p-8 md:p-12 rounded-3xl bg-background/80 dark:bg-background/60 backdrop-blur-xl border border-border shadow-2xl transition-all duration-500">
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-6 block">Our Culture</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mb-8 transition-colors duration-400">
              Driven by collective intelligence.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Behind every strategy and framework is a team of specialized operators who have scaled real businesses. We don't just advise; we architect and execute alongside you.
            </p>
          </div>
        </div>
      </AnimatedSection>

    </>
  );
}
