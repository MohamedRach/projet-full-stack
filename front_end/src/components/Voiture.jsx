import axios from "axios";
import React, { useEffect } from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Voiture = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Function to display success notification
  const notify = () => {
    toast.success("Voiture ajoutée avec succès", {
      position: "top-right",
    });
  };

  // Function to handle form submission
  const submitVoiture = (event) => {
    event.preventDefault();

    // Access form data
    const formData = new FormData(event.target);

    // Get individual form values
    const marque = formData.get("marque");
    const modele = formData.get("modele");
    const couleur = formData.get("couleur");
    const immatricule = formData.get("immatricule");
    const annee = formData.get("annee");
    const prix = formData.get("prix");

    // Create the voiture object
    const voitureData = {
      marque,
      modele,
      couleur,
      immatricule,
      annee: parseInt(annee), // Ensure this is a number
      prix: parseFloat(prix), // Ensure this is a number
    };

    // Get token from localStorage instead of hardcoding
    const token = localStorage.getItem("token");

    // If token is not present, redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // Send POST request using Axios
    axios
      .post("http://localhost:8080/api/voitures", voitureData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Handle successful response
        console.log("Voiture added successfully:", response.data);
        // Show success message
        notify();
        navigate("/list");
      })
      .catch((error) => {
        // Handle error response
        console.error("There was an error adding the voiture:", error);
        // If the error is due to invalid token, redirect to login
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  };

  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header> Ajouter Voiture </Card.Header>
      <Card.Body>
        <Form onSubmit={submitVoiture} id="VoitureFormId">
          <Row>
            <Col>
              <Form.Group controlId="formGridMarque">
                <Form.Label> Marque </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="marque"
                  className="bg-dark text-white"
                  placeholder="Entrez Marque Voiture"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridModele">
                <Form.Label> Modele </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="modele"
                  className="bg-dark text-white"
                  placeholder="Entrez Modele Voiture"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formGridCouleur">
                <Form.Label> Couleur </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="couleur"
                  className="bg-dark text-white"
                  placeholder="Entrez Couleur Voiture"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridImmatricule">
                <Form.Label> Immatricule </Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="immatricule"
                  className="bg-dark text-white"
                  placeholder="Entrez Immatricule"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formGridAnnee">
                <Form.Label> Année </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="annee"
                  className="bg-dark text-white"
                  placeholder="Entrez Année de Fabrication"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formGridPrix">
                <Form.Label> Prix </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="prix"
                  className="bg-dark text-white"
                  placeholder="Entrez Prix Voiture"
                />
              </Form.Group>
            </Col>
          </Row>

          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default Voiture;
