import { Calendar } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why we founded Senitac
          </h1>

          <div className="text-base md:text-lg text-white/70 leading-relaxed space-y-6">
            <p>
              Large enterprises still invest vast amounts of <strong className="text-white">unproductive hours</strong> into handling invoices and managing accounting workflows. Despite their scale, these organizations remain trapped in repetitive, manual processes—such as:
            </p>

            <div className="pl-4 space-y-2">
              <p>Sorting through hundreds of emails and documents daily</p>
              <p>Keying invoice data into ERP systems</p>
              <p>Performing manual checks and account coding</p>
              <p>Managing purchase order deviations by hand</p>
              <p>Chasing approvals across multiple stakeholders</p>
            </div>

            <p>
              A typical <strong className="text-white">enterprise processes up to 100,000 incoming invoices each year</strong>, yet current legacy tools leave accounting teams bogged down with these non-value-adding tasks. We founded Senitac to change that.
            </p>

            <p>
              By applying <strong className="text-white">AI-driven automation</strong>, we empower enterprises to <strong className="text-white">reallocate time from repetitive, manual work to high-impact, value-adding activities</strong>—freeing accountants to focus on insights, strategy, and decision-making rather than data entry.
            </p>
          </div>

          <div className="mt-8">
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

        {/* Team Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
            <img
              src="/founder_pic.JPG"
              alt="Nitanshu Limbachiya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
            <img
              src="/founder_pic.JPG"
              alt="Sebastian Sigurdarson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Founder Names */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Nitanshu Limbachiya</h3>
            <p className="text-sm text-white/60">Co-Founder & CEO</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Sebastian Sigurdarson</h3>
            <p className="text-sm text-white/60">Co-Founder & CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};
