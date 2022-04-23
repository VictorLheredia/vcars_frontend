import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import SelectSearchBar from "../components/SelectSearchBar";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    api
      .get(`/brands`)
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleSearchBrand(e) {
    let brand = e.target.value;
    if (brand) {
      searchParams.set("brand", `${brand}`);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  }

  function handleSearchModel(e) {
    let model = e.target.value;
    if (model) {
      searchParams.set("model", `${model}`);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  }

  function handleSearchPrice(e) {
    let price = e.target.value;
    if (price) {
      searchParams.set("price", `${price}`);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  }
  return (
    <div>
      <div>
        <div>
          <SelectSearchBar
            name="brand"
            text="Marca"
            placeholder="Selecione a marca do veículo"
            options={brands}
            handleOnChange={handleSearchBrand}
            value={searchParams.get("brand") || ""}
          />
        </div>
        <input
          placeholder="Modelo"
          value={searchParams.get("model") || ""}
          onChange={handleSearchModel}
        />
        <div>
          <input
            type="range"
            min="10000"
            max="100000"
            step="1000"
            onInput={handleSearchPrice}
          />
          <p>Valor: {searchParams.get("price")}</p>
        </div>
      </div>
    </div>
  );
}
