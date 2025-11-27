// CashForecastMockup - Treasury visualization
// Light theme mockup showing cash forecasting dashboard

export const CashForecastMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Cash Forecast
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        90-day projection
      </text>

      {/* Current Position */}
      <g>
        <rect x="32" y="100" width="340" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="14" fill="#64748B">Current Cash Position</text>
        <text x="52" y="176" fontSize="40" fontWeight="700" fill="#0F172A">$2.4M</text>
        <text x="52" y="202" fontSize="12" fill="#10B981">↑ $340K from last week</text>
      </g>

      {/* Quick Stats */}
      <g>
        {/* Inflows */}
        <rect x="388" y="100" width="180" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="408" y="132" fontSize="14" fill="#64748B">Expected Inflows</text>
        <text x="408" y="168" fontSize="28" fontWeight="700" fill="#10B981">$1.8M</text>
        <text x="408" y="192" fontSize="12" fill="#64748B">Next 30 days</text>

        {/* Outflows */}
        <rect x="584" y="100" width="180" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="604" y="132" fontSize="14" fill="#64748B">Expected Outflows</text>
        <text x="604" y="168" fontSize="28" fontWeight="700" fill="#EF4444">$1.2M</text>
        <text x="604" y="192" fontSize="12" fill="#64748B">Next 30 days</text>
      </g>

      {/* Forecast Chart */}
      <g>
        <rect x="32" y="240" width="736" height="240" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="272" fontSize="16" fontWeight="600" fill="#0F172A">90-Day Cash Forecast</text>

        {/* Chart grid lines */}
        <line x1="80" y1="310" x2="740" y2="310" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="360" x2="740" y2="360" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="80" y1="410" x2="740" y2="410" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

        {/* Y-axis labels */}
        <text x="55" y="315" fontSize="11" fill="#64748B">$3M</text>
        <text x="55" y="365" fontSize="11" fill="#64748B">$2M</text>
        <text x="55" y="415" fontSize="11" fill="#64748B">$1M</text>

        {/* Forecast line - upward trend */}
        <path
          d="M 80 390 L 200 370 L 320 350 L 440 335 L 560 325 L 680 310"
          stroke="#3B82F6"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Confidence band */}
        <path
          d="M 80 390 L 200 370 L 320 350 L 440 335 L 560 325 L 680 310 L 680 330 L 560 345 L 440 355 L 320 370 L 200 390 L 80 410 Z"
          fill="#3B82F6"
          opacity="0.1"
        />

        {/* Data points */}
        <circle cx="80" cy="390" r="5" fill="#3B82F6" />
        <circle cx="200" cy="370" r="5" fill="#3B82F6" />
        <circle cx="320" cy="350" r="5" fill="#3B82F6" />
        <circle cx="440" cy="335" r="5" fill="#3B82F6" />
        <circle cx="560" cy="325" r="5" fill="#3B82F6" />
        <circle cx="680" cy="310" r="5" fill="#3B82F6" />

        {/* X-axis labels */}
        <text x="70" y="450" fontSize="11" fill="#64748B">Today</text>
        <text x="185" y="450" fontSize="11" fill="#64748B">Week 2</text>
        <text x="305" y="450" fontSize="11" fill="#64748B">Week 4</text>
        <text x="425" y="450" fontSize="11" fill="#64748B">Week 6</text>
        <text x="545" y="450" fontSize="11" fill="#64748B">Week 8</text>
        <text x="660" y="450" fontSize="11" fill="#64748B">Week 12</text>

        {/* Legend */}
        <circle cx="600" cy="272" r="4" fill="#3B82F6" />
        <text x="612" y="276" fontSize="12" fill="#64748B">Projected Balance</text>
      </g>
    </svg>
  );
};
