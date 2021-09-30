import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import "./Contact.scss";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import Aos from "aos";

function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);
  return (
    <div className="contact">
      <h2 data-aos="fade-down">Contact Us</h2>
      <div className="contact__body">
        <div className="contact__bodyform" data-aos="fade-right">
          <h3>Fill the form and we will reach out to you</h3>
          <input type="text" placeholder="Enter name" />
          <input type="text" placeholder="Enter email" />
          <input type="number" placeholder="Enter phone number" />
          <select name="" id="">
            <option
              value="sel"
              disabled
              selected
              hidden
              style={{ color: "lightgray" }}
            >
              Select a service you need assistance with
            </option>
            <option value="volvo">Interior</option>
            <option value="saab">Housing</option>
            <option value="mercedes">Offices</option>
            <option value="audi">Institutes</option>
            <option value="audi">Hospital</option>
            <option value="audi">Retail Spaces</option>
            <option value="audi">Apartments</option>
          </select>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Elaborate your point(optional)"
          ></textarea>
          <Button>Send</Button>
        </div>
        <div className="divider"></div>
        <div className="contact__bodysocial" data-aos="fade-left">
          <h3>Or reach out to us at</h3>

          <Link to="/">
            <div>
              <span>
                <InstagramIcon />
              </span>
              <h4>instagram.com/pda</h4>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>
                <FacebookIcon />
              </span>
              <h4>facebook.com/pda</h4>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>
                <MailIcon />
              </span>
              <h4>gmail.com/pda</h4>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>
                <PhoneIcon />
              </span>
              <h4>1234567898</h4>
            </div>
          </Link>
          <Link to="/">
            <div>
              <span>
                <LocationOnIcon />
              </span>
              <h4>
                D 362 Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh -
                226010
              </h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
