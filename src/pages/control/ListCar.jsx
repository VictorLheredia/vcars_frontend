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
      <Table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Versão</th>
            <th>Ano</th>
            <th>Km</th>
            <th>Valor</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr className="trBody" key={car._id}>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.plate}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.brand.name}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.model}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.version}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.year}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.km?.toLocaleString("pt-br", {
                  minimumFractionDigits: 0,
                })}
              </td>
              <td onClick={() => Navigate(`/painel/editar/${car._id}`)}>
                {car.price?.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
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
