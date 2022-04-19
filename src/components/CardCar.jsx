import "../styles/CardCar.css";
import { Link } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { MdLocalGasStation } from "react-icons/md";
import { Card } from "react-bootstrap";

export default function CardCar({ model, brand, year, price, image, carId }) {
  const BRL = price.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  return (
    <div>
      <Link to={`/estoque/${carId}`} className="CardCar-link">
        <Card className="CardCar-card">
          <img src={image} alt="imagem do veículo" className="CardCar-img" />
          <div className="CardCar-buttonOferta">Ver oferta</div>
          <div className="CardCar-priceBox">
            <div className="CardCar-title">
              {brand} {model}
            </div>
            <div className="CardCar-subtitle">
              1.0 200 TSI TOTAL FLEX HIGHLINE AUTOMÁTICO
            </div>
            <div className="CardCar-priceCar">
              <span className="CardCar-cifrao">R$</span>
              <span className="CardCar-price">{BRL}</span>
            </div>
          </div>
          <ul className="CardCar-specsBox">
            <li className="CardCar-specs">
              <span className="CardCar-icon">
                <BsCalendar3 />
              </span>
              <span className="CardCar-text">2021/2021</span>
            </li>
            <li className="CardCar-specs">
              <span className="CardCar-icon">
                <SiSpeedtest />
              </span>
              <span className="CardCar-text">60250 km</span>
            </li>
            <li className="CardCar-specs">
              <span className="CardCar-icon">
                <MdLocalGasStation />
              </span>
              <span className="CardCar-text">Flex</span>
            </li>
          </ul>
        </Card>
      </Link>
    </div>
  );
}
