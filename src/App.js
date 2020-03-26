import React from 'react'
import {
  BrowserRouter as
    Router, Route, Link
} from 'react-router-dom';

import Navbar       from 'react-bootstrap/Navbar';
import Nav          from 'react-bootstrap/Nav';
import Container    from 'react-bootstrap/Container';
import Footer       from './component/Footer';

import HomePage     from './page/HomePage';
import ProjectPage  from './page/ProjectPage';
import SandboxPage  from './page/SandboxPage';
import AboutPage    from './page/AboutPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Jordi\'s Project',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Welcome,',
        subtitle: 'This app is for my project made with P5.js'
      }
    }
  }

  render() {
    return (
      <Router>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />

        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' expand='md'>
            <Navbar.Brand href='/'>Yapz</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/project'>Project</Link>
                <Link className='nav-link' to='/about'>About</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact  render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle}/>} />
          <Route path='/project' render={() => <ProjectPage />} />
          <Route path='/sandbox/:projectName' render={({match}) => <SandboxPage match={match} />} />
          <Route path='/about'><AboutPage /></Route>

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;