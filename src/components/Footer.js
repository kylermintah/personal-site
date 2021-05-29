import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
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
            Kyler Mintah 2020
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
