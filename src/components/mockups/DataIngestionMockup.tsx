export const DataIngestionMockup = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold text-lg">Data Sources</h3>
          <p className="text-white/50 text-sm">Live connections • Auto-sync every 15min</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-medium">
            ● LIVE
          </div>
        </div>
      </div>

      {/* Connection Cards Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Bank Connection */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white text-sm font-medium mb-1">Chase Business</div>
          <div className="text-white/40 text-xs">Last sync: 2 min ago</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 bg-green-500/10 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full" style={{width: '100%'}}></div>
            </div>
            <span className="text-green-400 text-xs font-medium">142 txns</span>
          </div>
        </div>

        {/* Email Connection */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white text-sm font-medium mb-1">Gmail</div>
          <div className="text-white/40 text-xs">Last sync: 5 min ago</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 bg-purple-500/10 rounded-full h-1">
              <div className="bg-purple-500 h-1 rounded-full" style={{width: '87%'}}></div>
            </div>
            <span className="text-purple-400 text-xs font-medium">34 invoices</span>
          </div>
        </div>

        {/* QuickBooks Connection */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white text-sm font-medium mb-1">QuickBooks Online</div>
          <div className="text-white/40 text-xs">Last sync: 1 min ago</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 bg-green-500/10 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full" style={{width: '100%'}}></div>
            </div>
            <span className="text-green-400 text-xs font-medium">Synced</span>
          </div>
        </div>

        {/* Stripe Connection */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-orange-500/50 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-white text-sm font-medium mb-1">Stripe</div>
          <div className="text-white/40 text-xs">Last sync: 3 min ago</div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 bg-indigo-500/10 rounded-full h-1">
              <div className="bg-indigo-500 h-1 rounded-full" style={{width: '95%'}}></div>
            </div>
            <span className="text-indigo-400 text-xs font-medium">78 payments</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
        <div className="text-white text-sm font-medium mb-3">Recent Activity</div>
        <div className="space-y-2">
          {[
            { source: 'Chase', action: 'Pulled 12 new transactions', time: '2m ago', color: 'blue' },
            { source: 'Gmail', action: 'Parsed invoice from Acme Corp', time: '5m ago', color: 'purple' },
            { source: 'Stripe', action: 'Synced payment $5,240', time: '8m ago', color: 'indigo' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500`}></div>
              <span className="text-white/60 flex-1">{item.source}</span>
              <span className="text-white/80">{item.action}</span>
              <span className="text-white/40">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
