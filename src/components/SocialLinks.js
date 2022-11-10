import React from "react";
import { Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaVimeo } from "react-icons/fa";

export class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          site: "GitHub",
          icon: <AiFillGithub />,
          link: "https://github.com/kylermintah",
        },
        {
          id: 1,
          site: "LinkedIn",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/in/kyler-mintah-399b78121/",
        },
        {
          id: 2,
          site: "Vimeo",
          icon: <FaVimeo />,
          link: "https://vimeo.com/user73148798",
        },
      ],
    };
  }

  handleCardHover = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <h1 style={{ fontSize: "6em" }} key={item.id}>
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {item.icon}
          </a>
        </h1>
      );
    });
  };

  render() {
    return (
      <Container
        fluid={true}
        style={{
          display: "flex",
          paddingTop:'1rem',
          flexWrap:'wrap',
          maxWidth: "16rem",
          minHeight: "16rem",
          borderRadius: "3rem",
          boxShadow:
            " 0 2px 0 rgba(90, 97, 105, 0.11), 0 4px 8px rgba(90, 97, 105, 0.12), 0 10px 10px rgba(90, 97, 105, 0.06), 0 7px 70px rgba(90, 97, 105, 0.1)",
        }}
      >
        <Row style={{ padding: "3%", justifyContent: "space-evenly" }}>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default SocialLinks;
