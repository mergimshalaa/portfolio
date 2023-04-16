import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { FaFileAlt, FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "../menutoggle/ToggleMenu";
import "./navbar.css";

const StyledNav = styled(Nav)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export function Navbar() {
  return (
    <NavbarBs className="header sticky-top">
      <div>
        <Menu />
      </div>
      <Container className="d-flex justify-content-end align-items-center flex-grow-1" style={{paddingRight: '55px'}}>
        <StyledNav>
          <StyledLink to="/" as={NavLink}>
            <FaHome style={{ marginRight: "8px" }} /> Home
          </StyledLink>
          <StyledLink to="/about" as={NavLink}>
            <FaUser style={{ marginRight: "8px" }} /> About
          </StyledLink>
          <StyledLink to="/projects" as={NavLink}>
            <FaProjectDiagram style={{ marginRight: "8px" }} /> Projects
          </StyledLink>
          <StyledLink to="/resume" as={NavLink}>
            <FaFileAlt style={{ marginRight: "8px" }} /> Resume
          </StyledLink>
        </StyledNav>
      </Container>
    </NavbarBs>
  );
}

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 300;
  padding: 0px 25px;
  color: #B3B3B3;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.7s ease;
  outline: none;
  position: relative;
  
  &.active {
    color: #fff;
    text-decoration: none;
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.7);
  }

  &:hover:not(.active) {
    color: white;
  }
`;
