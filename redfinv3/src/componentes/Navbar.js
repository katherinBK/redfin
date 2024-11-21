import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Redfin</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#proceso" >Caracteristicas</Nav.Link>
            <Nav.Link href="#fundamentos">Como funciona?</Nav.Link>
            <Nav.Link href="#fundamentos">FAQ</Nav.Link>
            <NavDropdown title="Mas" id="collapsible-nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
              <NavDropdown.Item href="#">
              Mas
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Nosotros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;