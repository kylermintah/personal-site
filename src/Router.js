
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import ScrollToTop from "./components/ScrollToTop";
import { Footer } from "./components";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import ResumePage from "./pages/ResumePage";
const Router = ({pageData}) => {
    return ( 
        <BrowserRouter>
        <ScrollToTop />
        <Container className="p-2" fluid={true}>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage
                  title={pageData.home.title}
                  subtitle={pageData.home.subtitle}
                  text={pageData.home.text}
                />
              )}
            />
            <Route
              path="/about"
              exact
              render={() => (
                <AboutPage
                  title={pageData.about.title}
                  subtitle={pageData.about.subtitle}
                />
              )}
            />
            <Route
              path="/projects"
              exact
              render={() => (
                <ProjectPage
                  title={pageData.projects.title}
                  subtitle={pageData.projects.subtitle}
                />
              )}
            />
            <Route
              path="/blog"
              exact
              render={() => (
                <BlogPage
                  title={pageData.garden.title}
                  subtitle={pageData.garden.subtitle}
                />
              )}
            />
            <Route
              path="/contact"
              exact
              render={() => (
                <ContactPage
                  title={pageData.contact.title}
                  text={pageData.contact.text}
                />
              )}
            />
            <Route
              path="/resume"
              exact
              render={() => (
                <ResumePage
                  title={pageData.resume.title}
                  text={pageData.resume.text}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Container>
      </BrowserRouter>
     );
}
 
export default Router;