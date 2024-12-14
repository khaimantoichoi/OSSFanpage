import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Structure } from "./components/structure";
import { Timeline } from "./components/timeline";
import { Slideshow } from "./components/slideshow";
import { Achievement } from "./components/achievement";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Structure data={landingPageData.Structure} />
      <Timeline data={landingPageData.Timeline} />
      <Slideshow data={landingPageData.Slideshow} />
      <Achievement data={landingPageData.Achievement} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
