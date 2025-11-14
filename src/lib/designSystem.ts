/**
 * Senitac Design System
 * Centralized design tokens for consistent UI across the platform
 */

export const designSystem = {
  // Typography
  typography: {
    heading: {
      h1: "text-5xl lg:text-6xl font-bold",
      h2: "text-3xl md:text-4xl lg:text-5xl font-semibold",
      h3: "text-xl md:text-2xl font-semibold",
      h4: "text-lg md:text-xl font-semibold",
    },
    body: {
      large: "text-lg",
      base: "text-base",
      small: "text-sm",
      xs: "text-xs",
    },
  },

  // Colors
  colors: {
    text: {
      primary: "text-white",
      secondary: "text-white/80",
      tertiary: "text-white/70",
      muted: "text-white/60",
      subtle: "text-white/40",
    },
    gradient: {
      primary: "bg-gradient-primary bg-clip-text text-transparent",
      orange: "bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent",
    },
  },

  // Spacing
  spacing: {
    section: {
      py: "py-20",
      pySmall: "py-12 md:py-16",
    },
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    containerSmall: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
    gap: {
      small: "gap-4",
      medium: "gap-8",
      large: "gap-12",
    },
  },

  // Components
  components: {
    badge: {
      base: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-300 font-semibold uppercase tracking-wider",
      withPing: (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
        </>
      ),
    },
    card: {
      base: "p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300",
      glass: "bg-white/5 backdrop-blur-sm border border-white/10",
    },
    button: {
      primary: "px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-glow",
      secondary: "px-6 py-3 bg-white/5 border border-white/20 hover:border-orange-500/50 text-white font-medium rounded-lg transition-all duration-300",
      small: "h-9 px-6 text-sm font-semibold flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full shadow-glow hover:from-orange-600 hover:to-orange-700 transition-all duration-300",
    },
    icon: {
      container: "w-10 h-10 md:w-12 md:h-12 bg-orange-500/10 rounded-lg flex items-center justify-center",
      size: "w-5 h-5 md:w-6 md:h-6 text-orange-500",
    },
  },

  // Borders
  borders: {
    divider: "border-t border-dashed border-white/10",
    solid: "border border-white/10",
  },

  // Animations
  animations: {
    transition: "transition-all duration-300",
    hover: "hover:bg-white/5 transition-colors",
  },
} as const;

// Utility function to combine class names
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};
