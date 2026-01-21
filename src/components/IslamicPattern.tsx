import { motion } from "framer-motion";

const IslamicPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 islamic-pattern opacity-100" />
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      {/* Ambient light effects */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-20 w-48 h-48 rounded-full bg-primary/8 blur-3xl" 
      />
      <motion.div 
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" 
      />
      
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />
    </div>
  );
};

export default IslamicPattern;
