import "../styles/Header.css";
import Logo from "../img/Logo.svg";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import HeaderTop from "./HeaderTop";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  function navigateStock() {
    navigate(`/estoque`);
  }

  function handleSearchText(e) {
    let text = e.target.value;
    if (text) {
      searchParams.set("text", `${text}`);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  }

  return (
    <div id="Header">
      <HeaderTop />
      <Navbar expand="xl">
        <Container id="md">
          <Navbar.Brand>
            <img src={Logo} alt="logo" height={92} />
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
                <Link className="nav-link" to="/painel/lista">
                  Área do lojista
                </Link>
              </div>
            </Navbar.Collapse>
            <div className="container-input">
              <div className="wrap-input">
                <div className="input">
                  <input
                    name="text"
                    type="text"
                    id="text"
                    placeholder="Encontre seu veículo"
                    onChange={handleSearchText}
                    onFocus={navigateStock}
                    value={searchParams.get("text") || ""}
                  />
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
