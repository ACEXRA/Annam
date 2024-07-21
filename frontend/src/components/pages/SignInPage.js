import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const SignInPage = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group>
              <Button>Submit</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SignInPage;
