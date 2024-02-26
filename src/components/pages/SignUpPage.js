import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const SignUpPage = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <Container>
      <Card className="bg-secondary">
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignUpPage;
