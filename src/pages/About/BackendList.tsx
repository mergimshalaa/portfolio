import { Col, Container, Row } from "react-bootstrap";
import { techItems } from "../../data/backEndList";
import "./techlist.css";

export function BackendList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-skills">BACKEND</h2>
      <Row
        style={{
          justifyContent: "center",
          fontSize: "3rem",
          color: "white",
          gap: ".3rem",
        }}
      >
        {techItems.map((techItem, index) => (
          <Col xs={4} md={2} key={index} className="tech-icons border-white">
            <techItem.image size="50px" color={techItem.color} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
