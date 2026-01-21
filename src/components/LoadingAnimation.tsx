import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  isVisible: boolean;
  onComplete?: () => void;
}

const LoadingAnimation = ({ isVisible, onComplete }: LoadingAnimationProps) => {
  const [showEnglish, setShowEnglish] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowEnglish(true);
      }, 1200);
      
      const completeTimer = setTimeout(() => {
        onComplete?.();
      }, 2800);

      return () => {
        clearTimeout(timer);
        clearTimeout(completeTimer);
      };
    } else {
      setShowEnglish(false);
    }
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* Ambient light effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]"
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-light/15 blur-[80px]"
            />
          </div>

          {/* Islamic geometric pattern overlay */}
          <div className="absolute inset-0 islamic-pattern opacity-30" />

          {/* Content container */}
          <div className="relative z-10 text-center">
            {/* Decorative lines */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-16 h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            {/* Arabic text */}
            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-amiri text-5xl md:text-7xl lg:text-8xl text-primary mb-4"
              style={{ direction: "rtl" }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px hsla(43, 40%, 52%, 0.3)",
                    "0 0 40px hsla(43, 40%, 52%, 0.5)",
                    "0 0 20px hsla(43, 40%, 52%, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                بَيْتُ الحُسْنَى
              </motion.span>
            </motion.h1>

            {/* English text - flows in after Arabic */}
            <AnimatePresence>
              {showEnglish && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="font-amiri text-2xl md:text-3xl lg:text-4xl text-gold-light"
                >
                  Bayt-Ul-Husna
                </motion.h2>
              )}
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence>
              {showEnglish && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-6 text-muted-foreground font-arabic text-sm md:text-base"
                >
                  The House of Beautiful Names
                </motion.p>
              )}
            </AnimatePresence>

            {/* Decorative bottom line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16 h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
