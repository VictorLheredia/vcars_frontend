import "../styles/InfoBox.css";

import { FaCar } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { IoMdSpeedometer } from "react-icons/io";
import { VscCalendar } from "react-icons/vsc";
import { GiGearStickPattern } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { MdLocalGasStation } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";

export default function InfoBox() {
  return (
    <div className="InfoBox">
      <div className="item_info">
        <FaCar />
        <span>Moldeo</span>
        Punto
      </div>
      <div className="item_info gray">
        <IoMdColorPalette />
        <span>Cor</span>
        Cinza
      </div>
      <div className="item_info">
        <FaDigitalTachograph />
        <span>Final Placa</span>
        9
      </div>
      <div className="item_info gray">
        <IoMdSpeedometer />
        <span>Quilometragem</span>
        50.000
      </div>
      <div className="item_info ">
        <VscCalendar />
        <span>Ano</span>
        2011/2012
      </div>
      <div className="item_info gray">
        <GiGearStickPattern />
        <span>Câmbio</span>
        Manual
      </div>
      <div className="item_info">
        <GiCarDoor />
        <span>Portas</span>
        4
      </div>
      <div className="item_info gray">
        <MdLocalGasStation />
        <span>Combustível</span>
        Flex
      </div>
    </div>
  );
}
