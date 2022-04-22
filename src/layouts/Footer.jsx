import "../styles/Footer.css";
import { Container } from "react-bootstrap";
import LogoFooter from "../img/LogoFooter.svg";
import MasterCard from "../img/mastercard.png";
import Visa from "../img/visa.png";
import Pix from "../img/pix.jpg";
import Hipercard from "../img/hipercard.png";
import Elo from "../img/elo.png";

export default function Footer() {
  return (
    <div id="Footer">
      <Container id="md">
        <div className="logo">
          <img src={LogoFooter} alt="logo" height={80} />
          <img src={MasterCard} alt="mastercard" height={80} />
          <img src={Visa} alt="visa" height={70} />
          <img src={Hipercard} alt="visa" height={36} />
          <img src={Elo} alt="elo" height={36} />
          <img src={Pix} alt="pix" height={36} className="pix" />
        </div>
        <div className="copyright">
          <div className="copy">Copyright © 2022 Vcars Seminovos</div>
          <div className="developed">
            Developed by <span>Victor Luiz Heredia</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
