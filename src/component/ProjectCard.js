import React from 'react';

import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function ProjectCard (props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Nav.Link href={props.href} style={{ padding: 0 }}>
        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/ss-buffon.png'} />
        <Card.Body style={{ color: 'black' }}>
          <Card.Title><b>{props.title}</b></Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
        </Card.Body>
      </Nav.Link>
    </Card>
  );
}

export default ProjectCard;