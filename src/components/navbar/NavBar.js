import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navbar " data-aos="fade-bottom" data-aos-duration={2000}>
      <div className="navbar__options heading">
        <Link to="/">
          <h3>HOME</h3>
        </Link>
        <Link>
          <h3>PROJECTS</h3>
        </Link>
        <Link to="/gallery">
          <h3>GALLERY</h3>
        </Link>
        <Link>
          <h3>BLOG</h3>
        </Link>
        <Link>
          <h3>ABOUT</h3>
        </Link>
        <Link to="/contactus">
          <h3>CONTACT US</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
