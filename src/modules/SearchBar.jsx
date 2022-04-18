import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSearchModel(e) {
    let model = e.target.value;
    if (model) {
      searchParams.set("model", `${model}`);
      setSearchParams(searchParams);
    } else {
      setSearchParams({});
    }
  }

  function handleSearchBrand(e) {
    let brand = e.target.value;
    if (brand) {
      searchParams.set("brand", `${brand}`);
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
          <input
            placeholder="Marca"
            value={searchParams.get("brand") || ""}
            onChange={handleSearchBrand}
          />
        </div>
        <input
          placeholder="Modelo"
          value={searchParams.get("model") || ""}
          onChange={handleSearchModel}
        />
      </div>
      <div>
        <input
          placeholder="preço"
          type="number"
          value={searchParams.get("price") || ""}
          onChange={handleSearchPrice}
        />
      </div>
      <input type="range" min="10000" max="100000" step="1000" />
    </div>
  );
}
