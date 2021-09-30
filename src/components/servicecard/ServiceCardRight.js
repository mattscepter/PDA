import React from "react";
import "./ServiceCardRight.scss";

function ServiceCardRight({ image, title }) {
  return (
    <div className="servicecard__right">
      <div className="servicecard__content">
        <img
          data-aos="fade-right"
          src={image}
          alt="house"
          style={{ marginRight: "5vw" }}
          className="servicecardright__img"
        />
        <div className="servicecardright__text" data-aos="fade-left">
          <h2>
            {title}
            <span>
              <div></div>
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ut dicta veniam molestiae quisquam vero consectetur reiciendis iure
            facilis voluptate id, dolor obcaecati impedit amet mollitia
            quibusdam vitae possimus? Sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardRight;
