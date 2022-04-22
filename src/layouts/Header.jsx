import "../styles/Header.css";
import Logo from "../img/Logo.svg";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { BiSearchAlt2 } from "react-icons/bi";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <div id="Header">
      <HeaderTop />
      <Navbar expand="xl">
        <Container id="md">
          <Navbar.Brand>
            <img src={Logo} alt="logo" height={90} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className="header-nav">
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="container-links">
                <Link className="nav-link" to="/">
                  Início
                </Link>
                <Link className="nav-link" to="/estoque">
                  Estoque
                </Link>
                <Link className="nav-link" to="/">
                  Financiamento
                </Link>
                <Link className="nav-link" to="/">
                  Sobre
                </Link>
                <Link className="nav-link" to="/">
                  Diferenciais
                </Link>
                <Link className="nav-link" to="/">
                  Contato
                </Link>
                <Link className="nav-link" to="/painel">
                  Área do lojista
                </Link>
              </div>
            </Navbar.Collapse>
            <div className="container-input">
              <div className="wrap-input">
                <div className="input">
                  <input type="text" placeholder="Encontre seu veículo" />
                  <div className="icon">
                    <BiSearchAlt2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
