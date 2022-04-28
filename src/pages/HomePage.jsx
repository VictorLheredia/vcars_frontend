import { Container } from "react-bootstrap";
import CarBox from "../modules/CarBox";
import Banner from "../components/Banner";

export default function HomePage() {
  return (
    <>
      <Banner></Banner>
      <Container id="md">
        <CarBox cardLine={4}></CarBox>
      </Container>
    </>
  );
}
