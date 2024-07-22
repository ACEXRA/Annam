import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passError, setPassError] = useState("");

  const clickHandler = () => {
    navigate("/signIn");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      setPassError("Confirm Password is not same as password");
      return;
    }
    const obj = {
      email: emailAddress,
      name: name,
      password: password,
    };
    console.log(obj);
    setEmailAddress("");
    setName("");
    setPassword("");
    setConfirmPassword("");
    setPassError("");
  };
  return (
    <Container className="my-5" style={{ maxWidth: "600px" }}>
      <Card className="bg-secondary">
        <Card.Title className="m-3">Sign Up</Card.Title>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                required
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passError && <div style={{ color: "red" }}>{passError}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Text>
                Already have an account ?{" "}
                <u style={{ cursor: "pointer" }} onClick={clickHandler}>
                  Click here
                </u>
              </Form.Text>
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUpPage;
