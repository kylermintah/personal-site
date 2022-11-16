import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ProjectContent from "./ProjectContent";

export function Resume() {
  const [isFileLoaded, setIsFileLoaded] = useState(false);

  return (
    <div
      style={{
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button
        onClick={() =>
          (window.location.href =
            "https://drive.google.com/uc?export=download&id=1cZNS28AzOq6S9Z1n_f23GnNMKGQ1iGWa")
        }
        style={{
          background: "#007BFF",
          verticalAlign: "center",
          outlineColor: "#007BFF",
          color: "white",
          fontWeight: "bold",
          fontSize: "large",
          borderRadius: "999px",
          border: "2px solid",
          height: "3rem",
          width: "20rem",
          paddingInline: "0.7rem",
          marginBottom: "3rem",
        }}
      >
        Download Resume
      </button>

      {/* <Spinner animation="border" hidden={isFileLoaded}></Spinner> */}
      <Skeleton
        hidden={isFileLoaded}
        style={{ marginTop: "-22rem", marginBottom:'-90rem', borderRadius:"2%"  }}
        width="53rem"
        height="100rem"
        animation='wave'
      ></Skeleton>

      <object
        onLoadStart={() => setIsFileLoaded(false)}
        onLoad={() => setIsFileLoaded(true)}
        data="https://drive.google.com/uc?export=view&id=1cZNS28AzOq6S9Z1n_f23GnNMKGQ1iGWa"
        type="application/pdf"
        width="850rem"
        height="1135rem"
        style={{ display: "flex", justifyContent: "center", borderRadius:"2%" }}
      >
        <p
          style={{
            fontFamily: "open sans",
            fontWeight: "bold",
            fontSize: "large",
          }}
        >
          Or{" "}
          <a
            href="https://drive.google.com/uc?export=view&id=1cZNS28AzOq6S9Z1n_f23GnNMKGQ1iGWa"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            View Here
          </a>
        </p>
      </object>
    </div>
  );
}

export default Resume;
