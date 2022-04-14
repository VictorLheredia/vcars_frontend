import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import "../../styles/CarsList.css";
import ButtonDelete from "../../components/ButtonDelete";

export default function CarsList() {
  const [cars, setCars] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/veiculos", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Ano</th>
            <th>Preço</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr className="trBody"
              key={car._id}
              onClick={() => Navigate(`/painel/editar/${car._id}`)}
            >
              <td>{car._id}</td>
              <td>{car.modelo}</td>
              <td>{car.marca.nome}</td>
              <td>{car.ano}</td>
              <td>{car.preco}</td>
              <td>
                <ButtonDelete
                  carId={car._id}
                  text={<BsTrash />}
                  keyArray={
                    Array.isArray(car.imagens)
                      ? car.imagens.map((img) => img.key)
                      : []
                  }
                ></ButtonDelete>
              </td>
            </tr>
          ))}
          ;
        </tbody>
      </Table>
    </div>
  );
}
