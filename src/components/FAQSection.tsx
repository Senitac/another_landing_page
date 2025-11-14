'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is Senitac?',
    answer:
      "Senitac is a full-stack AI accountancy platform. Our AI agents pull raw data from your bank, email, invoices, and spreadsheets, then automatically categorize, reconcile, and maintain your books in real-time. All with an expert accountant-in-the-loop.",
  },
  {
    question: 'How is Senitac different from QuickBooks or Xero?',
    answer:
      "Traditional accounting software requires manual data entry and monthly reconciliation. Senitac's AI agents do the work for you, pulling data directly from sources, categorizing automatically, and reconciling continuously. We eliminate the manual work entirely.",
  },
  {
    question: 'What do you integrate with today?',
    answer:
      "Today: bank feeds (where OAuth is available), email (Gmail/Outlook), cloud storage (Drive/Dropbox), and spreadsheets/CSV. Need a specific system? We can scope it during onboarding.",
  },
  {
    question: 'How long does setup take?',
    answer:
      "We onboard alongside your team. Typical steps: connect bank/email, configure your chart of accounts, and backfill recent activity. Most companies are up and running within 2-3 weeks.",
  },
  {
    question: 'Is my data secure?',
    answer:
      "Yes. We protect your data when it’s sent and when it’s stored, limit access to authorised roles, and keep automatic backups. We don’t use your data to train public models.",
  },
  {
    question: 'Do I still need an accountant?',
    answer:
      "Yes. Senitac removes the repetitive work, and a chartered accountant (ACA/ACCA) reviews exceptions and signs off where required. Your accountant (or ours, if engaged) handles statutory filings and tax.",
  },
  {
    question: 'What does Senitac cost?',
    answer:
      "Pricing is based on transaction volume and complexity. Startups and SMB plans are available; contact us and we’ll scope a plan that fits your workload.",
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
        <span className="text-lg md:text-xl font-medium text-white pr-8">{item.question}</span>
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
            <p className="text-lg md:text-base text-white/80 leading-relaxed">{item.answer}</p>
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Questions?</span> Answered
          </h2>
          <p className="text-base md:text-lg text-white/70">Everything you need to know</p>
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
          <p className="text-lg md:text-xl text-white/70 mb-4">Still have questions? We're here to help.</p>
          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-medium text-xl rounded-lg transition-all duration-300"
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
