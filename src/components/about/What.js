import React from 'react';
import './What.scss';

function What() {
  return (
    <div className="what">
      <div className="what__background">
        <div className="what__1">
          <h3
            className="what__head heading"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            What is PDA?
          </h3>
          <h4
            className="what__bottom subheading"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Patel Designers and Associates popularly known as PDA is a Lucknow
            based architectural company. We offer consulting assistance in a
            wide area of architectural, structural (Interior/Exterior) &
            construction management projects, housing & township, etc.
          </h4>
        </div>
      </div>
      <div className="what__detail"></div>
    </div>
  );
}

export default What;
