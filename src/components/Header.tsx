import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Users, Sparkles } from "lucide-react";
import mosqueLogo from "@/assets/mosque-logo.png";
import eventLogo from "@/assets/event-logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Left Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img src={mosqueLogo} alt="Mosque Logo" className="h-16 md:h-20 w-auto" />
          </motion.div>

          {/* Center Content */}
          <div className="flex flex-col items-center space-y-4">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
              <Link to="/" className="inline-block group">
                <h1 className="font-amiri text-2xl md:text-3xl lg:text-4xl text-gold-light transition-colors duration-300 group-hover:text-primary">Bayt-Ul-Husna</h1>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 font-arabic tracking-wide">The 33 Beautiful Names of Allah</p>
              </Link>
            </motion.div>

            <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              <Link to="/" className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${location.pathname === "/" ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"}`}>
                <BookOpen size={16} /><span className="font-arabic">Names</span>
              </Link>
              <Link to="/guidance" className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${location.pathname === "/guidance" ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"}`}>
                <Sparkles size={16} /><span className="font-arabic">Guidance</span>
              </Link>
              <Link to="/chatbot" className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${location.pathname === "/chatbot" ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"}`}>
                <MessageCircle size={16} /><span className="font-arabic">Ask</span>
              </Link>
              <Link to="/team" className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-2 rounded-lg transition-all duration-300 text-sm ${location.pathname === "/team" ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-primary/5"}`}>
                <Users size={16} /><span className="font-arabic">Team</span>
              </Link>
            </motion.nav>
          </div>

          {/* Right Logo */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="flex-shrink-0"
          >
            <img src={eventLogo} alt="Event Logo" className="h-16 md:h-20 w-auto" />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
};

export default Header;
