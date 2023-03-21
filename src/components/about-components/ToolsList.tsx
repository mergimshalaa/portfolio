import { Col, Container, Row } from "react-bootstrap";
import "./techlist.css";
import { DiVisualstudio, FiFigma } from "react-icons/all";

export function ToolsList() {
  return (
    <Container className="text-center text-icons">
      <h2>
        TOOLS
      </h2>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
          fontSize: "3rem",
          color: "white",
        }}
      >
      <Col xs={4} md={2} className="tech-icons">
          <DiVisualstudio style={{ color: "#007ACC" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FiFigma style={{ color: "#F24E1E" }} />
        </Col>
      </Row>
    </Container>
  );
}
