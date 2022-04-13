import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import CardCar from "../components/CardCar";

export default function BoxVeiculos() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/veiculos", {
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
            modelo={veiculo.modelo}
            marca={veiculo.marca.nome}
            ano={veiculo.ano}
            preco={veiculo.preco}
            imagem={
              Array.isArray(veiculo.imagens)
                ? veiculo.imagens.map((img) => img.url).shift()
                : []
            }
          />
        ))}
      </Row>
    </div>
  );
}
