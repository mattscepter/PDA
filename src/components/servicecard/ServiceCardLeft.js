import React from 'react';
import './ServiceCardLeft.scss';

function ServiceCardLeft({ image, title, text }) {
  return (
    <div className="servicecard__left">
      <div className="servicecard__content">
        <div className="servicecardleft__text" data-aos="fade-left">
          <h2>
            {title}
            <span>
              <div></div>
            </span>
          </h2>
          <p>{text}</p>
        </div>
        <img
          src={image}
          alt="house"
          style={{ marginLeft: '5vw' }}
          className="servicecardleft__img"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
}

export default ServiceCardLeft;
