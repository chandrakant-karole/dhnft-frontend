import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
import ConnectedWallet from './components/DH';
import DHF from './components/DHF';
import DHT from './components/DHT';
import DHRewards from './components/DHRewards'

function App() {    
  return (
    <BrowserRouter basename='/stringblock/'>
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
        <Route path="/faq">
          <Faq />
        </Route>
        <Route path="/DH">
          <ConnectedWallet />
        </Route>
        <Route path="/DHF">
          <DHF />
        </Route>
        <Route path="/DHT">
          <DHT />
        </Route>
        <Route path='/DH_Rewards' component={DHRewards}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
