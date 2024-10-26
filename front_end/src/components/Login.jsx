import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with actual login endpoint
    axios
      .post("http://localhost:8080/auth/login", { email, password })
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("token", response.data.token);
        navigate("/");
        // Optionally redirect or save the auth token to localStorage
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header>Login</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <div>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Link to={"/signup"}>Create Account</Link>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
