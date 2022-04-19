import "../../styles/ListCar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { api } from "../../services/api";
import Table from "react-bootstrap/Table";
import ButtonDelete from "../../components/ButtonDelete";

export default function ListCar() {
  const [cars, setCars] = useState([]);
  const Navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="ListCar">
      <Table hover>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Versão</th>
            <th>Ano</th>
            <th>Valor</th>
            <th>Km</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr
              className="trBody"
              key={car._id}
              onClick={() => Navigate(`/painel/editar/${car._id}`)}
            >
              <td>{car.plate}</td>
              <td>{car.brand.name}</td>
              <td>{car.model}</td>
              <td>{car.version}</td>
              <td>{car.year}</td>
              <td>{car.km}</td>
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
