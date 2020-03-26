import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SandboxPage extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col className="p-1" lg={8} md={11} sm={12}>
            <h1 className="mb-3">Sandbox</h1>
            <Col id='sketch-container'/>
          </Col>
        </Row>
      </Container>
    );
  }

  async loadManifest () {
    return new Promise(async (resolve, reject) => {
      const manifest = await fetch('../project/manifest.json');
      const data = await manifest.json();
      console.log(data);
      resolve(data);
    });
  }

  componentDidMount() {

    for (const file of ['p5']) {
      const p5 = document.createElement("script");
      p5.src = `${process.env.PUBLIC_URL}/libraries/${file}.js`;
      document.body.appendChild(p5);
    }

    for (const file of ['Global', 'Needle', 'Paper', 'sketch']) {
      const script = document.createElement('script');
      script.src = `${process.env.PUBLIC_URL}/project/buffon-needle/${file}.js`;
      document.body.appendChild(script);
    }

    // const {projectName} = this.props.match.params;
    // const load = this.loadManifest();
    // load.then(data => {
    //   for (const file of data[projectName].fileList) {
    //     const script = document.createElement('script');
    //     script.src = process.env.PUBLIC_URL + '/project/buffon-needle/' + file;
    //     console.log(script);
    //     document.body.appendChild(script);
    //   }
    // });

  }
}

export default SandboxPage;