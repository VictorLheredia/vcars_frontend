import "../styles/SearchBar.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import SelectSearchBar from "../components/SelectSearchBar";
import SelectSearchBarModel from "../components/SelectSearchBarModel";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);

  const [year, setYear] = useState({ min: 1990, max: 2023 });
  const [price, setPrice] = useState({ min: 10000, max: 150000 });
  const [km, setKm] = useState({ min: 0, max: 100000 });

  const category = [
    { _id: "1", name: "Hatchback" },
    { _id: "2", name: "Sedan" },
    { _id: "3", name: "Suv" },
    { _id: "4", name: "Pick-up" },
    { _id: "5", name: "Minivan" },
    { _id: "6", name: "Esportivo" },
  ];

  const transmisions = [
    { _id: "1", name: "Manual" },
    { _id: "2", name: "Automático" },
  ];

  useEffect(() => {
    api
      .get(`/brands`)
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    api
      .get(`/cars`)
      .then((res) => setCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filterBrand = cars.filter((car) => {
    let filter = searchParams.get("brand");
    if (!filter) return true;
    let brand = car.brand.name.toLowerCase();
    return brand.startsWith(filter.toLowerCase());
  });

  const allModels = filterBrand.map((car) => car.model);
  const models = allModels.filter((este, i) => allModels.indexOf(este) === i);

  function handleSearchBrand(e) {
    searchParams.set("brand", `${e.target.value}`);
    setSearchParams(searchParams);
  }

  function handleSearchModel(e) {
    searchParams.set("model", `${e.target.value}`);
    setSearchParams(searchParams);
  }

  function handleSearchYear(args) {
    searchParams.set("year_min", `${args.min}`);
    searchParams.set("year_max", `${args.max}`);
    setSearchParams(searchParams);
  }

  function handleSearchPrice(args) {
    searchParams.set("price_min", `${args.min}`);
    searchParams.set("price_max", `${args.max}`);
    setSearchParams(searchParams);
  }

  function handleSearchKm(args) {
    searchParams.set("km_min", `${args.min}`);
    searchParams.set("km_max", `${args.max}`);
    setSearchParams(searchParams);
  }

  function handleSearchCategory(e) {
    searchParams.set("category", `${e.target.value}`);
    setSearchParams(searchParams);
  }

  function handleSearchTransmisions(e) {
    searchParams.set("trasmission", `${e.target.value}`);
    setSearchParams(searchParams);
  }

  function resetInput() {
    setSearchParams({});
    setYear({ min: 1990, max: 2023 });
    setPrice({ min: 10000, max: 150000 });
    setKm({ min: 0, max: 100000 });
  }

  return (
    <div id="SearchBar">
      <div className="search-top">Buscar</div>
      <form className="search-body">
        <div className="d-flex justify-content-center">
          <input
            type="reset"
            onClick={resetInput}
            value="Limpar filtros"
            className="reset"
          />
        </div>
        <div id="search-brand">
          <SelectSearchBar
            name="brand"
            text="Marca"
            placeholder="Selecione uma marca"
            options={brands.sort(function (a, b) {
              return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
            })}
            handleOnChange={handleSearchBrand}
            value={searchParams.get("brand") || ""}
          />
        </div>
        <div id="search-model">
          <SelectSearchBarModel
            name="model"
            text="Modelo"
            placeholder="Selecione um modelo"
            options={models.sort()}
            handleOnChange={handleSearchModel}
            value={searchParams.get("model") || ""}
          />
        </div>
        <div id="search-price" className="range">
          <div className="range-text">
            Valor de <small>R$</small>{" "}
            {price.min.toLocaleString("pt-br", {
              minimumFractionDigits: 0,
            })}{" "}
            até <small>R$</small>{" "}
            {price.max.toLocaleString("pt-br", {
              minimumFractionDigits: 0,
            })}
          </div>
          <InputRange
            step={5000}
            formatLabel={(value) => null}
            draggableTrack={false}
            allowSameValues={false}
            maxValue={150000}
            minValue={10000}
            value={price}
            onChange={setPrice}
            onChangeComplete={(args) => handleSearchPrice(args)}
          />
        </div>
        <div id="search-year" className="range">
          <div className="range-text">
            Ano de {year.min} até {year.max}
          </div>
          <InputRange
            step={1}
            formatLabel={(value) => null}
            draggableTrack={false}
            allowSameValues={false}
            maxValue={2023}
            minValue={1990}
            value={year}
            onChange={setYear}
            onChangeComplete={(args) => handleSearchYear(args)}
          />
        </div>
        <div id="search-km" className="range">
          <div className="range-text">
            De{" "}
            {km.min.toLocaleString("pt-br", {
              minimumFractionDigits: 0,
            })}{" "}
            Km até{" "}
            {km.max.toLocaleString("pt-br", {
              minimumFractionDigits: 0,
            })}{" "}
            Km
          </div>
          <InputRange
            step={10000}
            formatLabel={(value) => null}
            draggableTrack={false}
            allowSameValues={false}
            maxValue={100000}
            minValue={0}
            value={km}
            onChange={setKm}
            onChangeComplete={(args) => handleSearchKm(args)}
          />
        </div>
        <div id="search-category">
          <SelectSearchBar
            name="category"
            text="Categoria"
            placeholder="Selecione uma categoria"
            options={category}
            handleOnChange={handleSearchCategory}
            value={searchParams.get("category") || ""}
          />
        </div>
        <div id="search-trasmission">
          <SelectSearchBar
            name="trasmission"
            text="Câmbio"
            placeholder="Selecione um câmbio"
            options={transmisions}
            handleOnChange={handleSearchTransmisions}
            value={searchParams.get("trasmission") || ""}
          />
        </div>
      </form>
    </div>
  );
}
