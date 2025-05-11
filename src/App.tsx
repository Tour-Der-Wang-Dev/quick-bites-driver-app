
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import History from "./pages/History";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => {
  // For demo purposes, let's assume the user is authenticated
  const isAuthenticated = true;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
            <Route
              path="/"
              element={
                <>
                  <Dashboard />
                  <BottomNavigation />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Orders />
                  <BottomNavigation />
                </>
              }
            />
            <Route
              path="/history"
              element={
                <>
                  <History />
                  <BottomNavigation />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Profile />
                  <BottomNavigation />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
