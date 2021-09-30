import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./App.scss";
import Home from "./pages/homepage/Home";
import Contact from "./pages/contactpage/Contact.js";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ImgGallery from "./pages/gallerypage/Gallery";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/gallery">
          <ImgGallery />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
