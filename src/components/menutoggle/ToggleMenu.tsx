import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import './menu.css';

export function Menu() {
  const [show, setShow] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 760 });

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-body-custom">
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
