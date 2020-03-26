import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
  return (
    <footer  className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="my-auto p-0 d-flex align-items-center justify-content-center" md={12}>
            <span>Created by Jordi Yaputra with <i className="fas fa-heart" /></span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;