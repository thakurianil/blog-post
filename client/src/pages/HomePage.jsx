import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Navbar";
import PostCard from "../components/PostCard";
import Footer from "../components/footer";

const HomePage = () => {
  const post = {
    id: "id",
    title: "Post Title",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    author: "John Doe",
  };

  return (
    <>
      <Header />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ width: "66%", margin: "0 auto" }}
      >
        <Row className="mt-4">
          <Col className="text-center">
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
              <PostCard post={post} />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
