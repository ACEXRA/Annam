import React from "react";
import { Button, Card, Container } from "react-bootstrap";

const WelcomePage = () => {
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Annam</Card.Title>
          <Button>SignIn</Button>
          <Button>SignUp</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WelcomePage;
