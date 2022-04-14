import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import "../../styles/ListCar.css";
import ButtonDelete from "../../components/ButtonDelete";

export default function ListCar() {
  const [cars, setCars] = useState([]);
  const Navigate = useNavigate();

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
            <tr className="trBody" key={car._id} onClick={() => Navigate(`/painel/editar/${car._id}`)}>
              <td>{car._id}</td>
              <td>{car.model}</td>
              <td>{car.brand.name}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>
                <ButtonDelete
                  carId={car._id}
                  text={<BsTrash />}
                  keyArray={
                    Array.isArray(car.images)
                      ? car.images.map((img) => img.key)
                      : []
                  }
                ></ButtonDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
