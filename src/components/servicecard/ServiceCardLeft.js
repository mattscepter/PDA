import React from "react";
import "./ServiceCardLeft.scss";

function ServiceCardLeft({ image, title }) {
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            ut dicta veniam molestiae quisquam vero consectetur reiciendis iure
            facilis voluptate id, dolor obcaecati impedit amet mollitia
            quibusdam vitae possimus? Sit.
          </p>
        </div>
        <img
          src={image}
          alt="house"
          style={{ marginLeft: "5vw" }}
          className="servicecardleft__img"
          data-aos="fade-right"
        />
      </div>
    </div>
  );
}

export default ServiceCardLeft;
