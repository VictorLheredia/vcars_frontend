import "../styles/Banner.css";
import banner from "../img/banner.jpg";
import { Container } from "react-bootstrap";

export default function Banner() {
  return (
    <div id="Banner">
      <Container id="xl" className="banner-container">
        <img src={banner} alt="banner" />
      </Container>
    </div>
  );
}
