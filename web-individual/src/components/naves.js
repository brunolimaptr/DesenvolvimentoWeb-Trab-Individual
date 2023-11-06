import xwing from "../assets/Xwing.jpg";
import millenium from "../assets/Millenium.jpg";
import slave from "../assets/Slave.jpg";
import interceptor from "../assets/TIE-Interceptor.webp";
import shuttle from "../assets/Shuttle-CHRON.webp";
import fighter from "../assets/TIE-Fighter.webp";
import { PrincipalNaves } from "./naves.styled";
import { useState } from "react";
import { PesquisaNaves } from "./naves.styled";

export const arrayNaves = [
  { id: 1, nome: "X-Wing", valor: 15000, img: xwing },
  { id: 2, nome: "Millennium falcon", valor: 30000, img: millenium },
  { id: 3, nome: "Slave one", valor: 20000, img: slave },
  { id: 4, nome: "TIE Interceptor", valor: 40000, img: interceptor },
  { id: 5, nome: "Imperial Shuttle", valor: 25000, img: shuttle },
  { id: 6, nome: "TIE Fighter", valor: 35000, img: fighter },
];

export function Naves() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const navesFiltradas = arrayNaves.filter((nave) =>
    nave.nome.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  return (
    <>
      <PrincipalNaves>
        <PesquisaNaves>
          <input
            type="text"
            placeholder="Pesquisar Nave"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </PesquisaNaves>

        {navesFiltradas.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="Imagem Nave" width="320" height="205" />
            <p>Id: {item.id}</p>
            <p>Modelo: {item.nome}</p>
            <p>Valor: R${item.valor}</p>
          </div>
        ))}
      </PrincipalNaves>
    </>
  );
}
