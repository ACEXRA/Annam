import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Feed = () => {
  const [count, setCount] = useState(0);

  const countHandler = (status) => {
    if (status === "increment") {
      setCount(count + 1);
    } else if (status === "decrement") {
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    }
  };

  return (
    <Card style={{ maxWidth: "600px" }}>
      <Card.Body>
        <Card.Title>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <h4>Marriage Function</h4>
            <h6>username</h6>
          </div>
        </Card.Title>
        <Card.Text>
          <hr />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus,
          neque vel aliquam tincidunt, augue risus malesuada tortor, tempor
          condimentum purus purus commodo mauris. Aliquam fermentum urna eget
          mauris porta, id tempus metus congue. Morbi pharetra diam sit amet
          posuere consequat.
          <div className="my-1">Location : Egmore mall</div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <Button onClick={() => countHandler("decrement")}>-</Button>
              <div className="mx-2">count : {count}</div>
              <Button onClick={() => countHandler("increment")}>+</Button>
            </div>
            <div className="d-flex align-items-center">
              Expiry Date : 23-12-2024
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Feed;
