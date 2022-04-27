import "../styles/InfoBox.css";

import { FaCar } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import { GiGearStickPattern } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { MdLocalGasStation } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import { FaTruckPickup } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";

export default function InfoBox({
  brand,
  model,
  version,
  year,
  plate,
  km,
  trasmission,
  doors,
  fuel,
  color,
  category,
}) {
  const LastPlate = plate.slice(-1);

  return (
    <div id="InfoBox">
      <div className="item_info gray">
        <BsTagFill />
        <span>Marca</span>
        {brand}
      </div>
      <div className="item_info">
        <FaCar />
        <span>Moldeo</span>
        {model}
      </div>
      <div className="item_info gray">
        <IoMdColorPalette />
        <span>Cor</span>
        {color}
      </div>
      <div className="item_info">
        <FaDigitalTachograph />
        <span>Final Placa</span>
        {LastPlate}
      </div>
      <div className="item_info gray">
        <IoMdSpeedometer />
        <span>Quilometragem</span>
        {km}
      </div>
      <div className="item_info ">
        <VscCalendar />
        <span>Ano</span>
        {year}
      </div>
      <div className="item_info gray">
        <GiGearStickPattern />
        <span>Câmbio</span>
        {trasmission}
      </div>
      <div className="item_info">
        <GiCarDoor />
        <span>Portas</span>
        {doors}
      </div>
      <div className="item_info gray">
        <MdLocalGasStation />
        <span>Combustível</span>
        {fuel}
      </div>
      <div className="item_info">
        <FaTruckPickup />
        <span>Categoria</span>
        {category}
      </div>
    </div>
  );
}
