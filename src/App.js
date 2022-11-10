import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ScrollToTop from "./components/ScrollToTop";

import "./App.scss";
import { Footer } from "./components";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
const pageData = require("./content/page-data.json");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = pageData;
    
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <Container className="p-2" fluid={true}>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={this.state.home.title}
                  subtitle={this.state.home.subtitle}
                  text={this.state.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <AboutPage
                  title={this.state.about.title}
                  subtitle={this.state.about.subtitle}
                />
              )}
            />
            <Route
              path="/projects"
              exact
              render={() => (
                <ProjectPage
                  title={this.state.projects.title}
                  subtitle={this.state.projects.subtitle}
                />
              )}
            />
            <Route
              path="/blog"
              exact
              render={() => (
                <BlogPage
                  title={this.state.garden.title}
                  subtitle={this.state.garden.subtitle}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <ContactPage
                  title={this.state.contact.title}
                  text={this.state.contact.text}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
