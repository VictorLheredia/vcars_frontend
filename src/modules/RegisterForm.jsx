import { useEffect, useState } from "react";

import Input from "../components/Input";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";

export default function RegisterForm({ handleSubmit, btnText, carData }) {
  const [brands, setBrands] = useState([]);
  const [car, setCar] = useState(carData || {});

  useEffect(() => {
    fetch("http://localhost:4000/brands", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setBrands(data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(car);
  };

  function handleChange(e) {
    setCar({ ...car, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    setCar({
      ...car,
      brand: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Input
        name="model"
        type="text"
        text="model"
        placeholder="Insira o modelo do veículo"
        handleOnChange={handleChange}
        value={car.model ? car.model : ""}
      ></Input>
      <Select
        name="brand"
        text="Marca"
        placeholder="Selecione a marca do veículo"
        options={brands}
        handleOnChange={handleSelect}
        value={car.brand ? car.brand.id : ""}
      ></Select>
      <Input
        name="price"
        type="number"
        text="preço do veículo"
        placeholder="Insira o preço do veículo"
        handleOnChange={handleChange}
        value={car.price ? car.price : ""}
      ></Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}
