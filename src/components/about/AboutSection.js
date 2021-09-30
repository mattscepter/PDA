import React from "react";
import "./AboutSection.scss";
import Counter from "../counter/Counter";

function AboutSection() {
  return (
    <div className="aboutsection">
      <div className="aboutsection__top">
        <div className="aboutsection__card1">
          <div
            className="aboutsection__bottom subheading"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              quia magnam corporis cumque deserunt. Dolor porro reiciendis
              dignissimos totam at!
            </p>
          </div>
        </div>
        <div className="aboutsection__card2">
          <p
            className="aboutsection__head heading"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Why work with us?
          </p>
        </div>
      </div>
      <div
        className="aboutsection__exp"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Counter end={29} text="Years" />
        <Counter end={945} text="Projects" />
        <Counter end={395} text="Satisfied Clients" />
      </div>
    </div>
  );
}

export default AboutSection;
