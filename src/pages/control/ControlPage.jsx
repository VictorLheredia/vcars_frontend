import "../../styles/ControlPage.css";
import { Outlet } from "react-router-dom";
import ControlNav from "../../components/ControlNav";

export default function ControlPage() {
  return (
    <div className="controlPage">
      <div className="controNav">
        <ControlNav></ControlNav>
      </div>
      <div className="outlet">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
