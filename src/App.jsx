import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Founder } from "./components/founder";
import { Courses } from "./components/courses";
import { VissionMission } from "./components/vissionMission";
import { Videos } from "./components/videos";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { CarouselSlider } from "./components/carousel";
import { EklavyaClass } from "./components/eklavya";

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
      <CarouselSlider />
      <Founder data={landingPageData.About} />
      <VissionMission data={landingPageData.Gallery} />
      <Courses data={landingPageData.Services} />
      <EklavyaClass />
      <Videos data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
