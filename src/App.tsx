import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";
import Transparencia from "./pages/Transparencia";
import NotFound from "./pages/NotFound";
import FabricaComissoes from "./pages/artigos/FabricaComissoes";
import CursosOnline from "./pages/categorias/CursosOnline";
import MarketingDigital from "./pages/categorias/MarketingDigital";
import Gastronomia from "./pages/categorias/Gastronomia";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-uso" element={<TermosUso />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/cursos-online" element={<CursosOnline />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/artigos/fabrica-comissoes-vale-pena" element={<FabricaComissoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
