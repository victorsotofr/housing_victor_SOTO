import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenantDashboard from "./pages/tenant/Dashboard";
import LandlordDashboard from "./pages/landlord/Dashboard";
import AgencyDashboard from "./pages/agency/Dashboard";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn"; // Import the new SignIn component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signin" element={<SignIn />} /> {/* Add the SignIn route */}
          <Route path="/tenant" element={<TenantDashboard />} />
          <Route path="/landlord" element={<LandlordDashboard />} />
          <Route path="/agency" element={<AgencyDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
