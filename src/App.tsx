import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@core/contexts/AuthContext";
import ProtectedRoute from "@layout/components/ProtectedRoute";
import Landing from "@landing/pages/Landing";
import Login from "@/pages/Login";
import AppLayout from "@layout/layouts/AppLayout";
import Dashboard from "@dashboard/pages/Dashboard";
import Organograma from "@organograma/pages/Organograma";
import PDI from "@pdi/pages/PDI";
import Testes from "@testes/pages/Testes";
import Salarios from "@salarios/pages/Salarios";
import Beneficios from "@beneficios/pages/Beneficios";
import Usuarios from "@usuarios/pages/Usuarios";
import Customizacao from "@customizacao/pages/Customizacao";
import NotFound from "@landing/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="organograma" element={<Organograma />} />
              <Route path="pdi" element={<PDI />} />
              <Route path="testes" element={<Testes />} />
              <Route path="salarios" element={<Salarios />} />
              <Route path="beneficios" element={<Beneficios />} />
              <Route path="usuarios" element={<Usuarios />} />
              <Route path="customizacao" element={<Customizacao />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
