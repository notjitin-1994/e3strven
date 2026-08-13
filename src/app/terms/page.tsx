import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions - E3 Strategic Ventures",
  description: "Terms and conditions for E3 Strategic Ventures.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-display text-4xl md:text-6xl mb-8">Terms & Conditions</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-display text-2xl mt-12 mb-4">1. Introduction</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Welcome to E3 Strategic Ventures. These Terms & Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">2. Intellectual Property</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The website and its original content, features, and functionality are and will remain the exclusive property of E3 Strategic Ventures and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of E3 Strategic Ventures.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">3. User Obligations</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When you create an account or interact with our services, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of our services to you.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">4. Limitation of Liability</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In no event shall E3 Strategic Ventures, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">5. Governing Law</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which E3 Strategic Ventures operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">6. Changes to Terms</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </div>
      </div>
    </main>
  );
}
