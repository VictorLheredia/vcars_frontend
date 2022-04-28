import { Container, Row, Col } from "react-bootstrap";
import BrandFilter from "../components/BrandFilter";
import SearchBar from "../modules/SearchBar";
import CarBox from "../modules/CarBox";

export default function StockPage() {
  return (
    <>
      <BrandFilter></BrandFilter>
      <Container id="md">
        <Row>
          <Col md={3}>
            <SearchBar></SearchBar>
          </Col>
          <Col md={9}>
            <CarBox cardLine={3}></CarBox>
          </Col>
        </Row>
      </Container>
    </>
  );
}
