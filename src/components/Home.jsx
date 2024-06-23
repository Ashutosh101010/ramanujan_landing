import React from "react";
import { Navigation } from "./navigation";
import { SecondSection } from "./secondSection";
import { WhyFastTestSeries } from "./WhyFastTestSeries";
import { FtsFeature } from "./FtsFeature";
import { TestSeries } from "./TestSeries";
import { AskAnythink } from "./AskAnythink";
import { Footer } from "./Footer";

const Home = () =>{

    return(
        <div>
        <Navigation />
        <SecondSection />
        <WhyFastTestSeries />
        <FtsFeature />
        <TestSeries />
        <AskAnythink />
        <Footer />
      </div>
    )
};

export default Home;