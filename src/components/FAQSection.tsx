'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'How is this different from Ramp, Brex, or other spend management platforms?',
    answer:
      "Ramp and Brex are card-first platforms that require you to switch payment methods and lock you into their ecosystem. Senitac integrates with your existing systems—your current ERP, banking relationships, and workflows stay intact. We're implementation partners, not a platform vendor forcing replacement.",
  },
  {
    question: 'Do we need to replace our existing accounting system?',
    answer:
      "No. Senitac agents integrate with your current ERP (QuickBooks, Xero, NetSuite, SAP, etc.). We connect upstream to banks, payment processors, and operational systems, then feed clean, reconciled data into your existing ledger. No rip-and-replace required.",
  },
  {
    question: 'What systems do you integrate with?',
    answer:
      "We connect to major ERPs (QuickBooks, Xero, NetSuite, SAP), banking systems via secure OAuth, payment processors (Stripe, PayPal), and operational tools. Industry-specific integrations include Shopify, Amazon Seller Central (e-commerce), construction management software, and time-tracking systems for professional services. Custom integrations are built during implementation.",
  },
  {
    question: 'How long does implementation take?',
    answer:
      "Average implementation is 3-4 weeks from kickoff to first agents live. We follow a three-phase approach: (1) Assess operations and map workflows, (2) Build and configure agents with your team, (3) Deploy with phased rollout and monitoring. Timeline varies based on complexity and number of agents.",
  },
  {
    question: 'How do you ensure accuracy? What if an agent makes a mistake?',
    answer:
      "Every agent action goes through human-in-the-loop oversight. Chartered accountants (ACA/ACCA) review exceptions, approve transactions above thresholds, and maintain controls. All actions have full audit trails with source evidence. You maintain final approval rights, and agents learn from corrections to improve accuracy over time.",
  },
  {
    question: 'Can I pick specific agents or do I need the full platform?',
    answer:
      "You can pick specific agents that address your pain points. Many clients start with 2-3 agents (e.g., Invoice Processing, Bank Reconciliation, Cash Forecasting) and expand from there. We also offer pre-configured industry templates (e-commerce, SaaS, construction, professional services) that bundle commonly needed agents for your vertical.",
  },
  {
    question: 'Is my financial data secure?',
    answer:
      "Yes. We use bank-grade encryption for data in transit and at rest, and provide immutable audit trails. Your data stays in your control—we never train models on proprietary client data or share it with third parties. All integrations use secure OAuth, and access is limited by role-based permissions.",
  },
  {
    question: 'What does pricing look like?',
    answer:
      "Pricing is based on which agents you deploy, transaction volume, and implementation scope. Most finance teams see ROI within the first quarter through time savings and error reduction. Contact us for a custom quote based on your specific operations—we'll map your workflows and provide transparent pricing before any commitment.",
  },
]

const FAQAccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-4 px-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors group"
      >
        <span className="text-lg md:text-xl font-normal text-white pr-8">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-white/60 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-4">
            <p className="text-lg md:text-base font-light text-white/80 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 relative">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Questions?</span> Answered
          </h2>
          <p className="text-base md:text-lg font-light text-white/70">Everything you need to know</p>
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
        <div className="text-center mt-10">
          <p className="text-lg md:text-xl font-light text-white/70 mb-4">Still have questions? We're here to help.</p>
          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-normal text-xl rounded-lg transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

/*
TESTS (React Testing Library – examples)
---------------------------------------
import { render, screen, fireEvent } from '@testing-library/react'
import { FAQSection } from '../path/to/FAQSection'

describe('FAQSection (clean claims)', () => {
  it('renders the FAQ header', () => {
    render(<FAQSection />)
    expect(screen.getByText(/Questions\?/i)).toBeInTheDocument()
  })
  it('opens and closes an item', () => {
    render(<FAQSection />)
    const firstQ = screen.getByText('What is Senitac?')
    fireEvent.click(firstQ)
    expect(screen.getByText(/source‑first accounting platform/i)).toBeInTheDocument()
  })
})
*/
