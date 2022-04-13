import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import { Private } from "./contexts/Private";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Private><HomePage /></Private>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}