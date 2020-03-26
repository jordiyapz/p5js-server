import React from 'react';

import Container from 'react-bootstrap/Container';
import Library from '../component/Library';

class ProjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: [
        {
          title: 'Buffon Needle',
          foldername: 'buffon-needle',
          desc: "This is a simulation for Buffon's Needle experiment. The experiment itself was the earliest problem in geometic probability to be solved. By running this experiment in long time, we can get the estimated number for PI."
        }
      ]
    }
  }
  render() {
    return (
      <Container>
        <h1>Libraries:</h1>
        <p>Here is the list</p>
        <Library list={this.state.projectList} />
      </Container>
    );
  }
}

export default ProjectPage;