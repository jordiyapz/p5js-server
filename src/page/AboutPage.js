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
          Telkom University
        </ul>
        <a className="d-flex align-self-center my-5 decoration-none" href="https://github.com/jordiyapz"><h3>{'Checkout my Github Repo'}</h3></a>
        </Col>
      </Row>

    </Container>
  );

}

export default AboutPage;