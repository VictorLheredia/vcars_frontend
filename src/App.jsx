import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <Container>
        <AppRoutes></AppRoutes>
      </Container>
    </div>
  );
}

export default App;
