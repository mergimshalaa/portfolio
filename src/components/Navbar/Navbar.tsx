import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { Menu } from "../menutoggle/ToggleMenu";


const StyledNav = styled(Nav)`
  @media (max-width: 560px) {
    display: none;
  }
`;

export function Navbar() {
  return (
    <NavbarBs bg="dark" className="header sticky-top">
      <div>
        <Menu />
      </div>
      <Container>
        <StyledNav className="me-auto">
          <StyledLink to="/" as={NavLink}>
            <FaHome style={{ marginRight: "5px" }} /> Home
          </StyledLink>
          <StyledLink to="/about" as={NavLink}>
            <FaUser style={{ marginRight: "5px" }} /> About
          </StyledLink>
          <StyledLink to="/projects" as={NavLink}>
            <FaProjectDiagram style={{ marginRight: "5px" }} /> Projects
          </StyledLink>
          <StyledLink to="/resume" as={NavLink}>
            <FaFileAlt style={{ marginRight: "5px" }} /> Resume
          </StyledLink>
        </StyledNav>
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
      background-color: #DBE4C6; 
      transition: all 0.3s linear;
    }
  }
`;
