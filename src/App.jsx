import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./layouts/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
}
