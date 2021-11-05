import React from 'react';
import './ServiceCardRight.scss';

function ServiceCardRight({ image, title, text }) {
  return (
    <div className="servicecard__right">
      <div className="servicecard__content">
        <img
          data-aos="fade-right"
          src={image}
          alt="house"
          style={{ marginRight: '5vw' }}
          className="servicecardright__img"
        />
        <div className="servicecardright__text" data-aos="fade-left">
          <h2>
            {title}
            <span>
              <div></div>
            </span>
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardRight;
