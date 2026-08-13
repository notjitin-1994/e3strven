import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - E3 Strategic Ventures",
  description: "Privacy policy for E3 Strategic Ventures.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="font-display text-4xl md:text-6xl mb-8">Privacy Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-8 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="font-display text-2xl mt-12 mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We collect information that you provide directly to us when you fill out a form, request support, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We use the information we collect to provide, maintain, and improve our services, communicate with you, monitor and analyze trends and usage, and personalize your experience on our website.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">3. Information Sharing</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">4. Data Security</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee its absolute security.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">5. Cookies</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.
          </p>

          <h2 className="font-display text-2xl mt-12 mb-4">6. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have any questions about this Privacy Policy, please contact us through our website contact form or directly via email.
          </p>
        </div>
      </div>
    </main>
  );
}
