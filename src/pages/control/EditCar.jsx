import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import Figure from "react-bootstrap/Figure";
import UploadImage from "../../modules/UploadImage";
import ButtonDelete from "../../components/ButtonDelete";

export default function EditCar() {
  const [car, setCar] = useState([]);
  const { carId } = useParams();

  const images = car.images;
  const urlArray = (images || []).map((image) => image.url);
  const keyArray = (images || []).map((image) => image.key);

  const brandObject = car.brand;
  const brand = (brandObject || {}).name;

  useEffect(() => {
    api
      .get(`/cars/${carId}`)
      .then((resp) => setCar(resp.data))
      .catch((err) => console.log(err));
  }, [carId]);

  return (
    <div>
      <div>
        <h1>{car.model}</h1>
        <p>{car._id}</p>
        <p>{brand}</p>
        <p>{car.year}</p>
        <p>{car.price}</p>
      </div>
      <div>
        {urlArray.map((url) => (
          <Figure key={url}>
            <Figure.Image width={150} height={150} alt="171x180" src={url} />
            <p>excluir imagem</p>
          </Figure>
        ))}
      </div>
      <div>
        <ButtonDelete
          carId={carId}
          text="Excluir veículo"
          keyArray={keyArray}
        ></ButtonDelete>
      </div>
      <div>
        <UploadImage></UploadImage>
      </div>
    </div>
  );
}
