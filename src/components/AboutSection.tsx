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
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-8 text-center">
            Why we are building <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Senitac</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Problem */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-light text-white mb-4">The Problem</h2>
              <div className="text-xl text-white leading-relaxed space-y-4">
                <p>
                  Finance teams spend most of their time on <span className="text-orange-400 font-light">repetitive tasks, not strategic decisions</span>.
                </p>

                <p>
                  We saw this firsthand: entire teams stuck chasing invoices, reconciling across disconnected systems, and manually categorizing transactions. Month-end close takes days or weeks when it should take hours.
                </p>
                <p>
                  The result: slow decision-making, delayed closes, and burned-out finance leaders.
                </p>
              </div>
            </div>

            {/* Right: Solution */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h2 className="text-2xl font-light text-white mb-4">Our Solution</h2>
              <div className="text-xl text-white leading-relaxed space-y-4">
                <p>
                  Senitac builds <span className="text-orange-400 font-light">modular AI agents</span> that integrate directly with your existing systems and handle the repetitive work. Finance teams get to focus on analysis, planning, and growth.
                </p>
                <p>
                  We don't force platform replacements. We <span className="text-orange-400 font-light">implement with your team</span>, integrate with your stack (ERP, banking, tools), and custom-build agents for your specific workflows.
                </p>
                <p>
                  The result: <span className="text-orange-400 font-light">faster closes, cleaner data, and finance teams doing strategic work</span> instead of data entry.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="w-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-10">
              <div className="max-w-4xl mx-auto text-center space-y-4">
                <h2 className="text-3xl font-normal text-orange-400">Our Mission</h2>
                <p className="text-xl text-white leading-relaxed">
                  Transform finance operations with AI agents that handle the mundane so teams can focus on what matters. Every company deserves <span className="text-orange-400">real-time financial visibility</span> and the ability to make strategic decisions without drowning in manual work.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Profiles */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-orange-400 text-center mb-12">
            The Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nitanshu */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                  <img
                    src="/Nitanshu_headshot.png"
                    alt="Nitanshu Limbachiya"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-white">Nitanshu Limbachiya</h3>
                  <p className="text-white/60 font-light text-xl mb-2">Co-Founder & CEO</p>
                  <a
                    href="https://www.linkedin.com/in/nitanshu-limbachiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-xl font-light text-white/70 leading-relaxed">
                At Senitac, Nitanshu owns product and agent design. Before founding Senitac, he pursued an MSc in Machine Learning at UCL, conducted multi-agent systems research with DARK Lab and Meta, and worked with finance teams to redesign month-end workflows.
              </p>
            </div>

            {/* Sebastian */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                  <img
                    src="/Seb_headshot.png"
                    alt="Sebastian Sigurdarson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-white">Sebastian Sigurdarson</h3>
                  <p className="text-white/60 font-light text-xl mb-2">Co-Founder & CTO</p>
                  <a                    href="https://www.linkedin.com/in/sebastiansigur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="text-xl font-light text-white/70 leading-relaxed">
                Sebastian leads tech at Senitac, from infra to idempotent posting, and audit-ready reconciliation. Before founding Senitac, he pursued an MSc in Machine Learning at UCL, and he was in R&D at Cosine Therapeutics, where he shipped ML-driven data systems used in production.
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-normal rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
          >
            Book a Demo
            <Calendar className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
