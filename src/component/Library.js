import React from 'react';

import Container from 'react-bootstrap/Container';
import ProjectCard from '../component/ProjectCard';

class Library extends React.Component {

  createList (list) {
    const container = []
    const listItems = [];

    for (let i = 0; i < list.length; i++) {
      const li = list[i];
      listItems.push(<ProjectCard key={i} href={"/sandbox/" + li.foldername} title={li.title} desc={li.desc} />);
    }

    container.push(<Container>{listItems}</Container>);

    return container;
  }

  render() {
    return (
      <Container>

        {this.createList(this.props.list)}

      </Container>
    );
  }
}

export default Library;