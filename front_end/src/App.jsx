import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import Bienvenue from "./components/Bienvenue";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const marginTop = {
  marginTop: "20px",
};
function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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
