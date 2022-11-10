import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import bike from "../assets/kyler-bike.gif";
import google from "../assets/g-logo.gif";

export function Timeline(props) {
  return (
    <VerticalTimeline className="k-overflow" layout="1-column">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <VerticalTimelineElement
          style={{ width: "45rem" }}
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#FFFFFF" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#fff" }}
          icon={
            <img
              className="vertical-timeline-element-icon bounce-in"
              src="data:image/png;base64,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"
              alt="Stripe Logo"
              height={55}
            />
          }
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ fontWeight: "lighter" }}
          >
            Solutions Architect
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <strong>Stripe</strong>
          </h4>
          <p className="k-date">Dec 2021 - Nov 2022</p>

          <p>New York, NY</p>
          <p style={{ fontWeight: "lighter" }}>
            Sales Engineer
            <br />
            Startups & SMB Segment
            <br />
            Startups Solutions Architecture Team <br />
          </p>
        </VerticalTimelineElement>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.44047435623!2d-74.11275565463585!3d40.75897260148295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1668035270661!5m2!1sen!2sus"
          title="video"
          width="30%"
          loading="lazy"
          height="270rem"
          style={{ border: "0", borderRadius: "8%" }}
        />
      </div>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon bounce-in"
            src="https://temperfield.com/wp-content/uploads/2017/09/Microsoft-Logo-icon-png-Transparent-Background.png"
            style={{ objectFit: "cover" }}
            alt="Microsoft logo"
            height={55}
          />
        }
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ fontWeight: "lighter" }}
        >
          Customer Engineer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          <strong>Microsoft</strong>
        </h4>
        <p className="k-date" style={{ color: "gray" }}>
          Sep 2020 - Dec 2021
        </p>
        <p>Dallas, TX</p>

        <p style={{ fontWeight: "lighter" }}>
          Developer <br />
          Azure Apps & Infrastructure
          <br />
          Customer-Facing Development
          <br />
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="Aug 2016 - May 2020"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon bounce-in"
            src="/upenn-emblem.png"
            alt="University of Pennsylvania logo"
            height={55}
          />
        }
        // icon={
        // <FontAwesomeIcon className='fas fa-lg'  icon={faGraduationCap} />}
      >
        <div className="content">
          {/* <img src="https://branding.web-resources.upenn.edu/sites/default/files/simplified-shield-final%20%285%29.png" alt='University of Pennsylvania logo' height={70}/> */}
          <div className="text">
            <h3 style={{ fontWeight: "lighter" }}>Class of 2020 Graduate</h3>
            <h4>
              <strong>University of Pennsylvania</strong>
            </h4>
            <p>Philadelphia, PA</p>
            <p style={{ fontWeight: "lighter" }}>
              B.S.E Electrical Engineering <br /> Computer Science minor
            </p>
          </div>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon bounce-in"
            src={google}
            style={{ objectFit: "cover" }}
            alt="Google logo"
            height={55}
          />
        }
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ fontWeight: "lighter" }}
        >
          Hardware Engineering Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          <strong>Google</strong>
        </h4>
        <p className="k-date" style={{ color: "gray" }}>
          Jun 2019 - Sep 2019
        </p>
        <p>Mointain View, CA</p>

        <p style={{ fontWeight: "lighter" }}>
          Google Pixel Team<br></br>
          Contributed 5,000+ loc to team codebase<br></br>
          Two Android projects with focus on Bluetooth power optimization,
          testing & development ahead of Pixel 4 and Android 10 rollout<br></br>
          Skills: Software Engineering, Android, Java, C++, Python<br></br>
        </p>
        <div style={{ position: "relative", marginLeft: -150 }}>
          <img
            src={bike}
            height={250}
            alt="animation I drew of me riding a bike during the Summer of 2020. Was my main method of transportation then."
          />
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon bounce-in"
            src="/silkblu-logo.png"
            alt="SilkBlu logo"
            height={55}
          />
        }
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ fontWeight: "lighter" }}
        >
          Co-Founder
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          <strong>SilkBlu Technologies LLC</strong>
        </h4>
        <p className="k-date" style={{ color: "gray" }}>
          Jan 2019 - May 2020
        </p>
        <p>Philadelphia, PA</p>

        <p style={{ fontWeight: "lighter" }}>
          5 member software consulting team<br></br>
          UPenn Innovation Prize Top 6 placement<br></br>
          Wharton StartUp Challenge semi-finalists <br></br>
        </p>
        <div style={{ position: "relative", marginLeft: -150 }}></div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon bounce-in"
            src="/upenn-emblem.png"
            alt="University of Pennsylvania logo"
            height={55}
          />
        }
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ fontWeight: "lighter" }}
        >
          Teaching Assistant
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          University of Pennsylvania
        </h4>
        <p className="k-date" style={{ color: "gray" }}>
          Jan 2017 - Jan 2019
        </p>
        <p>Philadelphia, PA</p>
        <p style={{ fontWeight: "lighter" }}>
          Department of Electrical & Systems Engineering
          <br />
          <br />
          ESE 190: Silicon Garage (Spr ‘17, Spr ‘18)
          <br />
          ESE 111: Atoms, Bits, Circuits & Systems (Fall ‘17, Fall ‘18)
          <br />
          ESE 215: Intro to Circuits (Fall ‘18)
          <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        iconStyle={{ background: "#fff", color: "#fff" }}
        icon={
          <img
            className="vertical-timeline-element-icon"
            src="https://simplybook.me/uploads/ststithianscollege/image_files/preview/20cd116a436cd4b7d5ab9daa4e191cbd.png"
            alt="University of Pennsylvania logo"
            height={100}
          />
        }
      >
        <h3
          className="vertical-timeline-element-title"
          style={{ fontWeight: "lighter" }}
        >
          St Stithians Boys' College
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          High School Diploma
        </h4>
        <p className="k-date" style={{ color: "gray" }}>
          Jan 2011 - Dec 2015
        </p>

        <p>
          Johannesburg, South Africa
          <br />
        </p>
        <p style={{ fontWeight: "lighter" }}>
          Deputy Head Boy
          <br />
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
