import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';


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
        title: 'Into the Kyler-verse',
        subtitle: 'How I spend my time',
        text: 'This website is still under development. Stay tuned!',
      },
      about: {
        title: 'About Me',
        subtitle: 'born in Virginia, USA, raised in Johannesburg, South Africa, recently spotted in Philadelphia, USA',
        text: '',
      },
      contact: {
        title: 'Get in touch!',
        subtitle: '',
        text: '',
      }
    }
  }

  render() {
    return (

      <Router>

        <Container className='p-2' fluid={true}>

          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>
              <a href='/'>Kyler Mintah</a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>

          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />


          <Footer>

          </Footer>

        </Container>
      </Router>
    );
  }

}

export default App;
