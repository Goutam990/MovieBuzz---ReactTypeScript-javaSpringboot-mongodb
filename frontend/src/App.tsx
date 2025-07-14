import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import SignIn from "./components/SignIn"; // नाम बदलकर SignIn.tsx करें
import SignUp from "./components/SignUp"; // नाम बदलकर SignUp.tsx करें

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/movies" element={<Movies />} />
          
          {/* ऑथेंटिकेशन रूट्स */}
          <Route 
            path="/login" 
            element={<SignIn onSwitchToSignUp={() => window.location.href = '/signup'} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp onSwitchToSignIn={() => window.location.href = '/login'} />} 
          />

          {/* 404 रूट (सबसे नीचे रखें) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;