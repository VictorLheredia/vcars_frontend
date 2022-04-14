import { useEffect, useState } from "react";

import Input from "../components/Input";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";

export default function RegisterForm({ handleSubmit, btnText, veiculoData }) {
  const [marcas, setMarcas] = useState([]);
  const [veiculo, SetVeiculo] = useState(veiculoData || {});

  useEffect(() => {
    fetch("http://localhost:4000/marcas", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((resp) => resp.json())
      .then((data) => setMarcas(data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(veiculo);
  };

  function handleChange(e) {
    SetVeiculo({ ...veiculo, [e.target.name]: e.target.value });
  }

  function handleSelect(e) {
    SetVeiculo({
      ...veiculo,
      marca: {
        id: e.target.value,
        nome: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit}>
      <Input
        name="modelo"
        type="text"
        text="Modelo"
        placeholder="Insira o modelo do veículo"
        handleOnChange={handleChange}
        value={veiculo.modelo ? veiculo.modelo : ""}
      ></Input>
      <Select
        name="marca"
        text="Marca"
        placeholder="Selecione a marca do veículo"
        options={marcas}
        handleOnChange={handleSelect}
        value={veiculo.marca ? veiculo.marca.id : ""}
      ></Select>
      <Input
        name="preco"
        type="number"
        text="preço do veículo"
        placeholder="Insira o preço do veículo"
        handleOnChange={handleChange}
        value={veiculo.preco ? veiculo.preco : ""}
      ></Input>
      <SubmitButton text={btnText}></SubmitButton>
    </form>
  );
}
