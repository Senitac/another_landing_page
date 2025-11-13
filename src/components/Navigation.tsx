import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-0 transition-colors">
              Senitac
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#features"
              className="text-sm font-medium text-foreground rounded-lg h-9 flex items-center px-4 hover:bg-white/5 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-foreground rounded-lg h-9 flex items-center px-4 hover:bg-white/5 transition-colors"
            >
              How It Works
            </a>
            <a
              href="/about"
              className="text-sm font-medium text-foreground rounded-lg h-9 flex items-center px-4 hover:bg-white/5 transition-colors"
            >
              About
            </a>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 h-9 px-6 text-sm font-semibold flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#features"
              className="block px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="/about"
              className="block px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-6 py-2 text-sm font-semibold text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};