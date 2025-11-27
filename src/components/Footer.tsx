export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12" aria-label="Footer">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/senitac_logo_2048.png"
              alt="Senitac logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-normal bg-gradient-primary bg-clip-text text-transparent">
              Senitac
            </span>
          </div>

          <p className="text-sm font-light text-white/60">
            Building the future of finance
          </p>

          {/* Contact actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:accountants@senitac.co"
              className="text-sm font-light text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
            >
              accountants@senitac.co
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-white/80 hover:text-white transition-colors underline decoration-white/20 underline-offset-4"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs font-light text-white/60 text-center">
            © {year} Senitac Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
