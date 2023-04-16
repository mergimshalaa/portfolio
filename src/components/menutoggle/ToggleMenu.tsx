import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import './menu.css';
import styled from 'styled-components';
import { NavbarLinks } from './NavbarLinks';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


export function Menu() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isMobile && (
        <Button className="menu-button" onClick={handleShow}>
          <FaBars style={{ color: 'white', fontSize: '1.5rem' }} />
        </Button>
      )}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{backgroundColor: 'rgb(68 68 68 / 35%)'}}>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-custom">
          <NavbarLinks handleClose={handleClose} />
          <Icons style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <a href="https://github.com/mergimshalaa">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/mergim-shala-230691220/">
              <FaLinkedin size={40} />
            </a>
            <a href="mailto:m3rgiim@hotmail.com">
              <FaEnvelope size={40} />
            </a>
          </Icons>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  a {
    margin-right: 20px;
    color: white;
    transition: color 0.3s;
    &:hover {
      color: #b3b3b3;
    }
  }
`;
