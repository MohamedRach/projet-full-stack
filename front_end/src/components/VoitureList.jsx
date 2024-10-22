import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Table, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

const VoitureListe = () => {
  const [voitures, setVoitures] = useState([]); // Store fetched cars
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (!token) {
      navigate("/login"); // Redirect to login if token is not set
      return;
    }

    // Function to fetch data from API
    const fetchVoitures = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/voitures", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Update state with the fetched data
        setVoitures(response.data._embedded.voitures);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVoitures();
  }, [navigate]);

  // Delete a car by id
  const handleDelete = async (link) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    try {
      await axios.delete(link, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Remove the deleted car from the state
      setVoitures((prevVoitures) =>
        prevVoitures.filter((voiture) => voiture._links.self.href !== link),
      );
    } catch (error) {
      console.error("There was an error deleting the car!", error);
    }
  };

  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header>
        <FontAwesomeIcon icon={faList} /> Liste Voitures
      </Card.Header>
      <Card.Body>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : voitures.length === 0 ? (
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>Marque</th>
                <th>Modele</th>
                <th>Couleur</th>
                <th>Annee</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr align="center">
                <td colSpan="6">Aucune Voiture n’est disponible</td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>Marque</th>
                <th>Modele</th>
                <th>Couleur</th>
                <th>Annee</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {voitures.map((voiture) => (
                <tr key={voiture.id}>
                  <td>{voiture.marque}</td>
                  <td>{voiture.modele}</td>
                  <td>{voiture.couleur}</td>
                  <td>{voiture.annee}</td>
                  <td>{voiture.prix}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(voiture._links.self.href)}
                    >
                      Delete
                    </Button>{" "}
                    <Link
                      to={`/update/${voiture._links.self.href.split("/").pop()}`}
                    >
                      <Button variant="primary" size="sm">
                        Update
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card.Body>
    </Card>
  );
};

export default VoitureListe;
