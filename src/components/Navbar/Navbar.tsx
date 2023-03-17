import { useState } from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt, FaBars, FaTimes } from "react-icons/fa"; // import the icons
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleNavToggle = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <NavbarBs bg="dark" className="header sticky-top">
      <Container>
        <NavToggle onClick={handleNavToggle}>
          {showNavLinks ? <FaTimes /> : <FaBars />}
        </NavToggle>
        <Nav className={`me-auto ${showNavLinks ? "show" : ""}`}>
          <StyledLink to="/" as={NavLink} onClick={handleNavToggle}>
            <FaHome style={{ marginRight: "5px" }} /> Home
          </StyledLink>
          <StyledLink to="/about" as={NavLink} onClick={handleNavToggle}>
            <FaUser style={{ marginRight: "5px" }} /> About
          </StyledLink>
          <StyledLink to="/projects" as={NavLink} onClick={handleNavToggle}>
            <FaProjectDiagram style={{ marginRight: "5px" }} /> Projects
          </StyledLink>
          <StyledLink to="/resume" as={NavLink} onClick={handleNavToggle}>
            <FaFileAlt style={{ marginRight: "5px" }} /> Resume
          </StyledLink>
        </Nav>
      </Container>
    </NavbarBs>
  );
}


const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  color: #a4907c;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.7s ease;
  outline: none;
  position: relative;
  

  &.active {
    color: #fff;
    text-decoration: none;

    &:after {
      content: "";
      position: absolute;
      left: 3;
      bottom: -3px;
      width: 85%;
      height: 3px;
      background-color: #DBE4C6;
    }
  }

  &:hover:not(.active) {
    color: white;

    &:after {
      content: "";
      position: absolute;
      left: 3;
      bottom: -3px;
      width: 85%;
      height: 3px;
      background-color: #DBE4C6; /* Change background-color to green */
      transition: all 0.3s linear;
    }
  }
`;








const NavToggle = styled.button`
  color: #a4907c;
  background: none;
  border: none;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;

  @media (min-width: 651px) {
    display: none;
  }
  
`;
