import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Redfin. Todos los derechos reservados.</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ display: 'inline', margin: '0 15px' }}>
                <a href="#acerca" style={{ color: '#ddd', textDecoration: 'none' }}>Acerca de</a>
              </li>
              <li style={{ display: 'inline', margin: '0 15px' }}>
                <a href="#proceso" style={{ color: '#ddd', textDecoration: 'none' }}>Proceso</a>
              </li>
              <li style={{ display: 'inline', margin: '0 15px' }}>
                <a href="#contact" style={{ color: '#ddd', textDecoration: 'none' }}>Contacto</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;