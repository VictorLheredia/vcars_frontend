import "../styles/RegisterForm.css";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Row, Col } from "react-bootstrap";
import Input from "../components/Input";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";

export default function RegisterForm({ handleSubmit, btnText, carData }) {
  const [brands, setBrands] = useState([]);
  const [car, setCar] = useState(carData || {});
  const [extra, setExtra] = useState();
  const [extras, setExtras] = useState([]);
  const transmisions = [
    { _id: "1", name: "Manual" },
    { _id: "2", name: "Automático" },
  ];
  const doors = [
    { _id: "1", name: "2" },
    { _id: "2", name: "4" },
  ];
  const fuel = [
    { _id: "1", name: "Flex" },
    { _id: "2", name: "Gasolina" },
    { _id: "3", name: "Etanol" },
    { _id: "4", name: "Diesel" },
  ];
  const category = [
    { _id: "1", name: "Hatchback" },
    { _id: "2", name: "Sedan" },
    { _id: "3", name: "Suv" },
    { _id: "4", name: "Pick-up" },
    { _id: "5", name: "Minivan" },
    { _id: "6", name: "Esportivo" },
  ];

  useEffect(() => {
    api
      .get(`/brands`)
      .then((res) => setBrands(res.data))
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
      [e.target.name]: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handleExtra(e) {
    setExtra(e.target.value);
  }

  function addExtra(e) {
    e.preventDefault();
    setExtras((prevArray) => [...prevArray, `${extra}`]);
    setExtra("");
  }

  function addExtraInCar() {
    setCar({
      ...car,
      extras: extras,
    });
  }

  useEffect(() => {
    addExtraInCar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extras]);

  function deleteExtra(e) {
    e.preventDefault();
    const extra = e.target.value;
    setExtras(extras.filter((item) => item !== extra));
  }

  return (
    <form onSubmit={submit} id="RegisterForm">
      <Row>
        <Col>
          <Select
            name="brand"
            text="Marca"
            placeholder="Selecione a marca do veículo"
            options={brands}
            handleOnChange={handleSelect}
            value={car.brand ? car.brand.id : ""}
          ></Select>
          <Input
            name="model"
            type="text"
            text="Modelo"
            placeholder="Insira o modelo do veículo"
            handleOnChange={handleChange}
            value={car.model ? car.model : ""}
          ></Input>
          <Input
            name="version"
            type="text"
            text="Versão"
            placeholder="Insira a versão do veículo"
            handleOnChange={handleChange}
            value={car.version ? car.version : ""}
          ></Input>
          <Input
            name="year"
            type="number"
            text="Ano"
            placeholder="Insira o ano do veículo"
            handleOnChange={handleChange}
            value={car.year ? car.year : ""}
          ></Input>
          <Input
            name="price"
            type="number"
            text="Valor"
            placeholder="Insira o valor do veículo"
            handleOnChange={handleChange}
            value={car.price ? car.price : ""}
          ></Input>
          <Input
            name="plate"
            type="text"
            text="Placa"
            placeholder="Insira a placa do veículo"
            handleOnChange={handleChange}
            value={car.plate ? car.plate : ""}
          ></Input>
        </Col>
        <Col>
          <Input
            name="km"
            type="number"
            text="Quilometragem "
            placeholder="Insira a quilometragem do veículo"
            handleOnChange={handleChange}
            value={car.km ? car.km : ""}
          ></Input>
          <Select
            name="trasmission"
            text="Câmbio"
            placeholder="Selecione o câmbio do veículo"
            options={transmisions}
            handleOnChange={handleSelect}
            value={car.trasmission ? car.trasmission.id : ""}
          ></Select>
          <Select
            name="doors"
            text="Portas"
            placeholder="Selecione a quantidade de portas"
            options={doors}
            handleOnChange={handleSelect}
            value={car.doors ? car.doors.id : ""}
          ></Select>
          <Select
            name="fuel"
            text="Combustível"
            placeholder="Selecione o combustível do veiculo"
            options={fuel}
            handleOnChange={handleSelect}
            value={car.fuel ? car.fuel.id : ""}
          ></Select>
          <Input
            name="color"
            type="text"
            text="Cor"
            placeholder="Insira a cor do veículo"
            handleOnChange={handleChange}
            value={car.color ? car.color : ""}
          ></Input>
          <Select
            name="category"
            text="Categoria"
            placeholder="Selecione a categoria do veiculo"
            options={category}
            handleOnChange={handleSelect}
            value={car.category ? car.category.id : ""}
          ></Select>
        </Col>
        <Row>
          <Col md={6}>
            <Input
              name="extra"
              type="text"
              text="Opcionais"
              placeholder="Insira um opcional"
              handleOnChange={handleExtra}
              value={extra ? extra : ""}
            ></Input>
            <button name="extras" onClick={addExtra} value={extra ? extra : ""}>
              +
            </button>
          </Col>
          <Col md={6}>
            <div className="d-flex">
              {Array.isArray(car.extras)
                ? car.extras.map((extra, index) => (
                    <div className="d-flex p-2" key={index}>
                      {extra}
                      <button onClick={deleteExtra} value={extra}>
                        x
                      </button>
                    </div>
                  ))
                : []}
            </div>
          </Col>
        </Row>
        <SubmitButton text={btnText}></SubmitButton>
      </Row>
    </form>
  );
}
