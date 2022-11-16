import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ThemeContext from "../utils/ThemeContext";
import { useContext } from "react";

export function Spotlight(props) {
  const { themeName } = useContext(ThemeContext);

  return (
    <div className=" bg-transparent j 95    umbotron-fluid p-0">
      <Container fluid={true} style={{ marginTop: "0rem" }}>
        <Row className="justify-content-center">
          <Col md={9} sm={12}>
            {themeName === "spiderverse"
              ? props.title && (
                  <h1
                    className="glitch display-3 font-weight-bolder"
                    style={{ paddingTop: "2.9rem" }}
                  >
                    <span style={{ paddingTop: "2.9rem" }} aria-hidden="true">
                      {props.title}
                    </span>
                    {props.title}
                    <span style={{ paddingTop: "2.9rem" }} aria-hidden="true">
                      {props.title}
                    </span>
                  </h1>
                )
              : themeName === "normal"
              ? props.title && (
                  <h1 className="display-3 font-weight-bolder pt-5">
                    {props.title}
                  </h1>
                )
              : null}
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
