import { motion } from "framer-motion";
import AudioPlayer from "@/components/AudioPlayer";

interface NameCardProps {
  id: string;
  name: string;
  arabic: string;
  meaning: string;
  onClick: () => void;
  index: number;
}

const NameCard = ({ id, name, arabic, meaning, onClick, index }: NameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(index * 0.02, 0.5),
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Card background with gradient border */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-5 md:p-6 rounded-xl border border-border bg-card transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-gold overflow-hidden">
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 islamic-pattern opacity-50" />
        
        {/* Number badge */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-xs font-medium text-primary">{id}</span>
        </div>

        {/* Audio player - stop propagation to prevent modal opening */}
        <div 
          className="absolute top-3 left-3 z-20"
          onClick={(e) => e.stopPropagation()}
        >
          <AudioPlayer nameNumber={parseInt(id)} size="sm" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-6">
          {/* Arabic Name - prominent display */}
          <p 
            className="font-amiri text-2xl md:text-3xl text-primary mb-2 text-center"
            style={{ direction: "rtl" }}
          >
            {arabic}
          </p>
          
          <h3 className="font-amiri text-lg md:text-xl text-gold-light group-hover:text-primary transition-colors duration-300 mb-1 text-center">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground font-arabic leading-relaxed text-center">
            {meaning}
          </p>
        </div>

        {/* Hover glow effect */}
        <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

export default NameCard;
