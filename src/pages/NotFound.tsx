import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, MessageCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background islamic-pattern">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-2">
          <h1 className="font-amiri text-6xl md:text-8xl text-primary">404</h1>
          <h2 className="font-amiri text-2xl md:text-3xl text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground font-arabic max-w-md mx-auto">
            The path you seek does not exist. Let us guide you back to explore the beautiful names of Allah.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
          <Link 
            to="/chatbot"
            className="inline-flex items-center justify-center px-6 py-3 border border-border hover:bg-primary/10 hover:border-primary/50 text-foreground rounded-lg transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Ask AI Assistant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
