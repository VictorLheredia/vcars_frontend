import "../styles/CardCar.css";
import { Link } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { MdLocalGasStation } from "react-icons/md";
import { Card } from "react-bootstrap";

export default function CardCar({ model, brand, year, price, image, carId }) {
  const BRL = price.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  return (
    <div id="CardCar">
      <Link to={`/estoque/${carId}`} className="link">
        <Card className="card">
          <img src={image} alt="imagem do veículo" />
          <div className="buttonOferta">Ver oferta</div>
          <div className="priceBox">
            <div className="title">
              {brand} {model}
            </div>
            <div className="subtitle">
              1.0 200 TSI TOTAL FLEX HIGHLINE AUTOMÁTICO
            </div>
            <div className="priceCar">
              <span className="cifrao">R$</span>
              <span className="price">{BRL}</span>
            </div>
          </div>
          <ul className="specsBox">
            <li className="specs">
              <span className="icon">
                <BsCalendar3 />
              </span>
              <span className="text">2021/2021</span>
            </li>
            <li className="specs">
              <span className="icon">
                <SiSpeedtest />
              </span>
              <span className="text">60250 km</span>
            </li>
            <li className="specs">
              <span className="icon">
                <MdLocalGasStation />
              </span>
              <span className="text">Flex</span>
            </li>
          </ul>
        </Card>
      </Link>
    </div>
  );
}
