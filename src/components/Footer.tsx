export const Footer = () => {
  return (
    <footer className="relative py-12 bg-gradient-hero animate-gradient-slow overflow-hidden">
      {/* Background glow effects for consistency */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-700/20 rounded-full blur-[200px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-black/40 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
          Senitac
        </div>
        <p className="text-sm text-white/70 mb-6">
          Building the future of accounting with AI
        </p>
        <p className="text-xs text-white/50">
          © 2025 Senitac. All rights reserved.
        </p>
      </div>
    </footer>
  );
};