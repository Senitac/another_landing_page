import { Menu, X, ChevronDown } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  const handleFeaturesClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault();
      const target = document.getElementById("solution");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      setSolutionsDropdownOpen(false);
    }
  };

  const solutionsBySize = [
    { name: "Startups", href: "/startups" },
    { name: "SMBs", href: "/smbs" },
    { name: "Mid-Market", href: "/mid-market" },
    { name: "Enterprise", href: "/enterprise" },
  ];

  const solutionsByIndustry = [
    { name: "E-Commerce", href: "/ecommerce" },
    { name: "SaaS", href: "/saas" },
    { name: "Construction", href: "/construction" },
    { name: "Professional Services", href: "/professional-services" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="container max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-0 transition-opacity hover:opacity-80">
              <img
                src="/senitac_logo_2048.png"
                alt="Senitac Logo"
                className="h-10 w-10"
              />
              <span className="text-2xl font-normal bg-gradient-primary bg-clip-text text-transparent">
                Senitac
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                className="text-sm font-normal text-white rounded-lg h-9 flex items-center gap-1 px-4 hover:bg-white/5 transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-black/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-2 gap-6 p-6">
                    {/* By Size */}
                    <div>
                      <h3 className="text-xs font-normal text-orange-400 uppercase tracking-wider mb-3">
                        By Size
                      </h3>
                      <ul className="space-y-2">
                        {solutionsBySize.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm font-light text-white/70 hover:text-white transition-colors block"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* By Industry */}
                    <div>
                      <h3 className="text-xs font-normal text-orange-400 uppercase tracking-wider mb-3">
                        By Industry
                      </h3>
                      <ul className="space-y-2">
                        {solutionsByIndustry.map((item) => (
                          <li key={item.name}>
                            <Link
                              to={item.href}
                              className="text-sm font-light text-white/70 hover:text-white transition-colors block"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* See All Solutions Link */}
                  <div className="border-t border-white/10 p-4 bg-white/5">
                    <Link
                      to="/#solution"
                      className="text-sm font-normal text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-2"
                      onClick={handleFeaturesClick}
                    >
                      See All Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="text-sm font-normal text-white rounded-lg h-9 flex items-center px-4 hover:bg-white/5 transition-colors"
            >
              About
            </Link>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 h-9 px-6 text-sm font-normal flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
            {/* Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-normal text-foreground rounded-lg hover:bg-white/5 transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileSolutionsOpen && (
                <div className="mt-2 ml-4 space-y-3 pb-2">
                  {/* By Size */}
                  <div>
                    <h4 className="text-xs font-normal text-orange-400 uppercase tracking-wider mb-2 px-4">
                      By Size
                    </h4>
                    {solutionsBySize.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-1.5 text-sm font-light text-white/70 hover:text-white transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* By Industry */}
                  <div>
                    <h4 className="text-xs font-normal text-orange-400 uppercase tracking-wider mb-2 px-4">
                      By Industry
                    </h4>
                    {solutionsByIndustry.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-1.5 text-sm font-light text-white/70 hover:text-white transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>

                  {/* See All */}
                  <div className="pt-2 border-t border-white/10">
                    <Link
                      to="/#solution"
                      className="block px-4 py-1.5 text-sm font-normal text-orange-400"
                      onClick={(event) => {
                        handleFeaturesClick(event);
                        setMobileMenuOpen(false);
                        setMobileSolutionsOpen(false);
                      }}
                    >
                      See All Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block px-4 py-2 text-sm font-normal text-foreground rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="https://calendly.com/nitanshu15/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-6 py-2 text-sm font-normal text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow"
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
