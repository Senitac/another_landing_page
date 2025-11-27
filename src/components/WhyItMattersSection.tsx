// PainPointsSection (formerly WhyItMattersSection)
// Simplified to paragraph + 3 stats format

export const WhyItMattersSection = () => {
  return (
    <section
      id="pain-points"
      data-testid="pain-points"
      className="relative py-16 md:py-20"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mx-auto max-w-4xl tracking-tight mb-6">
            Finance Teams Are <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Drowning in Manual Work</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-white/70 max-w-3xl leading-relaxed mx-auto">
            Your team spends most of their time on data entry, chasing receipts, and reconciling transactions. Month-end takes weeks. Mistakes happen. Talent is impossible to find. The old playbook of hiring more people doesn't work anymore.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-normal text-orange-400 mb-2">60%</div>
            <p className="text-base md:text-lg font-light text-white/70">Time wasted on manual work</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-normal text-orange-400 mb-2">10+ days</div>
            <p className="text-base md:text-lg font-light text-white/70">Average close cycle</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-normal text-orange-400 mb-2">23%</div>
            <p className="text-base md:text-lg font-light text-white/70">Error rate in manual entry</p>
          </div>
        </div>
      </div>
    </section>
  );
};
