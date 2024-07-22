import React from "react";
import Feed from "../items/Feed";
import { Container } from "react-bootstrap";

const FeedPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Container className="d-flex align-items-center flex-column gap-3">
      {arr.map((a) => {
        return <Feed />;
      })}
    </Container>
  );
};

export default FeedPage;
