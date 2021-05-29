import React from "react";
import Content from "../components/Content";
import Spotlight from "../components/Spotlight";
import Projects from "../components/Projects";

function ProjectPage(props) {
  return (
    <div>
      <Spotlight title={props.title} />
      <div style={{ background: "#fff" }}>
        <Content>
          <p>{props.subtitle}</p>
          <Projects></Projects>
        </Content>
      </div>
    </div>
  );
}

export default ProjectPage;
