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
    <div>
      <Row>
        <Col md={9}>
          <div id="carTitle">
            <span>{brand} Modelo</span> 1.0 TI-VCT FLEX SE SEDAN MANUAL
          </div>
          <Row>
            <Col md={8}>
              <Carousel urlArray={carouselObject} />
            </Col>
            <Col md={4}>
              <InfoBox />
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
