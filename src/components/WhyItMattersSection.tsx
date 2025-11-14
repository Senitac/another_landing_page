// WhyItMattersSection
// - Default export (fixes preview/build systems that expect a default component)
// - Client component to avoid SSR/JSX build edge cases
// - Added data-testid hooks for tests
// - Tightened a11y: aria-hidden="true" on decorative icons

export const WhyItMattersSection = () => {
  return (
    <section
      id="why-it-matters"
      data-testid="why-it-matters"
      className="relative py-10 md:py-14"
    >
      {/* rails */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-white/10"
          aria-hidden="true"
        />
        <div
          className="absolute right-4 md:right-12 top-0 bottom-0 w-px bg-white/10"
          aria-hidden="true"
        />
      </div>

      <div className="mx-4 md:mx-8 relative">
        {/* Header */}
        <div className="px-4 md:px-10 pb-6 md:pb-8 border-b border-white/10">
          <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mx-auto max-w-4xl tracking-tight">
              <span className="text-orange-400">Source‑first</span> Accounting 
            </h2>
            <p className="text-xl md:text-lg text-white/70 max-w-3xl leading-relaxed mx-auto mt-3">
              Clean data in → clean books out. Finance teams choose Senitac because we connect upstream, reconcile continuously, chase missing payments, and keep every entry audit‑ready.
            </p>

            {/* Outcomes row */}
            <div
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 text-left"
              data-testid="outcomes"
            >
              {[
                'Faster month‑end close',
                'Fewer exceptions to chase',
                'Real‑time data observability',
                'Audit package in one click',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 justify-center sm:justify-start"
                  data-testid="outcome-item"
                >
                  <svg
                    className="h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-white/80 lg:whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="px-4 md:px-10 pt-8 md:pt-9">
          <div className="max-w-6xl mx-auto space-y-0">
            {/* 1. Source-first ingestion */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-white/10">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    Forward-deployed approach
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-10">
                <p className="text-xl text-orange-400 mb-3 font-medium">
                  We connect directly to banks, email, and operational systems.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Most tools sit downstream and wait for exports. Senitac pulls transactions, invoices and receipts the moment they appear, and standardises them before they hit the ledger.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-white/10" />

            {/* 2. Automation + humans */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-white/10">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    Accountant-in-the-loop
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-10">
                <p className="text-xl text-orange-400 mb-3 font-medium">
                  Automated categorisation, matching and reconciliation. Chartered accountants review actions.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  All agent actions land in an approval queue with evidence attached. Our ACA/ACCA reviewers approve, maintain controls and sign off where required.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-white/10" />

            {/* 3. Audit-ready evidence graph */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-white/10">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    Audit‑ready evidence graph
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-10">
                <p className="text-xl text-orange-400 mb-3 font-medium">
                  Every journal line is linked to its source: bank line → invoice/receipt → GL entry → reviewer sign‑off.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Evidence is captured automatically from email, storage and systems. Export a complete audit package in one click with immutable trails and agent logs.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-white/10" />

            {/* 4. Controls & approvals (new) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-white/10">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v8m-4-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H9l-4 4v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                    Controls, approvals & compliance
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-10">
                <p className="text-xl text-orange-400 mb-3 font-medium">
                  Built‑in approval flows, vendor checks and policy guardrails, without leaving the close.
                </p>
                <p className="text-xl text-white/70 leading-relaxed">
                  Configure who can approve what, enforce document completeness, and keep VAT/Making Tax Digital and AML/KYC evidence alongside the entries they support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
TESTS (React Testing Library examples)
-------------------------------------
These are examples you can place in a __tests__/WhyItMattersSection.test.tsx file.

import { render, screen } from '@testing-library/react'
import WhyItMattersSection from '../path/to/WhyItMattersSection'

describe('WhyItMattersSection', () => {
  it('renders the headline', () => {
    render(<WhyItMattersSection />)
    expect(screen.getByText('Source‑first accounting automation')).toBeInTheDocument()
  })

  it('shows exactly 4 outcome items', () => {
    render(<WhyItMattersSection />)
    const items = screen.getAllByTestId('outcome-item')
    expect(items).toHaveLength(4)
  })

  it('is audit-friendly: contains evidence graph wording', () => {
    render(<WhyItMattersSection />)
    expect(
      screen.getByText(/bank line/i)
    ).toBeInTheDocument()
  })
})
*/
