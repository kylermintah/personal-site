import React from "react";
import Resume from "../components/Resume";
import Content from "../components/Content";
import Spotlight from "../components/Spotlight";

function ResumePage(props) {
  return (
    <div>
      <Spotlight title={props.title} />
      <div style={{ background: "#fff" }}>
        <Content>
          <Resume />
        </Content>
      </div>
    </div>
  );
}

export default ResumePage;
