import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playedLoader, setPlayedLoader] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (!visited) {
      setIsLoading(true);
      setPlayedLoader(true);
      sessionStorage.setItem("visited", "true");

        // 👇 HARD LOCK loader time (animation-first)
      const MIN_LOADER_TIME = 3200;

      const timer = setTimeout(() => {
        setIsLoading(false);
      }, MIN_LOADER_TIME); // match GSAP timeline

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Loader Overlay */}
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScreen isLoading={isLoading} />}
        </AnimatePresence>

        {/* App always mounted (no jerk) */}
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Routes>
            <Route path="/" element={<Index playedLoader={playedLoader} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
