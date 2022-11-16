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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ minWidth: "30rem" }}>{props.subtitle}</p>
            <button
              onClick={() => {
                window.location.href = "/resume";
              }}
              style={{
                background: "#007BFF",
                verticalAlign: "center",
                outlineColor: "#007BFF",
                color: "white",
                fontWeight: "bold",
                borderRadius: "999px",
                border: "2px solid",
                height: "3rem",
                width: "15rem",
                paddingInline: "0.7rem",
                marginBottom: "3rem",
                marginTop: "2rem",
                alignSelf: "center",
              }}
            >
              View/Download Resume
            </button>
          </div>
          <Timeline></Timeline>
        </Content>
      </div>
    </div>
  );
}

export default AboutPage;
