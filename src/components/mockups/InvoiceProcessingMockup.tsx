// InvoiceProcessingMockup - Procure-to-Pay visualization
// Light theme mockup showing invoice processing dashboard

export const InvoiceProcessingMockup = () => {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="800" height="500" fill="#F8F9FA" />

      {/* Header */}
      <text x="32" y="48" fontSize="24" fontWeight="600" fill="#0F172A">
        Invoice Processing
      </text>
      <text x="32" y="76" fontSize="14" fill="#64748B">
        Real-time processing status
      </text>

      {/* Metrics Cards */}
      <g>
        {/* Card 1 - Processed Today */}
        <rect x="32" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="132" fontSize="14" fill="#64748B">Processed Today</text>
        <text x="52" y="166" fontSize="32" fontWeight="700" fill="#10B981">247</text>
        <text x="52" y="188" fontSize="12" fill="#10B981">↑ 18% from yesterday</text>

        {/* Card 2 - Pending Review */}
        <rect x="268" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="288" y="132" fontSize="14" fill="#64748B">Pending Review</text>
        <text x="288" y="166" fontSize="32" fontWeight="700" fill="#F97316">12</text>
        <text x="288" y="188" fontSize="12" fill="#64748B">Requires approval</text>

        {/* Card 3 - Avg Processing Time */}
        <rect x="504" y="100" width="220" height="100" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="524" y="132" fontSize="14" fill="#64748B">Avg Processing</text>
        <text x="524" y="166" fontSize="32" fontWeight="700" fill="#3B82F6">2.3m</text>
        <text x="524" y="188" fontSize="12" fill="#10B981">↓ 40% faster</text>
      </g>

      {/* Recent Invoices Table */}
      <g>
        <rect x="32" y="220" width="736" height="260" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        <text x="52" y="252" fontSize="16" fontWeight="600" fill="#0F172A">Recent Invoices</text>

        {/* Table Header */}
        <rect x="52" y="268" width="696" height="32" fill="#F8F9FA" rx="6" />
        <text x="68" y="290" fontSize="12" fontWeight="600" fill="#64748B">VENDOR</text>
        <text x="268" y="290" fontSize="12" fontWeight="600" fill="#64748B">AMOUNT</text>
        <text x="388" y="290" fontSize="12" fontWeight="600" fill="#64748B">STATUS</text>
        <text x="548" y="290" fontSize="12" fontWeight="600" fill="#64748B">PROCESSED</text>

        {/* Row 1 */}
        <text x="68" y="328" fontSize="14" fill="#0F172A">Acme Supplies Co.</text>
        <text x="268" y="328" fontSize="14" fontWeight="600" fill="#0F172A">$12,450.00</text>
        <rect x="388" y="314" width="80" height="24" rx="12" fill="#D1FAE5" />
        <text x="400" y="330" fontSize="12" fontWeight="500" fill="#059669">Approved</text>
        <text x="548" y="328" fontSize="14" fill="#64748B">2 min ago</text>

        {/* Row 2 */}
        <text x="68" y="368" fontSize="14" fill="#0F172A">CloudTech Services</text>
        <text x="268" y="368" fontSize="14" fontWeight="600" fill="#0F172A">$8,220.50</text>
        <rect x="388" y="354" width="80" height="24" rx="12" fill="#FEF3C7" />
        <text x="400" y="370" fontSize="12" fontWeight="500" fill="#D97706">Pending</text>
        <text x="548" y="368" fontSize="14" fill="#64748B">5 min ago</text>

        {/* Row 3 */}
        <text x="68" y="408" fontSize="14" fill="#0F172A">Global Logistics Inc.</text>
        <text x="268" y="408" fontSize="14" fontWeight="600" fill="#0F172A">$15,890.00</text>
        <rect x="388" y="394" width="80" height="24" rx="12" fill="#D1FAE5" />
        <text x="400" y="410" fontSize="12" fontWeight="500" fill="#059669">Approved</text>
        <text x="548" y="408" fontSize="14" fill="#64748B">12 min ago</text>

        {/* Row 4 */}
        <text x="68" y="448" fontSize="14" fill="#0F172A">OfficeMax Supplies</text>
        <text x="268" y="448" fontSize="14" fontWeight="600" fill="#0F172A">$3,125.75</text>
        <rect x="388" y="434" width="80" height="24" rx="12" fill="#D1FAE5" />
        <text x="400" y="450" fontSize="12" fontWeight="500" fill="#059669">Approved</text>
        <text x="548" y="448" fontSize="14" fill="#64748B">18 min ago</text>
      </g>
    </svg>
  );
};
