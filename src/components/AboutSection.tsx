import { Calendar, Linkedin } from "lucide-react";
import { useImagePreloader } from "../hooks/useImagePreloader";

const imageUrl = "/founder_pic.JPG";

export const AboutSection = () => {
  const isImageLoaded = useImagePreloader(imageUrl);

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 pt-12">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 mb-4">
            About us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Accounting's final chapter <br/>will be written by <span className="bg-gradient-primary bg-clip-text text-transparent">AI agents</span>
          </h1>
        </div>

        {/* Founders Photo & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            {isImageLoaded ? (
              <img
                src={imageUrl}
                alt="Senitac Founders"
                className="w-full h-full rounded-2xl shadow-2xl object-cover border border-white/10 hover:border-orange-500/50 transition-all duration-300"
                style={{ minHeight: '400px', objectPosition: 'center' }}
              />
            ) : (
              <div className="w-full h-full min-h-[400px] rounded-2xl bg-white/5 animate-pulse" />
            )}
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="text-5xl font-bold text-white mb-2">20×</div>
              <div className="text-lg text-white/70">
                more clients per accountant with AI automation
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-white/90 leading-relaxed">
                <strong className="text-white">Our mission:</strong> eliminate the manual chain in accounting.
                Where others optimize workflows, we remove them entirely—starting at the source with
                AI agents that turn raw data into audit-ready books automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
            What once required teams and training now happens <span className="bg-gradient-primary bg-clip-text text-transparent">in real-time, autonomously</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-8">
            We're building the infrastructure for AI agents to handle accounting end-to-end. Our platform
            ingests raw financial data from every source—banks, emails, invoices, contracts, ERPs—and maintains
            a continuously-reconciled evidence graph. No more manual data entry. No more month-end scrambles.
            Just clean books, always current, audit-ready on demand.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Accounting's predictable yet intricate nature makes it prime for AI transformation. We're
            not just automating tasks—we're reimagining how financial data flows through organizations.
            <strong className="text-white"> One accountant can now handle 20× more clients</strong> because
            the agents do all the tedious work while humans focus on insights and strategy.
          </p>
        </div>

        {/* Why We Started Section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Why we started Senitac
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              We picked this problem after watching a friend at a Big 4 accounting firm waste an entire
              afternoon chasing missing receipts and re-typing invoices into legacy systems. Then we saw
              it again working at Fuse Energy, where <strong className="text-white">60% of staff time went
              to repetitive data entry</strong>.
            </p>
            <p>
              This is the industry norm. Accountants are drowning in manual work that shouldn't exist.
              There's a <strong className="text-white">global shortage of accountants</strong>, and it's
              getting worse. Meanwhile, businesses have no automated way to monitor and maintain all their
              data streams in real-time.
            </p>
            <p>
              Most accounting software layers automation on top of messy, manually-entered data. That's
              backwards. Our <strong className="text-white">forward-deployed approach starts at the source</strong>—ingesting
              raw financial data and using AI agents to continuously reconcile it from day one. The foundation
              stays trustworthy, so bookkeeping, tax, and audit become simple outputs instead of months-long projects.
            </p>
            <p className="text-white pt-4">
              <strong>We're chasing this problem for the next decade.</strong> The future of accounting
              isn't better software—it's autonomous agents that eliminate the manual chain entirely.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12">
            Founder Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nitanshu */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Nitanshu Limbachiya</h3>
                  <p className="text-white/60">Co-Founder & CEO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/nitanshu-limbachiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Nitanshu leads AI agent design and product at Senitac. Met Sebastian on day one of their MSc
                in Machine Learning at UCL. Went undercover at Fuse Energy to understand finance ops firsthand,
                where he saw 60% of time wasted on manual data entry. Now obsessed with building agents that
                eliminate the manual chain in accounting.
              </p>
            </div>

            {/* Sebastian */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Sebastian Sigurdarson</h3>
                  <p className="text-white/60">Co-Founder & CTO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/sebastian-sigurdarson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Sebastian leads system architecture and infrastructure at Senitac. Met Nitanshu at UCL and
                they instantly clicked over AI projects—including building AI agents that create other AI agents
                with evolutionary algorithms. Now architecting the platform that lets one accountant handle 20×
                more clients through intelligent automation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Interested in AI accounting?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Whether you're a customer, partner, accountant, or just curious—we'd love to connect.
            </p>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow"
            >
              Let's Talk
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
