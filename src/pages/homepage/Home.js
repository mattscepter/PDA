import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import What from '../../components/about/What';
import './Home.scss';
import HomeTop from '../../components/hometop/HomeTop';
import AboutSection from '../../components/about/AboutSection';
import Services from '../../components/service/Services';
import { Button } from '@material-ui/core';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import { useHistory } from 'react-router';
// import { slide as Menu } from "react-burger-menu";

function Home() {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // const [scroll, setScroll] = useState(window.scrollY);

  // window.addEventListener("scroll", () => {
  //   setScroll(window.scrollY);
  // });

  return (
    <div className="home">
      {/* {scroll < 1000 ? (
        <></>
      ) : (
        <Menu right width={350}>
          <h1 className="menu__options">HOME</h1>
          <h1 className="menu__options">PROJECTS</h1>
          <h1 className="menu__options">GALLERY</h1>
          <h1 className="menu__options">BLOG</h1>
          <h1 className="menu__options">ABOUT US</h1>
          <h1 className="menu__options">CONTACT US</h1>
        </Menu>
      )} */}
      <HomeTop />
      <What />
      <AboutSection />
      <Services />
      <div className="projectbutton">
        <h2 className="projectbutton__head" data-aos="fade-down">
          {/* Not Sure Yet? */}
          Impressed by our services
        </h2>
        <Button
          onClick={() => {
            history.push('/contactus');
          }}
          className="projectbutton__button"
          data-aos="fade-up"
        >
          {/* Have a look at our projects */}
          Contact Us Now
          <ArrowForwardRoundedIcon className="button__arrow" />
        </Button>
      </div>
    </div>
  );
}

export default Home;
