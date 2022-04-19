import "../styles/BrandFilter.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import chevrolet from "../img/brands/chevrolet.png";
import fiat from "../img/brands/fiat.png";
import ford from "../img/brands/ford.png";
import hyundai from "../img/brands/hyundai.png";
import jaguar from "../img/brands/jaguar.png";
import jeep from "../img/brands/jeep.png";
import nissan from "../img/brands/nissan.png";
import renault from "../img/brands/renault.png";
import toyota from "../img/brands/toyota.png";
import volkswagen from "../img/brands/volkswagen.png";

export default function BrandFilter() {
  function BrandLink({ brand, ...props }) {
    return <Link to={`/estoque?brand=${brand}`} {...props} />;
  }

  return (
    <div id="BrandFilter">
      <span className="title">filter por marca</span>
      <div className="brands">
        <Container id="md">
          <div className="brands">
            <BrandLink brand="chevrolet" className="brand">
              <img src={chevrolet} alt="chevrolet" />
            </BrandLink>
            <BrandLink brand="fiat" className="brand">
              <img src={fiat} alt="fiat" />
            </BrandLink>
            <BrandLink brand="ford" className="brand">
              <img src={ford} alt="ford" />
            </BrandLink>
            <BrandLink brand="hyundai" className="brand">
              <img src={hyundai} alt="hyundai" />
            </BrandLink>
            <BrandLink brand="jaguar" className="brand">
              <img src={jaguar} alt="jaguar" />
            </BrandLink>
            <BrandLink brand="jeep" className="brand">
              <img src={jeep} alt="jeep" />
            </BrandLink>
            <BrandLink brand="nissan" className="brand">
              <img src={nissan} alt="nissan" />
            </BrandLink>
            <BrandLink brand="renault" className="brand">
              <img src={renault} alt="renault" />
            </BrandLink>
            <BrandLink brand="toyota" className="brand">
              <img src={toyota} alt="toyota" />
            </BrandLink>
            <BrandLink brand="volkswagen" className="brand">
              <img src={volkswagen} alt="volkswagen" />
            </BrandLink>
          </div>
        </Container>
      </div>
    </div>
  );
}
