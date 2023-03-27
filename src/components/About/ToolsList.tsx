import { Col, Container, Row } from "react-bootstrap";
import "./techlist.css";
import { DiVisualstudio, FiFigma, DiGit, FaGithub } from "react-icons/all";

export function ToolsList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-tools">
        TOOLS
      </h2>
      <Row
        style={{
          justifyContent: "center",
          paddingBottom: "50px",
          fontSize: "3rem",
          color: "white",
          gap: '.3rem'
        }}
      >
      <Col xs={4} md={2} className="tech-icons">
          <DiVisualstudio style={{ color: "#007ACC" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit style={{ color: "red" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaGithub/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FiFigma style={{ color: "#F24E1E" }} />
        </Col>
      </Row>
    </Container>
  );
}
