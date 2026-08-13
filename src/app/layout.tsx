import type { Metadata } from "next";
import { Bodoni_Moda, Inter } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E3 Strategic Ventures",
  description: "The Architects of Human Potential.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodoniModa.variable} ${inter.variable} bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <Header />

          <main className="min-h-screen">
            {children}
          </main>

          {/* Global Premium Footer */}
          <footer id="contact" className="bg-background pt-16 sm:pt-24 md:pt-32 pb-12 border-t border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display text-3xl md:text-4xl mb-6 text-foreground max-w-sm">
                      Ready to scale your emotional impact?
                    </h2>
                    <a href="mailto:Info@e3strategicventures.com" className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary hover:text-foreground transition-colors duration-300">
                      Start the conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <h4 className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-6">Offices</h4>
                  <address className="not-italic text-sm text-foreground/80 leading-relaxed">
                    A1 Workspace, The Workbook<br />
                    Tower 1, Hilite Business Park<br />
                    Calicut, Kerala<br />
                    India
                  </address>
                  <div className="mt-6 space-y-2 text-sm text-foreground/80">
                    <p><a href="mailto:Info@e3strategicventures.com" className="hover:text-primary transition-colors">Info@e3strategicventures.com</a></p>
                    <p><a href="tel:+917907089069" className="hover:text-primary transition-colors">+91 79070 89069</a></p>
                  </div>
                </div>

                <div className="md:col-span-3">
                  <h4 className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground mb-6">Group Companies</h4>
                  <ul className="space-y-4 text-sm text-foreground/80">
                    <li><a href="https://e3globalzone.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">E3 Global</a></li>
                    <li><a href="https://riyashakkim.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Riyas Hakkim</a></li>
                    <li><a href="https://e3mediaevents.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">E3 Media Events</a></li>
                    <li><span className="text-muted-foreground cursor-not-allowed">Humans Hub (Coming Soon)</span></li>
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-border pt-12 flex flex-col items-center">
                
                <Link href="/" className="flex items-center gap-2 group mb-8">
                  <img src="/assets/logo-black.png" alt="E3 Strategic Ventures" className="h-12 w-auto dark:hidden object-contain transition-transform duration-500 group-hover:scale-105" />
                  <img src="/assets/logo-white.png" alt="E3 Strategic Ventures" className="h-12 w-auto hidden dark:block object-contain transition-transform duration-500 group-hover:scale-105" />
                </Link>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} E3 Strategic Ventures. All rights reserved.</p>
                  <div className="flex gap-8">
                    <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  </div>
                </div>
              </div>

            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
