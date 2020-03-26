import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function AboutPage(props) {

  return (
    <Container fluid={true}>
      <Row className="p-0" >
        <Col className="d-flex align-items-between" lg={5} md={6} sm={6}>
          <Image src={`${process.env.PUBLIC_URL}/img/profile.jpg`} fluid />
        </Col>
        <Col className="d-flex flex-column" lg={7} md={6} sm={6}>
          <h1 className="display-lg-1 display-sm-3 mb-4">JORDI YAPUTRA</h1>
          <h3>Education</h3>
          <ul>
            <li>Telkom University</li>
            <li>Self taught junior backend and frontend web developer</li>
            <li>Self taught junior embedded system developer</li>
            <li>Aeromodelling and Payload Telemetry Research Group assistant</li>
          </ul>
          <a className="d-flex align-self-center mt-2 decoration-none" href="https://github.com/jordiyapz"><h3>{'Checkout my Github Repo'}</h3></a>
        </Col>
      </Row>
      <Row className="p-0 mt-5 justify-content-center" >
        <h1 className="display-3" style={{color: 'grey'}}>Coming soon</h1>
      </Row>

    </Container>
  );

}

export default AboutPage;