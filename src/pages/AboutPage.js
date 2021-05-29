import React from "react";
import Content from "../components/Content";
import Spotlight from "../components/Spotlight";
import Timeline from "../components/Timeline";

function AboutPage(props) {
  return (
    <div>
      <Spotlight title={props.title} />
      <div style={{ background: "#fff" }}>
        <Content>
          <p>{props.subtitle}</p>
          <Timeline></Timeline>
        </Content>
      </div>
    </div>
  );
}

export default AboutPage;
