import React from "react";
import { Garden } from "../components/";
import { Spotlight } from "../components/";
import { Content } from "../components/";

function DigitalGardenPage(props) {
  return (
    <div>
      <Spotlight title={props.title} text={props.subtitle} />
      <Content>
        {/* <a href='https://maggieappleton.com/garden-history' target='_blank' rel='noreferrer'> What is a digital garden?</a> */}
        <div style={{ height: 48 }}></div>
        <Garden />
      </Content>
    </div>
  );
}

export default DigitalGardenPage;
