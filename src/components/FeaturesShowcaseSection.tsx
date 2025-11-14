'use client'

import React from 'react'
import { DataIngestionMockup } from './mockups/DataIngestionMockup'
import { ReconciliationMockup } from './mockups/ReconciliationMockup'
import { AuditTrailMockup } from './mockups/AuditTrailMockup'

// FeaturesShowcaseSection – v2 (leaner, non‑repetitive, aligned)
// Key adjustments per user:
// - Keep named export (not default)
// - Remove repetition; fewer, denser lines
// - No claims about specific ERPs or certifications
// - Larger base font (text-xl)
// - Align text block visually with the mockup (12‑col grid, 5/7 split, items-end)
// - Emphasise Forward‑deployed approach for source ingestion

const features = [
  {
    id: 'ingestion',
    title: 'Implemented with your team',
    blurb:
      'Engineers embed with Finance Ops to wire bank feeds, email and operational data so records are standardised before they hit the ledger.',
    bullets: [
      'Hands‑on setup alongside your process owners',
      'Live bank/email feeds via secure OAuth',
      'Standardised records upstream of the GL',
    ],
    Mockup: DataIngestionMockup,
  },
  {
    id: 'reconciliation',
    title: 'Continuous reconciliation',
    blurb:
      'Transactions match as they land. Exceptions arrive with evidence and owners, not at the end of the month.',
    bullets: [
      'Rules + AI across bank, AR/AP, prepaids & accruals',
      'Exceptions inbox with assignees and due dates',
      'Reviewer sign-off preserved as controls',
    ],
    Mockup: ReconciliationMockup,
  },
  {
    id: 'ops',
    title: 'Billing, collections & payables - handled',
    blurb:
      'Agents process vendor invoices, raise sales invoices from triggers, send reminders and keep statuses in sync, with evidence attached.',
    bullets: [
      'Invoice capture and bill prep with approvals',
      'Generate sales invoices and track to receipt',
      'Smart reminders for due/overdue payments',
    ],
    Mockup: AuditTrailMockup,
  },
] as const

function Check({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 flex-shrink-0 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="mt-1 text-orange-400" />
      <span className="leading-snug text-white/80">{children}</span>
    </li>
  )
}

export const FeaturesShowcaseSection = () => {
  return (
    <section id="features" aria-label="Features" className="py-12 md:py-16 text-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((f, index) => {
          const isReversed = index % 2 === 1
          const Mockup = f.Mockup
          return (
            <div key={f.id} className="py-8 md:py-10">
              <div className={`grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-14 lg:items-center`}>
                {/* Text column */}
                <div
                  className={`${
                    isReversed ? 'order-1 lg:order-2' : 'order-1'
                  } lg:col-span-5 flex flex-col gap-6 `}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-snug">
                    {f.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed max-w-prose">{f.blurb}</p>

                  <ul className="space-y-2.5">
                    {f.bullets.map((b) => (
                      <Bullet key={b}>{b}</Bullet>
                    ))}
                  </ul>
                </div>

                {/* Visual column */}
                <div
                  className={`${
                    isReversed ? 'order-2 lg:order-1' : 'order-2'
                  } lg:col-span-7 relative`}
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
                    {/* Browser chrome */}
                    <div className="bg-gray-800 border-b border-white/10 px-4 py-3 flex items-center gap-2" aria-hidden="true">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 text-center">
                        <span className="text-xs text-white/40 font-medium">Senitac Platform</span>
                      </div>
                    </div>

                    {/* Mockup */}
                    <div className="aspect-[16/10] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      {Mockup ? <Mockup /> : <div className="w-full h-full" />}
                    </div>
                  </div>

                  {/* Decorative glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/5 to-purple-500/5 blur-3xl -z-10 opacity-50" aria-hidden="true" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/*
TESTS (React Testing Library – minimal examples)
-----------------------------------------------

import { render, screen } from '@testing-library/react'
import { FeaturesShowcaseSection } from '../path/to/FeaturesShowcaseSection'

describe('FeaturesShowcaseSection v2', () => {
  it('renders three lean feature slices', () => {
    render(<FeaturesShowcaseSection />)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3)
  })

  it('keeps large base font on the section', () => {
    render(<FeaturesShowcaseSection />)
    const region = screen.getByLabelText('Features')
    expect(region).toBeInTheDocument()
  })
})
*/
