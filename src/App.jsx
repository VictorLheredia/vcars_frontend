import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

import Header from "./layouts/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <Container id="config">
        <Outlet></Outlet>
      </Container>
    </>
  );
}
