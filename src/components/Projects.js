import * as React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProjectContent from "./ProjectContent";

export function Projects() {
  return (
    <VerticalTimeline className="k-overflow" layout="2-columns">
      <ProjectContent />
    </VerticalTimeline>
  );
}

export default Projects;
