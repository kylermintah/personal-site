import React from "react";
import CardInfo from "./CardInfo";

export function Card(props) {
  const displayAnyway = window.matchMedia("(max-width: 1026px)").matches;

  return (
    <div>
      <div
        className="d-inline-block k-card "
        style={{ marginTop: "20%" }}
        onMouseOver={(e) => props.onHover(props.item)}
        onTouchStartCapture={(e) => props.onHover(props.item)}
      >
        <a
          className="k-link "
          href={props.item.link}
          target="_blank"
          rel="noreferrer"
        >
          {/* <a className="k-link " href={props.item.link} > */}

          <div
            className="k-card-background inner-shadow"
            style={{ backgroundImage: `url(${props.item.image})` }}
          ></div>
          {/* <img className = 'k-card-image' src={props.item.image} alt={props.item.image} unselectable="on"/> */}
        </a>
      </div>
      {(displayAnyway || props.item.selected) && (
        <CardInfo
          title={props.item.title}
          subtitle={props.item.subtitle}
          opacity={0}
        />
      )}
    </div>
  );
}

export default Card;
