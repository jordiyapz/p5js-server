import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col lg={8} md={9} sm={12}>
            { props.title && <h1 className="display-3 display-lg-1 font-weight-bold">{props.title}</h1>}
            { props.subtitle && <h3 className="display-4 font-weight-lighter">{props.subtitle}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;