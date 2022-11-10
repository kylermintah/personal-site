import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer
      className="mt-5 border-top justify-content-between p-3"
      style={{
        display: "flex",
        float: "right",
        marginRight: "3rem",
        fontSize: "small",
        color: "gray",
        alignItems: "baseline",
      }}
    >
      {/* <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}></Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            ❤{" "}
            <a
              href="https://www.youtube.com/watch?v=zzH4rV08TLI"
              target="_blank"
              rel="noreferrer"
            >
              🕷
            </a>{" "}
            Kyler Mintah 2022
          </Col>
        </Row>
      </Container> */}
      <p>❤</p>
      <a
        href="https://www.youtube.com/watch?v=zzH4rV08TLI"
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "Arial",
          fontSize: "x-large",
          paddingInline: "0.3rem",
          textDecoration: "none",
        }}
      >
        🕷
      </a>{" "}
      <p style={{ fontFamily: "Arial" }}>Kyler Mintah (2022)</p>
    </footer>
  );
}

export default Footer;
