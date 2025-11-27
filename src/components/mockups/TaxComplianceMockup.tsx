// TaxComplianceMockup - Tax & Compliance visualization
// Light theme mockup showing tax compliance dashboard

export const TaxComplianceMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Tax Compliance
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        Multi-jurisdiction tracking
      </text>

      {/* Status Cards */}
      <g>
        {/* Card 1 */}
        <rect x="32" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="14" fill="#64748B">Sales Tax Collected</text>
        <text x="52" y="166" fontSize="32" fontWeight="700" fill="#0F172A">$127K</text>
        <text x="52" y="188" fontSize="12" fill="#64748B">This quarter</text>

        {/* Card 2 */}
        <rect x="268" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="288" y="132" fontSize="14" fill="#64748B">Filings Due</text>
        <text x="288" y="166" fontSize="32" fontWeight="700" fill="#F97316">3</text>
        <text x="288" y="188" fontSize="12" fill="#64748B">Next 30 days</text>

        {/* Card 3 */}
        <rect x="504" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="524" y="132" fontSize="14" fill="#64748B">Compliance Rate</text>
        <text x="524" y="166" fontSize="32" fontWeight="700" fill="#10B981">100%</text>
        <text x="524" y="188" fontSize="12" fill="#10B981">All filings on time</text>
      </g>

      {/* Jurisdictions Table */}
      <g>
        <rect x="32" y="220" width="480" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Active Jurisdictions</text>

        {/* Table Header */}
        <rect x="52" y="268" width="440" height="32" fill="#F8F9FA" rx="6" />
        <text x="68" y="290" fontSize="12" fontWeight="600" fill="#64748B">JURISDICTION</text>
        <text x="248" y="290" fontSize="12" fontWeight="600" fill="#64748B">COLLECTED</text>
        <text x="368" y="290" fontSize="12" fontWeight="600" fill="#64748B">STATUS</text>

        {/* Row 1 - California */}
        <text x="68" y="328" fontSize="14" fill="#0F172A">California</text>
        <text x="248" y="328" fontSize="14" fontWeight="600" fill="#0F172A">$48,230</text>
        <rect x="368" y="314" width="100" height="24" rx="12" fill="#D1FAE5" />
        <text x="380" y="330" fontSize="12" fontWeight="500" fill="#059669">Filed Q4</text>

        {/* Row 2 - Texas */}
        <text x="68" y="368" fontSize="14" fill="#0F172A">Texas</text>
        <text x="248" y="368" fontSize="14" fontWeight="600" fill="#0F172A">$31,580</text>
        <rect x="368" y="354" width="100" height="24" rx="12" fill="#FEF3C7" />
        <text x="380" y="370" fontSize="12" fontWeight="500" fill="#D97706">Due Jan 31</text>

        {/* Row 3 - New York */}
        <text x="68" y="408" fontSize="14" fill="#0F172A">New York</text>
        <text x="248" y="408" fontSize="14" fontWeight="600" fill="#0F172A">$27,450</text>
        <rect x="368" y="394" width="100" height="24" rx="12" fill="#FEF3C7" />
        <text x="380" y="410" fontSize="12" fontWeight="500" fill="#D97706">Due Feb 15</text>

        {/* Row 4 - Florida */}
        <text x="68" y="448" fontSize="14" fill="#0F172A">Florida</text>
        <text x="248" y="448" fontSize="14" fontWeight="600" fill="#0F172A">$19,840</text>
        <rect x="368" y="434" width="100" height="24" rx="12" fill="#D1FAE5" />
        <text x="380" y="450" fontSize="12" fontWeight="500" fill="#059669">Filed Q4</text>
      </g>

      {/* Audit Trail */}
      <g>
        <rect x="528" y="220" width="240" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="548" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Audit Trail</text>

        {/* Trail items */}
        <g>
          {/* Item 1 */}
          <circle cx="564" cy="288" r="4" fill="#10B981" />
          <line x1="564" y1="292" x2="564" y2="318" stroke="#E2E8F0" strokeWidth="2" />
          <text x="578" y="292" fontSize="13" fill="#0F172A">CA Q4 Filed</text>
          <text x="578" y="308" fontSize="11" fill="#64748B">Jan 15, 2025</text>

          {/* Item 2 */}
          <circle cx="564" cy="328" r="4" fill="#10B981" />
          <line x1="564" y1="332" x2="564" y2="358" stroke="#E2E8F0" strokeWidth="2" />
          <text x="578" y="332" fontSize="13" fill="#0F172A">NY Q4 Calculated</text>
          <text x="578" y="348" fontSize="11" fill="#64748B">Jan 12, 2025</text>

          {/* Item 3 */}
          <circle cx="564" cy="368" r="4" fill="#10B981" />
          <line x1="564" y1="372" x2="564" y2="398" stroke="#E2E8F0" strokeWidth="2" />
          <text x="578" y="372" fontSize="13" fill="#0F172A">TX Q4 Calculated</text>
          <text x="578" y="388" fontSize="11" fill="#64748B">Jan 10, 2025</text>

          {/* Item 4 */}
          <circle cx="564" cy="408" r="4" fill="#10B981" />
          <line x1="564" y1="412" x2="564" y2="438" stroke="#E2E8F0" strokeWidth="2" />
          <text x="578" y="412" fontSize="13" fill="#0F172A">FL Q4 Filed</text>
          <text x="578" y="428" fontSize="11" fill="#64748B">Jan 8, 2025</text>

          {/* Item 5 */}
          <circle cx="564" cy="448" r="4" fill="#94A3B8" />
          <text x="578" y="452" fontSize="13" fill="#0F172A">Q3 Review Complete</text>
          <text x="578" y="468" fontSize="11" fill="#64748B">Dec 20, 2024</text>
        </g>
      </g>
    </svg>
  );
};
