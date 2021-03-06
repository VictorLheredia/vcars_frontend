import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { Private } from "./contexts/Private";

import App from "./App";
import HomePage from "./pages/HomePage";
import StockPage from "./pages/StockPage";
import CarPage from "./pages/CarPage";
import LoginPage from "./pages/LoginPage";

import ControlPage from "./pages/control/ControlPage";
import ListCar from "./pages/control/ListCar";
import EditCar from "./pages/control/EditCar";
import RegisterCar from "./pages/control/RegisterCar";
import RegisterBrand from "./pages/control/RegisterBrand";
import RegisterUser from "./pages/control/RegisterUser";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="/estoque" element={<StockPage />} />
            <Route path="/estoque/:carId" element={<CarPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/painel" element={<Private><ControlPage /></Private>}>
              <Route index element={<ListCar />} />
              <Route path="lista" element={<ListCar />} />
              <Route path="editar/:carId" element={<EditCar />} />
              <Route path="cadastro_veiculo" element={<RegisterCar />} />
              <Route path="cadastro_marca" element={<RegisterBrand />} />
              <Route path="cadastro_usuario" element={<RegisterUser />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
