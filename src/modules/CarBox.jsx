import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardCar from "../components/CardCar";

export default function CarBox() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/cars", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Row xs={1} md={2} lg={4}>
        {cars.map((car) => (
          <CardCar
            key={car._id}
            carId={car._id}
            model={car.model}
            brand={car.brand.name}
            year={car.year}
            price={car.price}
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