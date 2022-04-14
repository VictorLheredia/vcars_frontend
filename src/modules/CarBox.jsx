import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardCar from "../components/CardCar";

export default function BoxVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/cars", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setVeiculos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Row xs={1} md={2} lg={4}>
        {veiculos.map((veiculo) => (
          <CardCar
            key={veiculo._id}
            veiculo_id={veiculo._id}
            model={veiculo.model}
            brand={veiculo.brand.name}
            year={veiculo.year}
            price={veiculo.price}
            image={
              Array.isArray(veiculo.images)
                ? veiculo.images.map((img) => img.url).shift()
                : []
            }
          />
        ))}
      </Row>
    </div>
  );
}
