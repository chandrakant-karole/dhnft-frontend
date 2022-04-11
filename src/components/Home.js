import { useEffect } from "react";
import DefiNfts from "./DefiNfts";
import Faq from "./Faq";
// import Footer from "./Footer";
// import FooterCommon from "./FooterCommon";
import IntroSection from "./IntroSection";
// import Navbar from "./Navbar";
import RaritySection from "./RaritySection";
import TeamSection from "./TeamSection";
import Timeline from "./Timeline";
import TotalMints from "./TotalMints";
import VideoSection from "./VideoSection";
import { DhState } from '../context/dhContext';
import OurStory from "./OurStory";
import GvoToken from "./GvoToken";
import AboutGVO from "./AboutGVO";
import DHBuyBtn from "./DHBuyBtn";
import VibeMap from "./VibeMap";
import Community from "./Community";
import Bottom from "./Bottom";
import OurTeam from "./OurTeam";

function Home() {
  const { data1, setData } = DhState();
  useEffect( () => {
    window.ethereum.enable().then((address) => {
      let loginUserAdd = address[0];
      setData(loginUserAdd)
      console.log("Home_page", data1);
    })},[])
    return ( 
      <div className="home_page">
        {/* <Navbar /> */}
        <VideoSection />
        {/* <TotalMints /> */}
        <OurStory/>
        <GvoToken/>
        <AboutGVO/>
        <DHBuyBtn/>
        <VibeMap/>
        <Community/>
        {/* <TeamSection /> */}
        <OurTeam/>
        {/* <Bottom/> */}
        {/* <IntroSection /> */}
        {/* <DefiNfts /> */}
        {/* <RaritySection /> */}
        {/* <Timeline /> */}
        {/* <Footer /> */}
        {/* <Faq /> */}
        {/* <FooterCommon/> */}
      </div>
    );
}


export default Home;