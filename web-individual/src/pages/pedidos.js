import { Menu } from "../components/menu";
import { useState } from "react";
import { MainPedidos } from "./pedidos.styled";
import { MainMenuPedidos } from "./pedidos.styled";

export function Pedidos() {
  const [pedidos, setPedidos] = useState("");
  const [pedidosList, setPedidosList] = useState([]);

  const adicionarPedido = () => {
    if (pedidos.trim() === "") {
      return;
    }

    setPedidosList((prevPedidosList) => [...prevPedidosList, pedidos]);

    setPedidos("");
  };

  return (
    <>
      <MainMenuPedidos>
        <Menu />
      </MainMenuPedidos>
      <MainPedidos>
        <div>
          <input
            type="text"
            placeholder="ID do Modelo"
            value={pedidos}
            onChange={(e) => setPedidos(e.target.value)}
          />
          <button onClick={adicionarPedido}>Adicionar Pedido</button>
        </div>

        <ul>
          {pedidosList.map((pedido, index) => (
            <li key={index}>{pedido}</li>
          ))}
        </ul>
      </MainPedidos>
    </>
  );
}
