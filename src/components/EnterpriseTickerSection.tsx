'use client'

import React from 'react'

// EnterpriseTickerSection – clean build, larger card fonts, divider line, UK/EU posture
// - Named export preserved
// - Structure: headline → ticker → four cards
// - KPIs kept (transactions/invoices/bills/uptime) + UK/EU items
// - No SOC claims; Chartered accountants wording

export const EnterpriseTickerSection = () => {
  const stats = [
    { label: 'UPTIME', value: '99.99%', status: 'LIVE' },
    { label: 'ENCRYPTION', value: 'AES‑256 / TLS 1.2+', status: 'ACTIVE' },
    { label: 'TRANSACTIONS', value: '1.2M/day', status: '+15%' },
    { label: 'INVOICES', value: '34k/day', status: 'PROCESSED' },
    { label: 'BILLS', value: '21k/day', status: 'PROCESSED' },
    { label: 'ACCOUNTANTS', value: 'CHARTERED', status: 'IN‑LOOP' },
    { label: 'GDPR / UK GDPR', value: 'Processor', status: 'TODAY' },
    { label: 'DATA TRANSFERS', value: 'SCCs / IDTA', status: 'SUPPORTED' },
    { label: 'DPA', value: 'Available', status: 'TODAY' },
    { label: 'BACKUPS', value: 'Automated', status: 'ENABLED' },
  ] as const

  return (
    <section className="py-5 sm:py-6 relative overflow-hidden text-sm sm:text-base" aria-label="Security & Compliance">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="bg-[#222224] rounded-lg px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-6 overflow-hidden">
          {/* Heading */}
          <div className="mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug tracking-tight text-white">
              Enterprise-grade security.
              <br />
              Accountant‑backed accuracy.
            </h2>
          </div>

          {/* Scrolling Ticker */}
          <div className="relative h-9 sm:h-10 mb-5 sm:mb-7 -mx-4 sm:-mx-5 lg:-mx-6 overflow-hidden bg-zinc-900/50 border-y border-zinc-800">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll-left whitespace-nowrap">
                {[...stats, ...stats].map((stat, index) => (
                  <div key={`${stat.label}-${index}`} className="flex items-center px-5">
                    <div className="flex items-center space-x-2 mr-6">
                      <span className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em]">
                        {stat.label}
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-white font-medium">
                        {stat.value}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs text-emerald-400">
                        {stat.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subheading */}
          <div className="mb-6 sm:mb-7">
            <h3 className="text-base sm:text-lg font-medium text-white">Why businesses trust Senitac</h3>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {[{
              icon: '🏛️',
              title: 'Accountants in the loop',
              desc: 'AI handles routine work. ACA/ACCA reviewers maintain controls and sign off where required.',
            },
            {
              icon: '🔒',
              title: 'Encryption & access',
              desc: 'Your data is never used to train public models. We take security and privacy extremely seriously.',
            },
            {
              icon: '⚡',
              title: 'Real‑time reconciliation',
              desc: 'Continuous matching & categorisation with owner queues and evidence attached.',
            },
            {
              icon: '🧾',
              title: 'Data protection & AML',
              desc: 'We act as a data processor; DPA available. HMRC AML supervision — in progress.',
            }].map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="rounded-lg p-3 sm:p-4 bg-[#2A2A2C] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <h4 className="mt-3 text-base font-semibold text-white tracking-tight">
                  {feature.title}
                </h4>
                <div className="mt-2 w-full h-px bg-white/10" aria-hidden="true" />
                <p className="mt-2 text-sm sm:text-base text-white/80 leading-snug">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
      `}</style>
    </section>
  )
}

/*
TESTS (React Testing Library – smoke)
------------------------------------
import { render, screen } from '@testing-library/react'
import { EnterpriseTickerSection } from '../path/to/EnterpriseTickerSection'

describe('EnterpriseTickerSection', () => {
  it('renders headline and four cards', () => {
    render(<EnterpriseTickerSection />)
    expect(screen.getByText(/Enterprise‑grade security/i)).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 4 }).length).toBe(4)
  })

  it('renders KPI ticker values', () => {
    render(<EnterpriseTickerSection />)
    expect(screen.getAllByText(/TRANSACTIONS|INVOICES|BILLS/i).length).toBeGreaterThan(0)
  })
})
*/
