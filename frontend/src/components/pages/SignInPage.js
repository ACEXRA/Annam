import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clickHandler = () => {
    navigate("/signUp");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      email: email,
      password: password,
    };
    console.log(obj);
    setEmail("");
    setPassword("");
  };
  return (
    <Container className="my-5" style={{ width: "600px" }}>
      <Card className="bg-secondary">
        <Card.Title className="m-3">Sign In</Card.Title>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text>
                Don't have an account{" "}
                <u style={{ cursor: "pointer" }} onClick={clickHandler}>
                  Click here
                </u>
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignInPage;
