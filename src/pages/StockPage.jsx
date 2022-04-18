import { Container, Row, Col } from "react-bootstrap";
import CarBox from "../modules/CarBox";
import SearchBar from "../modules/SearchBar";

export default function StockPage() {
  return (
    <Container>
      <Row>
        <Col md={3}>
          <SearchBar></SearchBar>
        </Col>
        <Col md={9}>
          <CarBox></CarBox>
        </Col>
      </Row>
    </Container>
  );
}
