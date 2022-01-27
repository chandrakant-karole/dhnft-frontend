import DefiNfts from "./DefiNfts";
import Faq from "./Faq";
import Footer from "./Footer";
import IntroSection from "./IntroSection";
import Navbar from "./Navbar";
import RaritySection from "./RaritySection";
import TeamSection from "./TeamSection";
import Timeline from "./Timeline";
import TotalMints from "./TotalMints";
import VideoSection from "./VideoSection";

function Home() {
    return ( 
      <div className="home_page">
        <Navbar />
        <VideoSection />
        <TotalMints />
        <IntroSection />
        <DefiNfts />
        <RaritySection />
        <TeamSection />
        <Timeline />
        <Footer />
        <Faq />
      </div>
    );
}


export default Home;