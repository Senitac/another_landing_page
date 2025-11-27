// BudgetVarianceMockup - FP&A visualization
// Light theme mockup showing budget variance analysis

export const BudgetVarianceMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Budget vs Actual
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        Q1 2025 Performance
      </text>

      {/* Summary Cards */}
      <g>
        {/* Total Budget */}
        <rect x="32" y="100" width="170" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="13" fill="#64748B">Total Budget</text>
        <text x="52" y="164" fontSize="28" fontWeight="700" fill="#0F172A">$5.2M</text>
        <text x="52" y="186" fontSize="11" fill="#64748B">Q1 allocation</text>

        {/* Actual Spend */}
        <rect x="218" y="100" width="170" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="238" y="132" fontSize="13" fill="#64748B">Actual Spend</text>
        <text x="238" y="164" fontSize="28" fontWeight="700" fill="#3B82F6">$4.8M</text>
        <text x="238" y="186" fontSize="11" fill="#10B981">92% utilized</text>

        {/* Variance */}
        <rect x="404" y="100" width="170" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="424" y="132" fontSize="13" fill="#64748B">Variance</text>
        <text x="424" y="164" fontSize="28" fontWeight="700" fill="#10B981">-$400K</text>
        <text x="424" y="186" fontSize="11" fill="#10B981">Under budget</text>

        {/* Forecast */}
        <rect x="590" y="100" width="170" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="610" y="132" fontSize="13" fill="#64748B">EOQ Forecast</text>
        <text x="610" y="164" fontSize="28" fontWeight="700" fill="#0F172A">$5.1M</text>
        <text x="610" y="186" fontSize="11" fill="#10B981">On track</text>
      </g>

      {/* Department Breakdown */}
      <g>
        <rect x="32" y="220" width="460" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Department Breakdown</text>

        {/* Table Header */}
        <text x="68" y="288" fontSize="11" fontWeight="600" fill="#64748B">DEPARTMENT</text>
        <text x="268" y="288" fontSize="11" fontWeight="600" fill="#64748B">BUDGET</text>
        <text x="368" y="288" fontSize="11" fontWeight="600" fill="#64748B">ACTUAL</text>
        <text x="438" y="288" fontSize="11" fontWeight="600" fill="#64748B">VAR</text>

        {/* Row 1 - Engineering */}
        <text x="68" y="318" fontSize="13" fill="#0F172A">Engineering</text>
        <text x="268" y="318" fontSize="13" fill="#0F172A">$2.1M</text>
        <text x="368" y="318" fontSize="13" fill="#0F172A">$2.0M</text>
        <text x="438" y="318" fontSize="13" fill="#10B981">-5%</text>
        <rect x="68" y="326" width="390" height="4" rx="2" fill="#E2E8F0" />
        <rect x="68" y="326" width="372" height="4" rx="2" fill="#10B981" />

        {/* Row 2 - Sales & Marketing */}
        <text x="68" y="358" fontSize="13" fill="#0F172A">Sales & Marketing</text>
        <text x="268" y="358" fontSize="13" fill="#0F172A">$1.5M</text>
        <text x="368" y="358" fontSize="13" fill="#0F172A">$1.6M</text>
        <text x="438" y="358" fontSize="13" fill="#EF4444">+7%</text>
        <rect x="68" y="366" width="390" height="4" rx="2" fill="#E2E8F0" />
        <rect x="68" y="366" width="415" height="4" rx="2" fill="#EF4444" />

        {/* Row 3 - Operations */}
        <text x="68" y="398" fontSize="13" fill="#0F172A">Operations</text>
        <text x="268" y="398" fontSize="13" fill="#0F172A">$900K</text>
        <text x="368" y="398" fontSize="13" fill="#0F172A">$850K</text>
        <text x="438" y="398" fontSize="13" fill="#10B981">-6%</text>
        <rect x="68" y="406" width="390" height="4" rx="2" fill="#E2E8F0" />
        <rect x="68" y="406" width="368" height="4" rx="2" fill="#10B981" />

        {/* Row 4 - G&A */}
        <text x="68" y="438" fontSize="13" fill="#0F172A">G&A</text>
        <text x="268" y="438" fontSize="13" fill="#0F172A">$700K</text>
        <text x="368" y="438" fontSize="13" fill="#0F172A">$680K</text>
        <text x="438" y="438" fontSize="13" fill="#10B981">-3%</text>
        <rect x="68" y="446" width="390" height="4" rx="2" fill="#E2E8F0" />
        <rect x="68" y="446" width="378" height="4" rx="2" fill="#10B981" />
      </g>

      {/* Trend Chart */}
      <g>
        <rect x="508" y="220" width="260" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="528" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Monthly Trend</text>

        {/* Grid */}
        <line x1="548" y1="310" x2="740" y2="310" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="548" y1="360" x2="740" y2="360" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="548" y1="410" x2="740" y2="410" stroke="#E2E8F0" strokeWidth="1" />

        {/* Budget line (dashed) */}
        <line x1="560" y1="340" x2="728" y2="340" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 4" />

        {/* Actual line */}
        <path
          d="M 560 390 L 608 370 L 656 355 L 704 345"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Data points */}
        <circle cx="560" cy="390" r="4" fill="#3B82F6" />
        <circle cx="608" cy="370" r="4" fill="#3B82F6" />
        <circle cx="656" cy="355" r="4" fill="#3B82F6" />
        <circle cx="704" cy="345" r="4" fill="#3B82F6" />

        {/* X-axis */}
        <text x="553" y="445" fontSize="11" fill="#64748B">Jan</text>
        <text x="599" y="445" fontSize="11" fill="#64748B">Feb</text>
        <text x="648" y="445" fontSize="11" fill="#64748B">Mar</text>
        <text x="697" y="445" fontSize="11" fill="#64748B">Apr</text>

        {/* Legend */}
        <line x1="548" y1="280" x2="568" y2="280" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 2" />
        <text x="575" y="284" fontSize="11" fill="#64748B">Budget</text>
        <line x1="635" y1="280" x2="655" y2="280" stroke="#3B82F6" strokeWidth="2" />
        <text x="662" y="284" fontSize="11" fill="#64748B">Actual</text>
      </g>
    </svg>
  );
};
