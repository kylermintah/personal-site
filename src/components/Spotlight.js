import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export function Spotlight(props) {
  return (
    <div className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true} style={{ marginTop: "0rem" }}>
        <Row className="justify-content-center">
          <Col md={9} sm={12}>
            {props.title && (
              <h1 className="display-3 font-weight-bolder pt-5">
                {props.title}
              </h1>
            )}
            {props.subtitle && (
              <h3 className="display-4 font-weight-light">{props.subtitle}</h3>
            )}
            {props.text && (
              <h3 className="lead font-weight-light">{props.text}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Spotlight;
