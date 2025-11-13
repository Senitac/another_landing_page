import { Calendar, Linkedin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Photo - Cinematic Crop */}
        <div className="mb-16">
          <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10">
            <div className="relative w-full" style={{ paddingBottom: '35%' }}>
              <img
                src="/founder_pic.JPG"
                alt="Senitac Founders"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Why We Founded */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Why we founded Senitac
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Problem */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">The Problem</h2>
              <div className="text-base text-white/70 leading-relaxed space-y-4">
                <p>
                  Large enterprises invest vast amounts of <span className="text-orange-400 font-medium">unproductive hours</span> into handling invoices and managing accounting workflows:
                </p>
                <div className="space-y-2 text-sm">
                  <p>• Sorting through hundreds of emails daily</p>
                  <p>• Keying invoice data into ERP systems</p>
                  <p>• Performing manual checks and coding</p>
                  <p>• Managing PO deviations by hand</p>
                  <p>• Chasing approvals across stakeholders</p>
                </div>
                <p>
                  A typical enterprise processes <span className="text-orange-400 font-medium">up to 100,000 invoices per year</span>, yet legacy tools leave teams bogged down with non-value-adding tasks.
                </p>
              </div>
            </div>

            {/* Right: Solution */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Solution</h2>
              <div className="text-base text-white/70 leading-relaxed space-y-4">
                <p>
                  By applying <span className="text-orange-400 font-medium">AI-driven automation</span>, we empower enterprises to reallocate time from repetitive work to high-impact activities.
                </p>
                <p>
                  We don't layer automation on top of messy data. We <span className="text-orange-400 font-medium">start at the source</span>—ingesting raw financial data and using AI agents to continuously reconcile it from day one.
                </p>
                <p>
                  The result: accountants focus on insights and strategy, not data entry. <span className="text-orange-400 font-medium">One accountant can handle 20× more clients</span> with our platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-white/70">
                Eliminate the manual chain in accounting. Where others optimize workflows, we remove them entirely—starting at the source with AI agents that turn raw data into audit-ready books automatically.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
              <p className="text-lg text-white/70">
                A world where <span className="text-orange-400 font-medium">autonomous AI agents handle accounting end-to-end</span>, freeing humans to focus on strategic financial decision-making rather than repetitive data processing.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Profiles */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            The Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nitanshu */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                  <img
                    src="/founder_pic.JPG"
                    alt="Nitanshu Limbachiya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">Nitanshu Limbachiya</h3>
                  <p className="text-white/60 text-sm mb-2">Co-Founder & CEO</p>
                  <a
                    href="https://www.linkedin.com/in/nitanshu-limbachiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Leads AI agent design and product. MSc Machine Learning at UCL. Went undercover at Fuse Energy to understand finance ops, where 60% of time went to manual data entry.
              </p>
            </div>

            {/* Sebastian */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                  <img
                    src="/founder_pic.JPG"
                    alt="Sebastian Sigurdarson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">Sebastian Sigurdarson</h3>
                  <p className="text-white/60 text-sm mb-2">Co-Founder & CTO</p>
                  <a
                    href="https://www.linkedin.com/in/sebastian-sigurdarson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Leads system architecture and infrastructure. MSc Machine Learning at UCL. Architecting the platform that lets one accountant handle 20× more clients through intelligent automation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://calendly.com/nitanshu15/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
          >
            Book a Demo
            <Calendar className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
