"use client";

import React from "react";

/**
 * According to user requirements:
 * Light Mode -> White and Red (e3-logo-cream.png)
 * Dark Mode -> Black and Red (e3-logo.png)
 * Red always remains as is.
 */
export function E3MediaLogo({ className = "" }: { className?: string }) {
  return (
    <>
      {/* Using e3-logo-cream.png (white text) for both themes because the E3 Media card has a dark background in both Light and Dark mode. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src="/assets/e3-logo-cream.png" 
        alt="E3 Media" 
        className={`${className} object-contain`} 
      />
    </>
  );
}
