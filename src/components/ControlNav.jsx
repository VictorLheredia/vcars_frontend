import "../styles/ControlNav.css";
import { NavLink } from "react-router-dom";

export default function ControlNav() {
  return (
    <div id="controlNav">
      <div>
        <NavLink to="/painel">Tabela de veículos</NavLink>
      </div>
      <div>
        <NavLink to="/painel/cadastro">Cadastrar veículo</NavLink>
      </div>
    </div>
  );
}
