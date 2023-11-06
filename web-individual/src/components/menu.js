import { vaiParaHome, vaiParaPedidos } from "../coordinator/coordinator";
import { useNavigate } from "react-router-dom";
import { Principal } from "./menu.styled";

export function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <Principal>
        <button onClick={() => vaiParaHome(navigate)}>Home</button>
        <button onClick={() => vaiParaPedidos(navigate)}>Pedidos</button>
      </Principal>
    </>
  );
}
