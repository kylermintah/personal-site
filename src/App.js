import React from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import './App.css';
import {Footer} from './components/';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import DigitalGardenPage from './pages/DigitalGardenPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Kyler Mintah',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Kyler Mintah',
        subtitle: '',
        text: 'Customer Engineer | Developer ',
      },
      about: {
        title: 'About Me',
        subtitle: 'born in Virginia, USA, raised in Johannesburg, South Africa, recently spotted around Philadelphia, USA',
        text: '',
      },
      projects: {
        title: 'What keeps me busy',
        subtitle: 'Projects I\'ve been able to work on solo and with extraordinary teammates',
        text: '',
      },
      contact: {
        title: 'Get in touch!',
        subtitle: '',
        text: '',
      },
      garden: {
        title: 'Digital Garden 🌱',
        subtitle: 'A collection of my thoughts, how-tos and budding ideas',
        text: '',
      }
    }
  }

  render() {
    return (

      <Router>

        <Container className='p-2' fluid={true} >

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand className='nav-link'>
              <a href='/' style={{color:'black', fontWeight:'bolder'}}>KM</a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/garden'>Digital Garden</Link>
                <Link className="nav-link" to="/">Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle} />} />
          <Route path="/projects" exact render={() => <ProjectPage title={this.state.projects.title} subtitle={this.state.projects.subtitle} />} />
          <Route path="/garden" exact render={() => <DigitalGardenPage title={this.state.garden.title} subtitle={this.state.garden.subtitle}/>} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path="/yaml-templates" exact render={() => <BlogPage  />} />

          <Footer className='footer' >

          </Footer>

        </Container>
      </Router>
    );
  }

}

export default App;
