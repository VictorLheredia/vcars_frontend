import "../styles/ControlNav.css";
import { NavLink } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GiCarKey } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { BsTagFill } from "react-icons/bs";

export default function ControlNav() {
  return (
    <div id="ControlNav">
      <div className="control-button">
        <NavLink className="control-link" to="/painel/lista">
          <div className="control-icon">
            <AiOutlineUnorderedList />
          </div>
          <div className="control-text">Tabela de veículos</div>
        </NavLink>
      </div>
      <div className="control-button">
        <NavLink className="control-link" to="/painel/cadastro_veiculo">
          <div className="control-icon">
            <GiCarKey />
          </div>
          <div className="control-text">Cadastrar veículo</div>
        </NavLink>
      </div>
      <div className="control-button">
        <NavLink className="control-link" to="/painel/cadastro_marca/">
          <div className="control-icon">
            <BsTagFill />
          </div>
          <div className="control-text">Cadastrar Marca</div>
        </NavLink>
      </div>
      <div className="control-button">
        <NavLink className="control-link" to="/painel/cadastro_usuario/">
          <div className="control-icon">
            <IoMdPersonAdd />
          </div>
          <div className="control-text">Cadastrar usuário</div>
        </NavLink>
      </div>
    </div>
  );
}
