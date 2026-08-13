"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 4 second animation as requested
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground text-background overflow-hidden"
        >
          <div className="relative flex flex-col items-center w-full max-w-sm px-6">
            
            <div className="overflow-hidden w-full flex justify-center mb-8">
                <motion.h1 
                  initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="font-display text-4xl md:text-5xl font-medium tracking-tight text-center"
                >
                  E3 Strategic<br/>Ventures
                </motion.h1>
            </div>
            
            <motion.div 
               initial={{ scaleX: 0, opacity: 0 }}
               animate={{ scaleX: 1, opacity: 1 }}
               transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
               className="w-full h-[1px] bg-background/20 mt-4 origin-left relative"
            >
              <motion.div
                 initial={{ scaleX: 0 }}
                 animate={{ scaleX: 1 }}
                 transition={{ duration: 3.2, ease: "easeInOut", delay: 0.5 }}
                 className="absolute inset-0 bg-primary origin-left"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-6 text-[10px] uppercase tracking-[0.3em] font-medium text-background/60"
            >
              Loading Experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
