"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <div className="relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center border border-primary/20 bg-background/40 backdrop-blur-sm" />
    );
  }

  // Derive an active class matching the current explicit theme choice
  // (so system shows the monitor icon)
  const themeClass = theme === "dark" ? "theme-dark" : theme === "light" ? "theme-light" : "theme-system";

  return (
    <button
      onClick={toggleTheme}
      className={`relative overflow-hidden rounded-full w-10 h-10 flex items-center justify-center border border-primary/20 bg-background/40 backdrop-blur-sm text-foreground transition-colors duration-300 hover:border-primary hover:text-primary hover:bg-primary/5 focus-visible:ring-primary/50 focus-visible:ring-2 group ${themeClass}`}
      aria-label="Toggle theme"
    >
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 scale-50 -rotate-90 group-[.theme-light]:opacity-100 group-[.theme-light]:scale-100 group-[.theme-light]:rotate-0">
        <Sun className="h-5 w-5" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 scale-50 rotate-90 group-[.theme-dark]:opacity-100 group-[.theme-dark]:scale-100 group-[.theme-dark]:rotate-0">
        <Moon className="h-5 w-5" />
      </span>
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 scale-50 -rotate-90 group-[.theme-system]:opacity-100 group-[.theme-system]:scale-100 group-[.theme-system]:rotate-0">
        <Monitor className="h-5 w-5" />
      </span>
    </button>
  );
}
