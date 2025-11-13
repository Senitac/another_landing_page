export const WhyItMattersSection = () => {
  return (
    <section className="bg-white border-t border-b border-gray-200 relative py-12 md:py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-gray-200"></div>
        <div className="absolute right-4 md:right-12 top-0 bottom-0 w-px bg-gray-200"></div>
      </div>

      <div className="mx-4 md:mx-12 relative">
        {/* Header */}
        <div className="px-4 md:px-12 pb-8 md:pb-10 border-b border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight mx-auto max-w-4xl">
              Most platforms <span className="italic">layer on top</span> of messy data. We start at the source.
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed mx-auto">
              The accounting AI market is crowded. Here's why forward-thinking CFOs choose Senitac.
            </p>
          </div>
        </div>

        {/* Three Key Differentiators */}
        <div className="px-4 md:px-12 pt-8 md:pt-10">
          <div className="max-w-6xl mx-auto space-y-0">
            {/* 1. Data Ingestion */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-gray-300">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Forward-deployed at the source
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-12">
                <p className="text-base text-gray-600 mb-3 font-medium">
                  Competitors ask you to upload CSVs. We connect directly to banks, email, and systems.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Most tools sit downstream—waiting for you to manually export and import files. Senitac agents live upstream, pulling transactions, invoices, and receipts the moment they appear. No spreadsheets. No manual uploads. Just real-time data flowing from source to ledger.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300"></div>

            {/* 2. AI + CPAs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-gray-300">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    AI + Licensed CPAs in the loop
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-12">
                <p className="text-base text-gray-600 mb-3 font-medium">
                  Pure AI is fast but risky. Pure human is accurate but slow. We combine both.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our AI handles the repetitive work—categorization, matching, reconciliation. But licensed CPAs review anomalies, month-end close, and audit trails. You get the speed of automation with the confidence of human oversight. Every transaction has an evidence chain back to the source.
                </p>
              </div>
            </div>

            <div className="border-t border-dashed border-gray-300"></div>

            {/* 3. Full-Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
              <div className="lg:col-span-1 lg:pr-12 lg:border-r lg:border-dashed lg:border-gray-300">
                <div className="flex gap-4 items-center mb-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    Built for enterprises, not freelancers
                  </h3>
                </div>
              </div>
              <div className="lg:col-span-2 lg:pl-12">
                <p className="text-base text-gray-600 mb-3 font-medium">
                  Most accounting AI targets freelancers. We're built for multi-entity, multi-currency operations.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Senitac scales from seed-stage startups to Series C companies with complex accounting needs. Multiple entities? Foreign exchange? Revenue recognition? We handle it. One accountant managing 20× more clients isn't a dream—it's our daily operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
