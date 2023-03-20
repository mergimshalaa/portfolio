import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHome, FaUser, FaProjectDiagram, FaFileAlt } from "react-icons/fa";


interface NavbarLinksProps {
    handleClose: () => void;
  }
  

export function NavbarLinks({ handleClose }: NavbarLinksProps)  {
  return (
    <Nav className="flex-column">
      <StyledLink onClick={handleClose} to="/" exact as={NavLink}>
        <FaHome style={{ marginRight: "5px" }} /> Home
      </StyledLink>
      <StyledLink onClick={handleClose} to="/about" as={NavLink} >
        <FaUser style={{ marginRight: "5px" }} /> About
      </StyledLink>
      <StyledLink onClick={handleClose} to="/projects" as={NavLink} >
        <FaProjectDiagram style={{ marginRight: "5px" }} /> Projects
      </StyledLink>
      <StyledLink onClick={handleClose} to="/resume" as={NavLink}>
        <FaFileAlt style={{ marginRight: "5px" }} /> Resume
      </StyledLink>
    </Nav>
  );
}


const StyledLink = styled(NavLink)<{ exact?: boolean }>`
  color: white;
  margin-right: 10px;
  margin-bottom: 30px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #a4907c;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.7s ease;
  outline: none;
  position: relative;
  

  &.active {
    color: #fff;
    text-decoration: none;
  }

  &:hover:not(.active) {
    color: white;
  }
`;
