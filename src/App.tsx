import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Startups from "./pages/solutions/Startups";
import SMBs from "./pages/solutions/SMBs";
import MidMarket from "./pages/solutions/MidMarket";
import Enterprise from "./pages/solutions/Enterprise";
import ECommerce from "./pages/solutions/ECommerce";
import SaaS from "./pages/solutions/SaaS";
import Construction from "./pages/solutions/Construction";
import ProfessionalServices from "./pages/solutions/ProfessionalServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          {/* Solution Pages - By Size */}
          <Route path="/startups" element={<Startups />} />
          <Route path="/smbs" element={<SMBs />} />
          <Route path="/mid-market" element={<MidMarket />} />
          <Route path="/enterprise" element={<Enterprise />} />
          {/* Solution Pages - By Industry */}
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/saas" element={<SaaS />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/professional-services" element={<ProfessionalServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;