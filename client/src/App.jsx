import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import Header from "./components/Navbar";
import PostCard from "./components/PostCard";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
        style={{ height: "auto" }}
      >
        <Row>
          <Col className="text-center">
            <h1>Blog Application Template</h1>
            <hr />
            <Button>CLICK HERE</Button>
            <HomePage />
            <div className="d-flex gap-4">
              <PostCard />
              <PostCard />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
