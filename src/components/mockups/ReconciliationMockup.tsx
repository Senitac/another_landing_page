export const ReconciliationMockup = () => {
  const transactions = [
    { id: 1, date: '11/08', vendor: 'AWS Services', amount: 2450, category: 'Infrastructure', confidence: 99, status: 'matched' },
    { id: 2, date: '11/09', vendor: 'Office Depot', amount: 342, category: 'Office Supplies', confidence: 98, status: 'matched' },
    { id: 3, date: '11/09', vendor: 'Salesforce', amount: 15000, category: 'Software', confidence: 100, status: 'matched' },
    { id: 4, date: '11/10', vendor: 'Unknown Transfer', amount: 8500, category: 'Uncat.', confidence: 65, status: 'review' },
    { id: 5, date: '11/11', vendor: 'Google Workspace', amount: 720, category: 'Software', confidence: 99, status: 'matched' },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold text-lg">November Reconciliation</h3>
          <p className="text-white/50 text-sm">Real-time • Auto-updating</p>
        </div>
        <div className="flex gap-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">98.6%</div>
            <div className="text-xs text-white/50">Auto-matched</div>
          </div>
          <div className="w-px bg-white/10"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">4</div>
            <div className="text-xs text-white/50">For review</div>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="space-y-2">
        {transactions.map((txn) => (
          <div
            key={txn.id}
            className={`bg-white/5 backdrop-blur-sm border rounded-lg p-3 transition-all ${
              txn.status === 'review'
                ? 'border-orange-500/40 bg-orange-500/5'
                : 'border-white/10 hover:border-green-500/40'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Status Indicator */}
              <div className="flex-shrink-0">
                {txn.status === 'matched' ? (
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* Transaction Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white text-sm font-medium truncate">{txn.vendor}</span>
                  <span className="text-white/40 text-xs">{txn.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {txn.category}
                  </span>
                  <span className="text-white/50 text-xs">
                    {txn.confidence}% confidence
                  </span>
                </div>
              </div>

              {/* Amount */}
              <div className="text-right">
                <div className="text-white font-semibold">${txn.amount.toLocaleString()}</div>
                {txn.status === 'review' && (
                  <button className="mt-1 text-xs text-orange-400 hover:text-orange-300 font-medium">
                    Review →
                  </button>
                )}
              </div>
            </div>

            {/* AI Suggestion for review items */}
            {txn.status === 'review' && (
              <div className="mt-3 pt-3 border-t border-orange-500/20">
                <div className="flex items-center gap-2 text-xs">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"/>
                  </svg>
                  <span className="text-orange-300">
                    AI suggests: <span className="font-medium">Capital Investment</span> or <span className="font-medium">Consulting Fees</span>
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-white">142</div>
          <div className="text-xs text-white/50">Processed</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-white">3.2h</div>
          <div className="text-xs text-white/50">Time saved</div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
          <div className="text-lg font-bold text-green-400">$0</div>
          <div className="text-xs text-white/50">Discrepancy</div>
        </div>
      </div>
    </div>
  );
};
