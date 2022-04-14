import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { Private } from "./contexts/Private";

import App from "./App";
import HomePage from "./pages/HomePage";
import StockPage from "./pages/StockPage";
import LoginPage from "./pages/LoginPage";
import CarsList from "./pages/control/CarsList";
import CarEdit from "./pages/control/CarEdit";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/estoque" element={<StockPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/painel/lista" element={<CarsList />} />
            <Route path="/painel/editar/:carId" element={<CarEdit />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
