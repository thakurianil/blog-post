import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/footer";
import { Col, Container, Row, Image } from "react-bootstrap";

const PostPage = () => {
  // Sample data for the article
  const article = {
    title: "Understanding React and Bootstrap",
    content: `
      React and Bootstrap can work seamlessly together to create beautiful 
      and responsive web pages. In this post, we will explore how to create 
      an article page using React components and Bootstrap for styling.
      Let's dive into how to structure a page to display the article with an image, 
      title, content, and author details.
    `,
    author: "John Doe",
    date: "October 16, 2024",
    imageUrl: "/blog1.jpg", // Placeholder image
  };

  return (
    <>
      <Header />
      <Container className="mt-5">
        {/* Article Image with height restriction */}
        <Row>
          <Col>
            <Image
              src={article.imageUrl}
              alt="Article"
              fluid
              className="mb-4 rounded"
              style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
            />
          </Col>
        </Row>

        {/* Title, Content, and Author Section */}
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="mb-3">{article.title}</h1>
            <hr />
            <p>{article.content}</p>
            <div className="author-info mt-4">
              <p>
                <strong>Written by:</strong> {article.author}
              </p>
              <p>
                <small>{article.date}</small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PostPage;
