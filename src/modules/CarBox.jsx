import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Row } from "react-bootstrap";
import { api } from "../services/api";
import CardCar from "../components/CardCar";

export default function CarBox() {
  const [cars, setCars] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    api
      .get(`/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Row md={1} lg={3}>
        {cars
          .filter((car) => {
            let filter = searchParams.get("brand");
            if (!filter) return true;
            let brand = car.brand.name.toLowerCase();
            return brand.startsWith(filter.toLowerCase());
          })
          .filter((car) => {
            let filter = searchParams.get("model");
            if (!filter) return true;
            let model = car.model.toLowerCase();
            return model.startsWith(filter.toLowerCase());
          })
          .filter((car) => {
            let filter = searchParams.get("price");
            if (!filter) return true;
            let price = car.price;
            return price >= filter;
          })
          .map((car) => (
            <CardCar
              key={car._id}
              carId={car._id}
              brand={car.brand.name}
              model={car.model}
              version={car.version}
              year={car.year}
              price={car.price}
              km={car.km}
              fuel={car.fuel.name}
              trasmission={car.trasmission.name}
              image={
                Array.isArray(car.images)
                  ? car.images.map((img) => img.url).shift()
                  : []
              }
            />
          ))}
      </Row>
    </div>
  );
}
