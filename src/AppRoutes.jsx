import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { Private } from "./contexts/Private";

import App from "./App";
import HomePage from "./pages/HomePage";
import StockPage from "./pages/StockPage";
import LoginPage from "./pages/LoginPage";
import ControlPage from "./pages/control/ControlPage";
import ListCar from "./pages/control/ListCar";
import EditCar from "./pages/control/EditCar";
import RegisterCar from "./pages/control/RegisterCar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/estoque" element={<StockPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/painel" element={<ControlPage />}>
              <Route index element={<ListCar />} />
              <Route path="editar/:carId" element={<EditCar />} />
              <Route path="cadastro" element={<RegisterCar />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
