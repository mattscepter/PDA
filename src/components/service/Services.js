import React from "react";
import ServiceCardRight from "../servicecard/ServiceCardRight";
import ServiceCardLeft from "../servicecard/ServiceCardLeft";
import "./Services.scss";
import house from "../../images/house.jpg";
import retail from "../../images/retail.jpg";
import office from "../../images/office.jpg";
import interior from "../../images/interior3.jpg";
import institute from "../../images/institute.jpg";
import hospital from "../../images/hospital.jpg";
import apartment from "../../images/apartment.jpg";

function Services() {
  return (
    <div className="services">
      <div className="services__header heading">
        <h1>OUR SERVICES</h1>{" "}
      </div>
      <ServiceCardLeft image={interior} title="Interior" />
      <ServiceCardRight image={house} title="Housing" />
      <ServiceCardLeft image={office} title="Offices" />
      <ServiceCardRight image={institute} title="Institutes" />
      <ServiceCardLeft image={hospital} title="Hospital" />
      <ServiceCardRight image={retail} title="Retail Spaces" />
      <ServiceCardLeft image={apartment} title="Apartments" />
    </div>
  );
}

export default Services;
