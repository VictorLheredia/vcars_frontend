import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "../components/Carousel";
import InfoBox from "../components/InfoBox";
import NegotiationBox from "../components/NegotiationBox"

export default function CarPage() {
  return (
    <div>
      <Row>
        <Col md={9}>
          TITULO
          <Row>
            <Col md={8}>
              <Carousel />
            </Col>
            <Col md={4}>
              <InfoBox />
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <NegotiationBox></NegotiationBox>
        </Col>
      </Row>
    </div>
  );
}
