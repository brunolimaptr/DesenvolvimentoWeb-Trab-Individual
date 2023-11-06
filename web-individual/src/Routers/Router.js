import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pedidos } from "../pages/pedidos";
import { Home } from "../pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}
