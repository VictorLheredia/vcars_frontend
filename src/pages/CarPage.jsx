import "../styles/CarPage.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "../components/Carousel";
import InfoBox from "../components/InfoBox";
import NegotiationBox from "../components/NegotiationBox";

export default function CarPage() {
  const [car, setCar] = useState([]);
  const { carId } = useParams();

  const brand = (car.brand || {}).name;
  const fuel = (car.fuel || {}).name;
  const trasmission = (car.trasmission || {}).name;
  const doors = (car.doors || {}).name;
  const category = (car.category || {}).name;
  
  
  const images = car.images;
  const urlArray = (images || []).map((image) => image.url);
  const carouselObject = urlArray.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  useEffect(() => {
    api
      .get(`/cars/${carId}`)
      .then((resp) => setCar(resp.data))
      .catch((err) => console.log(err));
  }, [carId]);

  return (
    <div id="CarPage">
      <Row>
        <Col md={9}>
          <div className="carTitle">
            <span>
              {brand} {car.model}
            </span>{" "}
            {car.version} {fuel} {trasmission}
          </div>
          <Row>
            <Col md={8}>
              <Carousel urlArray={carouselObject} />
            </Col>
            <Col md={4}>
              <InfoBox
              brand={brand}
              model={car.model}
              version={car.version}
              year={car.year}
              plate={car.plate}
              km={car.km}
              trasmission={trasmission}
              doors={doors}
              fuel={fuel}
              color={car.color}
              category={category}
               />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <NegotiationBox></NegotiationBox>
        </Col>
      </Row>
    </div>
  );
}
