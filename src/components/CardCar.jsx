import "../styles/CardCar.css";
import { Link } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { SiSpeedtest } from "react-icons/si";
import { MdLocalGasStation } from "react-icons/md";
import { Card } from "react-bootstrap";

export default function CardCar({
  carId,
  brand,
  model,
  version,
  year,
  price,
  km,
  trasmission,
  fuel,
  image,
}) {
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
              {version} {trasmission}
            </div>
            <div className="priceCar">
              <span className="cifrao">R$</span>
              <span className="price">{BRL}</span>
            </div>
          </div>
          <ul className="specsBox">
            <li className="specs left">
              <span className="icon">
                <BsCalendar3 />
              </span>
              <span className="text">{year}</span>
            </li>
            <li className="specs mid">
              <span className="icon">
                <SiSpeedtest />
              </span>
              <span className="text">{km} km</span>
            </li>
            <li className="specs right">
              <span className="icon">
                <MdLocalGasStation />
              </span>
              <span className="text">{fuel}</span>
            </li>
          </ul>
        </Card>
      </Link>
    </div>
  );
}
