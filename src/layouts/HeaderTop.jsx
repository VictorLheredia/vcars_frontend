import "../styles/HeaderTop.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";
import { useContext } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTelephone } from "react-icons/bs";
import LogoutButton from "../components/LogoutButton";

export default function HeaderTop() {
  const { authenticated } = useContext(AuthContext);

  return (
    <div id="HeaderTop">
      <Container id="md">
        <div className="container-top">
          <Link to="/" className="link telephone">
            <div className="button">
              <div className="icon-button">
                <BsTelephone />
              </div>
              <div className="text">Atendimento: 4000-4000</div>
            </div>
          </Link>
          <Link to="/" className="link whatsapp">
            <div className="button">
              <div className="icon-button">
                <BsWhatsapp />
              </div>
              <div className="text">Atendimento: 4000-4000</div>
            </div>
          </Link>
          <Link to="/" className="icons">
            <BsFacebook />
          </Link>
          <Link to="/" className="icons">
            <BsInstagram />
          </Link>
          <div className="LogButton">
            {authenticated ? <LogoutButton /> : ""}
          </div>
        </div>
      </Container>
    </div>
  );
}
