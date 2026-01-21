import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Chatbot from "./pages/Chatbot";
import Team from "./pages/Team";
import SpiritualGuidance from "./pages/SpiritualGuidance";
import NotFound from "./pages/NotFound";
import LoadingAnimation from "./components/LoadingAnimation";

const queryClient = new QueryClient();

// Component to handle route-based loading
const AppRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [showInitialLoad, setShowInitialLoad] = useState(true);
  const [prevPath, setPrevPath] = useState<string | null>(null);

  // Initial page load animation
  useEffect(() => {
    if (showInitialLoad) {
      const timer = setTimeout(() => {
        setShowInitialLoad(false);
      }, 2800);
      return () => clearTimeout(timer);
    }
  }, [showInitialLoad]);

  // Route change loading animation
  useEffect(() => {
    if (!showInitialLoad && prevPath !== null && prevPath !== location.pathname) {
      setIsLoading(true);
    }
    setPrevPath(location.pathname);
  }, [location.pathname, showInitialLoad, prevPath]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingAnimation 
        isVisible={showInitialLoad || isLoading} 
        onComplete={handleLoadingComplete} 
      />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/team" element={<Team />} />
        <Route path="/guidance" element={<SpiritualGuidance />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
