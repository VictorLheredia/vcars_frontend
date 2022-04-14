import { useNavigate } from "react-router-dom";

export default function ButtonDelete({ carId, text, keyArray }) {
  const navigate = useNavigate();
  const keys = keyArray;

  function deleteCar() {
    keys.map((key) =>
      fetch(`http://localhost:4000/imagens/${carId}/${key}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
    );

    fetch(`http://localhost:4000/cars/${carId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      navigate("/painel");
    });
  }

  return <button onClick={deleteCar}>{text}</button>;
}
