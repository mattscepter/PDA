import React from 'react';
import './HomeTop.scss';
import { Button } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import pdalogo from '../../images/pdalogo.svg';
// import NavBar from "../navbar/NavBar";

function HomeTop() {
  return (
    <div className="hometop">
      <div
        className="hometop__text"
        data-aos="zoom-out"
        data-aos-duration={1000}
      >
        <img
          src={pdalogo}
          alt=""
          style={{
            width: '50rem',
            padding: '5rem',
            color: 'white',
          }}
        />
        <p className="hometop__texttop">
          We handle your project from{' '}
          <span
            style={{ color: '#fc7c5f', fontSize: '5.5rem', display: 'block' }}
          >
            Architecture to Interior
          </span>{' '}
          so you don't have to.
        </p>
        <p className="hometop__textbottom">Let us give you peace of mind.</p>
        <Button className="hometop__textbutton">
          Tell Us Know About Your Project
          <ArrowForwardRoundedIcon className="button__arrow" />
        </Button>
      </div>
    </div>
  );
}

export default HomeTop;
