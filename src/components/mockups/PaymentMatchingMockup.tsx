// PaymentMatchingMockup - Order-to-Cash visualization
// Light theme mockup showing payment matching dashboard

export const PaymentMatchingMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Payment Matching
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        Automated reconciliation
      </text>

      {/* Metrics Row */}
      <g>
        {/* Card 1 */}
        <rect x="32" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="14" fill="#64748B">Matched Today</text>
        <text x="52" y="166" fontSize="32" fontWeight="700" fill="#10B981">$842K</text>
        <text x="52" y="188" fontSize="12" fill="#10B981">189 transactions</text>

        {/* Card 2 */}
        <rect x="268" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="288" y="132" fontSize="14" fill="#64748B">Unmatched</text>
        <text x="288" y="166" fontSize="32" fontWeight="700" fill="#F97316">$23K</text>
        <text x="288" y="188" fontSize="12" fill="#64748B">8 transactions</text>

        {/* Card 3 */}
        <rect x="504" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="524" y="132" fontSize="14" fill="#64748B">Match Rate</text>
        <text x="524" y="166" fontSize="32" fontWeight="700" fill="#3B82F6">97.3%</text>
        <text x="524" y="188" fontSize="12" fill="#10B981">↑ 2.1% this week</text>
      </g>

      {/* Activity Feed */}
      <g>
        <rect x="32" y="220" width="480" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Recent Activity</text>

        {/* Activity 1 */}
        <circle cx="68" cy="288" r="6" fill="#10B981" />
        <text x="88" y="292" fontSize="14" fill="#0F172A">Payment matched automatically</text>
        <text x="88" y="310" fontSize="12" fill="#64748B">Customer: Acme Corp - $45,890</text>

        {/* Activity 2 */}
        <circle cx="68" cy="348" r="6" fill="#10B981" />
        <text x="88" y="352" fontSize="14" fill="#0F172A">Payment matched automatically</text>
        <text x="88" y="370" fontSize="12" fill="#64748B">Customer: TechStart Inc - $12,500</text>

        {/* Activity 3 */}
        <circle cx="68" cy="408" r="6" fill="#F97316" />
        <text x="88" y="412" fontSize="14" fill="#0F172A">Payment requires review</text>
        <text x="88" y="430" fontSize="12" fill="#64748B">Customer: Global Services - $8,750</text>

        {/* Activity 4 */}
        <circle cx="68" cy="456" r="6" fill="#10B981" />
        <text x="88" y="460" fontSize="14" fill="#0F172A">Payment matched automatically</text>
        <text x="88" y="478" fontSize="12" fill="#64748B">Customer: BuildRight Co - $31,200</text>
      </g>

      {/* Chart */}
      <g>
        <rect x="528" y="220" width="240" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="548" y="252" fontSize="16" fontWeight="600" fill="#0F172A">This Week</text>

        {/* Simple bar chart */}
        <g>
          {/* Mon */}
          <rect x="558" y="380" width="24" height="70" rx="4" fill="#3B82F6" opacity="0.8" />
          <text x="560" y="462" fontSize="10" fill="#64748B">Mon</text>

          {/* Tue */}
          <rect x="598" y="360" width="24" height="90" rx="4" fill="#3B82F6" opacity="0.8" />
          <text x="600" y="462" fontSize="10" fill="#64748B">Tue</text>

          {/* Wed */}
          <rect x="638" y="340" width="24" height="110" rx="4" fill="#3B82F6" opacity="0.9" />
          <text x="640" y="462" fontSize="10" fill="#64748B">Wed</text>

          {/* Thu */}
          <rect x="678" y="320" width="24" height="130" rx="4" fill="#3B82F6" />
          <text x="680" y="462" fontSize="10" fill="#64748B">Thu</text>

          {/* Fri */}
          <rect x="718" y="370" width="24" height="80" rx="4" fill="#3B82F6" opacity="0.6" />
          <text x="720" y="462" fontSize="10" fill="#64748B">Fri</text>
        </g>

        <text x="548" y="290" fontSize="12" fill="#64748B">Daily Match Volume</text>
      </g>
    </svg>
  );
};
