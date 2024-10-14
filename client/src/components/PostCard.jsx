import React from "react";
import { Button, Card } from "react-bootstrap";

const PostCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <div style={{ width: "100%", height: "18rem", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src="/blog1.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCard;
