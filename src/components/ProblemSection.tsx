import { Mail, Clock, AlertCircle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      icon: Mail,
      title: "Manual data entry, everywhere",
      description:
        "Bank transactions, invoices, emails, spreadsheets—accountants re-type the same data across multiple systems. Hours wasted on copy-paste work that should be automatic.",
    },
    {
      icon: Clock,
      title: "Reconciliation takes days, not hours",
      description:
        "Month-end close is a painful manual process of matching transactions, chasing receipts, and fixing errors. What should take hours stretches into days of tedious work.",
    },
    {
      icon: AlertCircle,
      title: "Disconnected systems create blind spots",
      description:
        "Without real-time visibility across bank accounts, ERPs, and invoices, finance teams are always looking in the rearview mirror. By the time they see problems, it's too late.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mx-auto px-4 md:px-12 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 leading-tight">
              Finance teams waste <span className="bg-gradient-primary bg-clip-text text-transparent">hundreds of hours</span>
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              Traditional tools just shift the burden—they don't solve it.
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
                  <div className="my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
