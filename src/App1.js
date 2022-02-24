import React from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoSection from "./components/VideoSection";
import IntroSection from "./components/IntroSection";
import DefiNfts from "./components/DefiNfts";
import RaritySection from "./components/RaritySection";
import TeamProfile from "./components/TeamSection";
import Faq from "./components/Faq";
// import TotalMints from "./components/TotalMints";
import Timeline from "./components/Timeline";
import Rewards from "./components/Rewards";

function App() {    
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/navbar">
          <Navbar />
        </Route>
        <Route path="/rewards">
          <Rewards />
        </Route>
        <Route path="/video-section">
          <VideoSection />
        </Route>
        <Route path="/intro-section">
          <IntroSection />
        </Route>
          {/* <TotalMints /> */}
        <Route path="/defi-nfts">
          <DefiNfts />
        </Route>
        <Route path="/rarity-section">
          <RaritySection />
        </Route>
        <Route path="/team-Profile">
          <TeamProfile />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/faq">
          <Faq />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
