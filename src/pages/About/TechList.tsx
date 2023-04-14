import { Col, Container, Row } from "react-bootstrap";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiReact, SiSass } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { BsFillBootstrapFill } from "react-icons/bs";
import "./techlist.css";

export function TechList() {
  return (
    <Container className="text-center text-icons">
      <h2 className="header-skills">SKILLS</h2>
      <Row
        style={{
          justifyContent: "center",
          fontSize: "3rem",
          color: "white",
          gap: ".3rem",
        }}
      >
        <Col xs={4} md={2} className="tech-icons border-white">
          <SiReact style={{ color: "#61DBFB" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FontAwesomeIcon icon={faVuejs} style={{ color: "#4FC08D" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript style={{ color: "#007ACC" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" style={{width: '48px'}} alt="javascriptlogo" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png" style={{width: '52px'}} alt="nodejs-svg" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFillBootstrapFill style={{ color: "#0d6efd" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSass style={{ color: "#CC6699" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt style={{ color: "#1572B6" }} />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaHtml5 style={{ color: "#E34F26" }} />
        </Col>
      </Row>
    </Container>
  );
};
