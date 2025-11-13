export const AuditTrailMockup = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold text-lg">Transaction Evidence Graph</h3>
          <p className="text-white/50 text-sm">AWS Services • $2,450.00 • Nov 8, 2024</p>
        </div>
        <button className="px-4 py-2 bg-orange-500/20 border border-orange-500/40 rounded-lg text-orange-400 text-sm font-medium hover:bg-orange-500/30 transition-all">
          Export Audit Package
        </button>
      </div>

      {/* Evidence Chain Visualization */}
      <div className="relative mb-6">
        {/* Vertical Timeline */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-blue-500 to-green-500"></div>

        {/* Evidence Items */}
        <div className="space-y-4 relative">
          {/* Bank Transaction */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center flex-shrink-0 relative z-10">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm mb-1">Bank Statement</div>
                  <div className="text-white/50 text-xs">Chase Business Checking • ACH Debit</div>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
                  VERIFIED
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                <div>
                  <span className="text-white/40">Date:</span>
                  <span className="text-white/80 ml-2">Nov 8, 2024 14:23 EST</span>
                </div>
                <div>
                  <span className="text-white/40">Amount:</span>
                  <span className="text-white/80 ml-2">$2,450.00</span>
                </div>
                <div>
                  <span className="text-white/40">Ref:</span>
                  <span className="text-white/80 ml-2">TXN-8472934</span>
                </div>
                <div>
                  <span className="text-white/40">Hash:</span>
                  <span className="text-white/80 ml-2 font-mono">a4c2...9f3d</span>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center flex-shrink-0 relative z-10">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm mb-1">Invoice PDF</div>
                  <div className="text-white/50 text-xs">aws-invoice-nov-2024.pdf</div>
                </div>
                <button className="text-blue-400 text-xs hover:text-blue-300 font-medium">
                  View PDF →
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                <div>
                  <span className="text-white/40">Received:</span>
                  <span className="text-white/80 ml-2">Nov 7, 2024</span>
                </div>
                <div>
                  <span className="text-white/40">Source:</span>
                  <span className="text-white/80 ml-2">invoices@aws.com</span>
                </div>
                <div>
                  <span className="text-white/40">Invoice #:</span>
                  <span className="text-white/80 ml-2">AWS-2024-11-0847</span>
                </div>
                <div>
                  <span className="text-white/40">Due:</span>
                  <span className="text-white/80 ml-2">Nov 30, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* GL Entry */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center flex-shrink-0 relative z-10">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm mb-1">General Ledger Entry</div>
                  <div className="text-white/50 text-xs">QuickBooks Online</div>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
                  POSTED
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xs">
                <div>
                  <span className="text-white/40">Account:</span>
                  <span className="text-white/80 ml-2">6000 - Infrastructure</span>
                </div>
                <div>
                  <span className="text-white/40">Debit:</span>
                  <span className="text-white/80 ml-2">$2,450.00</span>
                </div>
                <div>
                  <span className="text-white/40">Posted by:</span>
                  <span className="text-white/80 ml-2">AI Agent (CPA reviewed)</span>
                </div>
                <div>
                  <span className="text-white/40">Date:</span>
                  <span className="text-white/80 ml-2">Nov 8, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* CPA Review */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center flex-shrink-0 relative z-10">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm mb-1">CPA Review</div>
                  <div className="text-white/50 text-xs">Sarah Chen, Licensed CPA</div>
                </div>
                <div className="px-2 py-1 rounded bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
                  APPROVED
                </div>
              </div>
              <div className="mt-3 text-xs text-white/70">
                "Verified invoice matches bank transaction. Categorization correct. Evidence chain complete."
              </div>
              <div className="mt-2 text-xs text-white/40">
                Reviewed: Nov 8, 2024 15:45 EST
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Badges */}
      <div className="flex gap-3 mt-6">
        <div className="flex-1 bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center">
          <div className="text-green-400 font-semibold text-sm">✓ SOC 2 Compliant</div>
        </div>
        <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 text-center">
          <div className="text-blue-400 font-semibold text-sm">✓ Audit Ready</div>
        </div>
        <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-lg p-3 text-center">
          <div className="text-purple-400 font-semibold text-sm">✓ Evidence Chain</div>
        </div>
      </div>
    </div>
  );
};
