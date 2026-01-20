import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle, BookOpen } from "lucide-react";

const Header = () => {
  const location = useLocation();

  return (
    <header className="relative border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo and Title */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/" className="inline-block group">
              <h1 className="font-amiri text-3xl md:text-4xl lg:text-5xl text-gold-light transition-colors duration-300 group-hover:text-primary">
                Asma-ul-Husna
              </h1>
              <p className="text-sm text-muted-foreground mt-1 font-arabic tracking-wide">
                The 99 Beautiful Names of Allah
              </p>
            </Link>
          </motion.div>

          {/* Navigation */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-8"
          >
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === "/"
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <BookOpen size={18} />
              <span className="font-arabic">Names</span>
            </Link>
            <Link
              to="/chatbot"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === "/chatbot"
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              <MessageCircle size={18} />
              <span className="font-arabic">Ask AI</span>
            </Link>
          </motion.nav>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </header>
  );
};

export default Header;