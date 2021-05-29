import { Chip } from "@material-ui/core";
import React from "react";
import { Row } from "react-bootstrap";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const projects = require("../content/projects.json");

export default function ProjectContent() {
  return (
    <>
      {projects.map((project) => (
        <VerticalTimelineElement
          contentStyle={{ background: "#2D364F", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3A465C" }}
          date={project.date}
          dateClassName="k-date-2"
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src={project.icon}
              alt={project.title}
              height={55}
            />
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: "lighter" }}
          >
            {project.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>{project.subtitle}</strong>
          </h4>
          <p>{project.category}</p>
          {project.highlight.length > 0 ? (
            <p
              style={{ fontWeight: "lighter", WebkitTextFillColor: "#FFBC00" }}
            >
              {project.highlight} <br />
            </p>
          ) : null}
          {!project.marker ? (
            <p style={{ fontWeight: "lighter" }}>
              {project.description} <br />
              {project.skills ? (
                <div>
                  <hr className="solid" color="#7B7D82"></hr>

                  <Row
                    style={{ padding: "0%", justifyContent: "space-evenly" }}
                  >
                    {project.skills.map((skill) => (
                      <Chip
                        label={skill}
                        style={{ padding: "0.1rem", marginTop: "0.5rem" }}
                      ></Chip>
                    ))}
                  </Row>

                  <hr className="solid" color="#7B7D82"></hr>
                </div>
              ) : null}
              {project.iframe_embed_link ? (
                <div className="iframe-container">
                  <iframe
                    src={project.iframe_embed_link}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                  />
                </div>
              ) : null}
              {project.image.length > 0 ? (
                <div>
                  <img
                    style={{ maxWidth: "20em" }}
                    src={project.image}
                    alt={`${project.title} preview`}
                  ></img>
                </div>
              ) : null}
              {!project.marker ? null : (
                <div>
                  <br />
                  <br />
                </div>
              )}
              {project.action_heading ? (
                <>
                  <br />
                  <strong>{project.action_heading}</strong>
                  <br />
                </>
              ) : null}
              {project.actions ? (
                <>
                  <br />
                  {project.actions.map((action) => (
                    <>
                      <a
                        className="link"
                        href={action.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <Chip
                          label={<strong>{action.text}</strong>}
                          color="primary"
                        ></Chip>
                      </a>
                      <br />
                      <br />
                    </>
                  ))}
                </>
              ) : null}
              {project.teammates.length > 0 ? (
                <>
                  <strong>
                    Teammate(s):
                    {project.teammates.map((teammate) => (
                      <a
                        className="link"
                        href={teammate.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {teammate.name}{" "}
                      </a>
                    ))}
                  </strong>
                  <br />
                </>
              ) : null}
            </p>
          ) : null}
        </VerticalTimelineElement>
      ))}
    </>
  );
}
