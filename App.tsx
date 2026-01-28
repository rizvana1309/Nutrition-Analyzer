import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useHealthStore } from "@/hooks/useHealthStore";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import ScanFood from "./pages/ScanFood";
import HeartRate from "./pages/HeartRate";
import Steps from "./pages/Steps";
import Water from "./pages/Water";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const { isOnboarded } = useHealthStore();

  return (
    <Routes>
      <Route path="/" element={isOnboarded ? <Navigate to="/home" replace /> : <Navigate to="/onboarding" replace />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/home" element={isOnboarded ? <Home /> : <Navigate to="/onboarding" replace />} />
      <Route path="/scan-food" element={isOnboarded ? <ScanFood /> : <Navigate to="/onboarding" replace />} />
      <Route path="/heart-rate" element={isOnboarded ? <HeartRate /> : <Navigate to="/onboarding" replace />} />
      <Route path="/steps" element={isOnboarded ? <Steps /> : <Navigate to="/onboarding" replace />} />
      <Route path="/water" element={isOnboarded ? <Water /> : <Navigate to="/onboarding" replace />} />
      <Route path="/dashboard" element={isOnboarded ? <Dashboard /> : <Navigate to="/onboarding" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

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
