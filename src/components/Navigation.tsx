import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border h-20">
      <div className="container max-w-5xl mx-auto w-full flex items-center justify-between h-full px-6 md:px-12">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent focus-visible:outline-none focus-visible:ring-0 transition-colors">
            Senitac
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/about"
            className="text-sm font-medium text-foreground rounded-full h-8 flex items-center px-3 hover:text-foreground/80 transition-colors focus-visible:outline-none focus-visible:ring-0"
          >
            About Us
          </a>
          <a
            href="https://calendly.com/nitanshu15/30min" // Replace with your actual Calendly link
            target="_blank"
            rel="noopener noreferrer"
            className="h-8 px-4 text-sm font-medium flex items-center bg-primary text-primary-foreground rounded-full shadow-elegant hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
};