import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";

import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

export default function Header() {
  const { authenticated } = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link className="navbar-brand" to="/">
          Vcars Seminovos
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/estoque">
              Estoque
            </Link>
            {authenticated ? (
              <Link className="nav-link" to="/painel">
                Painel de Controle
              </Link>
            ) : (
              ""
            )}
            <div className="LogButton">
              {authenticated ? <LogoutButton /> : <LoginButton />}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
