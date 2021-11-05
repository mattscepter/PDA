import React from 'react';
import './AboutSection.scss';
import Counter from '../counter/Counter';

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
              We have been in the same field from since 1991 and we confidently
              deal with design with complexity. With vision and precision we
              bring solution and masterfull execution.
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
        <Counter
          end={
            new Date().toLocaleString('en-US', {
              year: 'numeric',
            }) - 1991
          }
          text="Years"
        />
        <Counter end={2100} text="Projects" />
        <Counter end={1200} text="Satisfied Clients" />
      </div>
    </div>
  );
}

export default AboutSection;
