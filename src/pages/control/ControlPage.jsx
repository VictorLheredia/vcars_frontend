import "../../styles/ControlPage.css";
import { Outlet } from "react-router-dom";
import ControlNav from "../../components/ControlNav";
import { Container } from "react-bootstrap";

export default function ControlPage() {
  return (
    <Container id="md">
      <div id="ControlPage">
        <div className="controlNav">
          <ControlNav></ControlNav>
        </div>
        <div className="outlet">
          <Outlet></Outlet>
        </div>
      </div>
    </Container>
  );
}
