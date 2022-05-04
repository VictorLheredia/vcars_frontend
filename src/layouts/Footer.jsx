import "../styles/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { BiTime } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";

import LogoFooter from "../img/LogoFooter.svg";

export default function Footer() {
  return (
    <div id="Footer">
      <Container id="md">
        <div className="footer-body">
          <Row>
            <Col md={2} className="d-flex align-items-center border-end">
              <img src={LogoFooter} alt="logo" height={50} />
            </Col>
            <Col md={4} className="offer border-end">
              <div className="container-offer d-flex-column">
                <div className="d-flex">
                  <div className="icon-offer">
                    <MdEmail />
                  </div>
                  <div className="text">
                    <div className="text-title">Ofertas exclusivas</div>
                    <div className="text-subtitle">
                      Cadastre-se para receber nossas ofertas.
                    </div>
                  </div>
                </div>
                <form>
                  <div className="input d-flex">
                    <input type="email" />
                    <div className="button">
                      <AiOutlineArrowRight />
                    </div>
                  </div>
                </form>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center border-end">
              <div className="container-info">
                <div className="info-footer">
                  <div className="icon-footer">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="text">General Carneiro 100, Sorocaba-SP</div>
                </div>
                <div className="info-footer">
                  <div className="icon-footer">
                    <BiTime />
                  </div>
                  <div className="text">Segunda à Sabado das 09h - 18h</div>
                </div>
                <div className="info-footer">
                  <div className="icon-footer">
                    <BsTelephone />
                  </div>
                  <div className="text">Atendimento: 4000-4000</div>
                </div>
              </div>
            </Col>
            <Col md={2} className="d-flex justify-content-evenly">
              <div className="footer-cards">
                <div className="footer-card">
                  <FaCcVisa />
                </div>
                <div className="footer-card">
                  <FaCcMastercard />
                </div>
              </div>
              <div className="footer-cards">
                <div className="footer-card">
                  <FaCcPaypal />
                </div>
                <div className="footer-card">
                  <FaCcAmex />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="copyright">
          <div className="copy">Copyright © 2022 Vcars Seminovos</div>
          <div className="developed">
            Developed by <span>Victor Luiz</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
