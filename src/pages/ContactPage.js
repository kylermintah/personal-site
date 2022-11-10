import React from "react";
import Content from "../components/Content";
import Spotlight from "../components/Spotlight";

function ContactPage(props) {
  return (
    <div className="grid-container " style={{ height: "42rem", display: 'flex', flexDirection:'column', justifyContent:'center' }}>
      <Spotlight
        title={props.title}
        subtitle={props.subtitle}
        text={props.text}
      />
      <div style={{height:'2rem'}}></div>
      <Content>
        <div
          style={{
            fontSize: "large",
            fontFamily: "Open Sans",
            fontWeight: "bold",
          }}
        >
          You can email me at:<br></br>
          <a
            href="mailto:kylermintah@gmail.com?subject=[Reaching Out]"
            className=".App-link"
          >
            kylermintah@gmail.com
          </a>
        </div>
      </Content>
  
    </div>
  );
}

export default ContactPage;
