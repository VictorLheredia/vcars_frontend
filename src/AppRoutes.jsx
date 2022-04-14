import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { Private } from "./contexts/Private";

import HomePage from "./pages/HomePage.jsx";
import StockPage from "./pages/StockPage"
import LoginPage from "./pages/LoginPage";
import CarsList from "./pages/control/CarsList";
import CarEdit from "./pages/control/CarEdit"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Private><HomePage /></Private>}/>
          <Route path="/estoque" element={<StockPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/painel/lista" element={<CarsList />} />
          <Route path="/painel/editar/:carId" element={<CarEdit />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}