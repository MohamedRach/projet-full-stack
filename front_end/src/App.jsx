import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import Bienvenue from "./components/Bienvenue";
import Footer from "./components/Footer";
const marginTop = {
  marginTop: "20px",
};
function App() {
  return (
    <div className="App text-center">
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Bienvenue />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
