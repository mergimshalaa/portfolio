import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import './menu.css';
import { NavbarLinks } from './NavbarLinks';

export function Menu() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 560 });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isMobile && (
        <Button className="menu-button" onClick={handleShow}>
          <FaBars style={{ color: 'white', fontSize: '1.2rem' }} />
        </Button>
      )}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-custom">
          <NavbarLinks handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
