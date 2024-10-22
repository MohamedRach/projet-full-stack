import React, { useState, useEffect } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const VoitureUpdate = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [voiture, setVoiture] = useState({
    marque: "",
    modele: "",
    couleur: "",
    immatricule: "",
    annee: "",
    prix: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if token is missing
    } else {
      loadVoiture(token);
    }
  }, [navigate]);
  const notify = () => {
    toast.success("update successful", {
      position: "top-right",
    });
  };
  const loadVoiture = () => {
    const token = localStorage.getItem("token"); // Replace with actual Bearer token

    axios
      .get(`http://localhost:8080/api/voitures/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setVoiture(response.data);
      })
      .catch((error) => {
        console.error("Error loading voiture:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoiture((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitVoiture = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token"); // Replace with actual Bearer token

    axios
      .put(`http://localhost:8080/api/voitures/${id}`, voiture, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Car updated successfully:", response.data);
        // Optionally redirect to car list or show a success message
        notify();
        navigate("/list");
      })
      .catch((error) => {
        console.error("Error updating voiture:", error);
      });
  };

  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header>Update Voiture</Card.Header>
      <Card.Body>
        <Form onSubmit={submitVoiture}>
          <Row>
            <Col>
              <Form.Group controlId="formGridMarque">
                <Form.Label>Marque</Form.Label>
                <Form.Control
                  type="text"
                  name="marque"
                  value={voiture.marque}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridModele">
                <Form.Label>Modele</Form.Label>
                <Form.Control
                  type="text"
                  name="modele"
                  value={voiture.modele}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formGridCouleur">
                <Form.Label>Couleur</Form.Label>
                <Form.Control
                  type="text"
                  name="couleur"
                  value={voiture.couleur}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridImmatricule">
                <Form.Label>Immatricule</Form.Label>
                <Form.Control
                  type="text"
                  name="immatricule"
                  value={voiture.immatricule}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formGridAnnee">
                <Form.Label>Année</Form.Label>
                <Form.Control
                  type="number"
                  name="annee"
                  value={voiture.annee}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridPrix">
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  type="number"
                  name="prix"
                  value={voiture.prix}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Update Voiture
          </Button>
        </Form>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default VoitureUpdate;
