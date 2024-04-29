import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/Logo.png';
import './style.css';

function Navigasi() {

  return (
    <Navbar expand="lg" sticky='top' className="bg-body-tertiary justify-content-center">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={Logo} width="70" height="70" alt="Logo SMP" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/Kontak">Kontak</Nav.Link>
          </Nav>
          <Form className="d-flex justify-content-center">
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigasi;
