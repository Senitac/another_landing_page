import { Mail, Clock, AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Mail,
      title: "60% of staff time wasted on data entry",
      description:
        "Your finance team spends the majority of their day re-typing bank transactions, invoices, and receipts across disconnected systems. Strategic work gets pushed aside for endless copy-paste.",
    },
    {
      icon: Clock,
      title: "Months to close books and prepare for audit",
      description:
        "Month-end becomes month-long as teams manually match transactions, hunt for missing receipts, and chase evidence via back-and-forth emails. What should be automated takes weeks of tedious reconciliation.",
    },
    {
      icon: AlertCircle,
      title: "340K accountant shortage—yet manual work grows",
      description:
        "A global shortage of accountants means fewer hands to do more work. Yet the manual burden keeps growing with no end in sight. Without real-time visibility, finance teams are always reacting, never planning ahead.",
    },
  ];

  return (
    <section className="py-20 border-t border-b border-white/10 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-4 md:left-12 top-0 bottom-0 w-px bg-white/10"></div>
        <div className="absolute right-4 md:right-12 top-0 bottom-0 w-px bg-white/10"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mx-auto px-4 md:px-12 pb-12 border-b border-dashed border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              Your finance team is drowning in <span className="bg-gradient-primary bg-clip-text text-transparent">manual work</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Re-typing invoices. Chasing receipts. Reconciling across legacy systems. This is the reality for finance teams today—and traditional tools only shift the burden.
            </p>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="px-4 md:px-12 pt-12">
          <div className="max-w-6xl mx-auto space-y-0">
            {problems.map((problem, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
                  {/* Icon & Title Column */}
                  <div className="lg:col-span-1">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg flex items-center justify-center">
                        <problem.icon className="w-5 h-5 md:w-6 md:h-6 text-white/70" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white pt-2">
                        {problem.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-2">
                    <p className="text-sm md:text-base text-white/70 leading-relaxed pt-2">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Divider (except for last item) */}
                {index < problems.length - 1 && (
                  <div className="border-t border-dashed border-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
