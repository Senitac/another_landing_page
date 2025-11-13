import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Senitac?",
    answer:
      "Senitac is a full-stack AI accountancy platform. Our AI agents pull raw data from your bank, email, invoices, and spreadsheets, then automatically categorize, reconcile, and maintain your books in real-time.",
  },
  {
    question: "How is Senitac different from QuickBooks or Xero?",
    answer:
      "Traditional accounting software requires manual data entry and monthly reconciliation. Senitac's AI agents do the work for you—pulling data directly from sources, categorizing automatically, and reconciling continuously. We eliminate the manual work entirely.",
  },
  {
    question: "What systems does Senitac integrate with?",
    answer:
      "We connect to major banks (Chase, Wells Fargo, Bank of America, etc.), accounting platforms (QuickBooks, Xero, NetSuite), payment processors (Stripe, PayPal), email (Gmail, Outlook), and can ingest data from spreadsheets. If you use a system we don't support yet, let us know.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most companies are up and running within 1-2 weeks. We handle OAuth connections for your bank and other systems, initial data sync, and our AI learns your chart of accounts. No complex implementation required.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use bank-level 256-bit encryption for all data in transit and at rest, are SOC 2 Type II certified, and fully GDPR compliant. Your data is never used to train public models. We take security and privacy extremely seriously.",
  },
  {
    question: "What does Senitac cost?",
    answer:
      "Pricing is based on transaction volume and company size. We offer flexible plans for startups, SMBs, and enterprises. Contact us for a customized quote based on your specific needs.",
  },
  {
    question: "Do I still need an accountant?",
    answer:
      "Senitac handles the tedious, repetitive work (data entry, reconciliation, categorization). Your accountant can focus on higher-value work like strategy, tax planning, financial advisory, and complex compliance. Many of our customers reduce their accounting headcount or shift resources to more strategic roles.",
  },
  {
    question: "How accurate is the AI?",
    answer:
      "Our AI achieves 99%+ accuracy on transaction categorization and matching. Any uncertain items are automatically flagged for human review. Over time, the AI learns your business patterns and becomes even more accurate.",
  },
];

const FAQAccordionItem = ({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
      >
        <span className="text-base md:text-lg font-medium text-white pr-8">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-white/60 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 relative">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Questions?</span> Answered
          </h2>
          <p className="text-lg text-white/70">
            Everything you need to know
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-white/60 mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-lg transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
};
