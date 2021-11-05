import React from 'react';
import ServiceCardRight from '../servicecard/ServiceCardRight';
import ServiceCardLeft from '../servicecard/ServiceCardLeft';
import './Services.scss';
import house from '../../images/house.jpg';
import retail from '../../images/retail.jpg';
import office from '../../images/office.jpg';
import interior from '../../images/interior3.jpg';
import institute from '../../images/institute.jpg';
import hospital from '../../images/hospital.jpg';
import apartment from '../../images/apartment.jpg';

function Services() {
  return (
    <div className="services">
      <div className="services__header heading">
        <h1>OUR SERVICES</h1>{' '}
      </div>
      <ServiceCardLeft
        image={interior}
        title="Interior"
        text="Our interior design experts work with you to create the space that you have been dreaming about. We create home interior designs that are unique to you and your preferences."
      />
      <ServiceCardRight
        image={house}
        title="Housing"
        text="At PDA we believe in creating a home or an office based on understanding of consumer needs and preferences."
      />
      <ServiceCardLeft
        image={office}
        title="Offices"
        text="Our team of expert architects and civil engineers design offices that bring out maximum efficiency from your employees."
      />
      <ServiceCardRight
        image={institute}
        title="Institutes"
        text="We design institutes keeping in mind the physical and mental well-being of students and teachers."
      />
      <ServiceCardLeft
        image={hospital}
        title="Hospital"
        text="Designing and construction of hospital are considered as one of the most precarious task. We handle it with absolute perfection and excellence."
      />
      <ServiceCardRight
        image={retail}
        title="Retail Spaces"
        text="We design retail spaces in a way that promotes an enjoyable and hassle-free shopping experience for the consumer with perfect space utilization."
      />
      <ServiceCardLeft
        image={apartment}
        title="Apartments"
        text="We design and construct apartments that are homely and lively by keeping in mind all the geological and structural aspects of design, with proper area utilization."
      />
    </div>
  );
}

export default Services;
