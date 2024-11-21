import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../Assetsg/Hero.jpe'; // Importa la imagen
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hero = () => {
  return (
    <div id='home'
      className="hero"
      style={{ 
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw', 
        height: '100vw', 
        maxHeight: '100vh', 
        padding: '0', 
        color: 'white',
        textAlign: 'center',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Container>
        <Row>
          <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Comienza AHora</Button>
      </Card.Body>
    </Card>
    </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;