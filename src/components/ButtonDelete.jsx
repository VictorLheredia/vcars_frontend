import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export default function ButtonDelete({ carId, text, keyArray }) {
  const navigate = useNavigate();
  const keys = keyArray;

  function deleteCar() {
    keys.map((key) => api.delete(`/images/${carId}/${key}`));

    api.delete(`/cars/${carId}`).then(navigate(`/painel`));
  }

  return <button onClick={deleteCar}>{text}</button>;
}
