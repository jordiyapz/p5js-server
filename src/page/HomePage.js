import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Hero from '../component/Hero';
import Row from 'react-bootstrap/Row';

function HomePage(props) {

  return (
    <Container fluid={true}>
      <Hero title={props.title} subtitle={props.subtitle}/>
      <Row className="justify-content-center">
        <Button href="/project" variant="outline-dark" className="py-3 px-5">
          <h2>Check my projects >> </h2>
        </Button>
      </Row>
    </Container>
  );

}



export default HomePage;