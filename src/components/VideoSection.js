import { Col, Container, Row, Image } from "react-bootstrap";
import video from "../assets/diamond-hands.mp4";
import HeroSlider from "./HeroSlider";
import GVO from '../assets/$GVO-Token.png'
function VideoSection() {
  return (
    // <section className="container video-section">
    //   <video className="intro-video" controls autoPlay={true} muted loop>
    //     <source src={video} type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>
    // </section>
    <section className="hero_section_dhNft">
      <div className="top_strip_head">
        <div className="top_strip_text">Join the DAO to unlock $GVO</div>
        <div>
          <button className="join_daoBtn">Join the Good Vibes DAO</button>
        </div>
      </div>
      <Container className="dh_container">
        <Row>
          <Col lg={6}>
            <div className="hero_section_content_left">
              <div className="hero_section_content_leftDiv">
                <h1>The <br /> Diamond Hands</h1>
                <div className="hero_section_call_to_action">
                  <button className="openSea_btn">Buy on OpenSea</button>
                  <button className="lookRare_btn">Buy on LooksRare</button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="custom_silder_Div">
              <div className="slider_dh">
                <HeroSlider />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="top_strip_foot">
        <Image className="GVO_img" src={GVO} fluid/>
        <div className="top_strip_text"><b> $GVO or "Good Vibes Only"</b> is the Utility Token that fuels the Diamond Hands ecosystem; a combination of discount on merch, minting future collection, exclusive access to Diamond Hand events...</div>
        <div>
          <button className="join_daoBtn">Join the DAO</button>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
