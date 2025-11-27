// MonthEndCloseMockup - Record-to-Report visualization
// Light theme mockup showing month-end close progress

export const MonthEndCloseMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Month-End Close
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        December 2024 - Day 3 of 10
      </text>

      {/* Progress Overview */}
      <g>
        {/* Overall Progress Card */}
        <rect x="32" y="100" width="480" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="14" fill="#64748B">Overall Progress</text>
        <text x="52" y="168" fontSize="36" fontWeight="700" fill="#3B82F6">68%</text>
        <text x="52" y="196" fontSize="12" fill="#10B981">↑ 12% ahead of schedule</text>

        {/* Progress bar */}
        <rect x="180" y="140" width="310" height="12" rx="6" fill="#E2E8F0" />
        <rect x="180" y="140" width="211" height="12" rx="6" fill="#3B82F6" />
        <text x="180" y="172" fontSize="11" fill="#64748B">17 of 25 tasks complete</text>

        {/* Status Cards */}
        <rect x="528" y="100" width="113" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="548" y="132" fontSize="13" fill="#64748B">On Track</text>
        <text x="548" y="162" fontSize="32" fontWeight="700" fill="#10B981">14</text>
        <text x="548" y="186" fontSize="11" fill="#64748B">tasks</text>

        <rect x="651" y="100" width="113" height="120" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="671" y="132" fontSize="13" fill="#64748B">At Risk</text>
        <text x="671" y="162" fontSize="32" fontWeight="700" fill="#F97316">3</text>
        <text x="671" y="186" fontSize="11" fill="#64748B">tasks</text>
      </g>

      {/* Task Checklist */}
      <g>
        <rect x="32" y="240" width="460" height="240" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="272" fontSize="16" fontWeight="600" fill="#0F172A">Close Tasks</text>

        {/* Task 1 - Complete */}
        <circle cx="68" cy="308" r="10" fill="#10B981" />
        <path d="M 64 308 L 67 311 L 72 305" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="92" y="312" fontSize="14" fill="#0F172A">Bank reconciliation</text>
        <text x="388" y="312" fontSize="12" fill="#10B981">Complete</text>

        {/* Task 2 - Complete */}
        <circle cx="68" cy="348" r="10" fill="#10B981" />
        <path d="M 64 348 L 67 351 L 72 345" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="92" y="352" fontSize="14" fill="#0F172A">AP reconciliation</text>
        <text x="388" y="352" fontSize="12" fill="#10B981">Complete</text>

        {/* Task 3 - In Progress */}
        <circle cx="68" cy="388" r="10" fill="#3B82F6" />
        <circle cx="68" cy="388" r="4" fill="#FFFFFF" />
        <text x="92" y="392" fontSize="14" fill="#0F172A">AR aging review</text>
        <text x="388" y="392" fontSize="12" fill="#3B82F6">In Progress</text>

        {/* Task 4 - In Progress */}
        <circle cx="68" cy="428" r="10" fill="#3B82F6" />
        <circle cx="68" cy="428" r="4" fill="#FFFFFF" />
        <text x="92" y="432" fontSize="14" fill="#0F172A">Accrual adjustments</text>
        <text x="388" y="432" fontSize="12" fill="#3B82F6">In Progress</text>

        {/* Task 5 - Pending */}
        <circle cx="68" cy="458" r="10" fill="none" stroke="#CBD5E1" strokeWidth="2" />
        <text x="92" y="462" fontSize="14" fill="#64748B">Financial statements</text>
        <text x="388" y="462" fontSize="12" fill="#64748B">Pending</text>
      </g>

      {/* Timeline */}
      <g>
        <rect x="508" y="240" width="260" height="240" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="528" y="272" fontSize="16" fontWeight="600" fill="#0F172A">Timeline</text>

        {/* Timeline visualization */}
        <g>
          {/* Day 1 */}
          <circle cx="638" cy="310" r="8" fill="#10B981" />
          <text x="588" y="314" fontSize="12" fill="#64748B">Day 1</text>
          <text x="658" y="314" fontSize="12" fill="#0F172A">Initial recon</text>

          {/* Day 2 */}
          <circle cx="638" cy="350" r="8" fill="#10B981" />
          <line x1="638" y1="318" x2="638" y2="342" stroke="#CBD5E1" strokeWidth="2" />
          <text x="588" y="354" fontSize="12" fill="#64748B">Day 2</text>
          <text x="658" y="354" fontSize="12" fill="#0F172A">AP/AR review</text>

          {/* Day 3 - Current */}
          <circle cx="638" cy="390" r="10" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" />
          <circle cx="638" cy="390" r="4" fill="#FFFFFF" />
          <line x1="638" y1="358" x2="638" y2="380" stroke="#CBD5E1" strokeWidth="2" />
          <text x="588" y="394" fontSize="12" fontWeight="600" fill="#3B82F6">Day 3</text>
          <text x="658" y="394" fontSize="12" fontWeight="600" fill="#3B82F6">Today</text>

          {/* Day 5 */}
          <circle cx="638" cy="430" r="8" fill="none" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="638" y1="400" x2="638" y2="422" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <text x="588" y="434" fontSize="12" fill="#94A3B8">Day 5</text>
          <text x="658" y="434" fontSize="12" fill="#94A3B8">Final review</text>

          {/* Day 7 - Target */}
          <circle cx="638" cy="460" r="8" fill="none" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="638" y1="438" x2="638" y2="452" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
          <text x="588" y="464" fontSize="12" fill="#94A3B8">Day 7</text>
          <text x="658" y="464" fontSize="12" fontWeight="600" fill="#94A3B8">Close target</text>
        </g>
      </g>
    </svg>
  );
};
