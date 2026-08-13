"use client";

import * as React from "react";
import { X, ArrowRight, Check } from "lucide-react";

export function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">("idle");

  // Prevent scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStatus("idle"); // reset on close
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-fade-in bg-background/80 backdrop-blur-xl">
      <div 
        className="absolute inset-0 z-0" 
        onClick={onClose} 
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-2xl bg-card border border-border shadow-2xl overflow-hidden rounded-3xl max-h-[100dvh] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-border shrink-0 bg-card">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary mb-2 block">Connect</span>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Start a Conversation</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 md:p-8 overflow-y-auto bg-card">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-4xl text-foreground mb-4">Thank You.</h3>
              <p className="text-muted-foreground text-lg max-w-sm">
                Your message has been received. Our team will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Name</label>
                  <input required type="text" id="name" className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors rounded-none" placeholder="Jane Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Email</label>
                  <input required type="email" id="email" className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors rounded-none" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Company</label>
                <input required type="text" id="company" className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors rounded-none" placeholder="Acme Corp" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground font-medium">Message</label>
                <textarea required id="message" rows={4} className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none rounded-none" placeholder="How can we help you scale?"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="mt-4 group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs font-medium uppercase tracking-widest hover:bg-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto self-start rounded-full"
              >
                {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                {status !== "submitting" && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
