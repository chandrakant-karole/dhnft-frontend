import '../styles/components/_connectwallet.scss';
import { InputGroup, FormControl, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

// import Navbar from "./Navbar";
import Rewards from './Rewards';
import rarity1 from "../assets/images/rarity/white.png";
import rarity2 from "../assets/images/rarity/magnethik.png";
import rarity3 from "../assets/images/rarity/compression.png";
import rarity4 from "../assets/images/rarity/framed.png";
// import FooterCommon from './FooterCommon';

function DHF() {
  return (
    <div className="connect_wallet">
      {/* <Navbar /> */}
      <Rewards />
      <div className='cont_wallet_box'>
        <div className="container" style={{ display: 'block' }}>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='cntwllt_nav'>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Link to="/DH" className='nav-link'>
                      <p style={{ textAlign: "center" }}>The DiamondHands NFT (DH)</p>
                      <b>(7 Owned)</b>
                      <p style={{ textAlign: "center" }}>(Eligible for DHT Rewards)</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link eventKey="DHF" className='active nav-link' to="/DHF">
                      <p style={{ textAlign: "center" }}>The DiamondHands Founders NFT (DHF)</p>
                      <b>(2 Owned)</b>
                      <p style={{ textAlign: "center" }}>(Eligible for DHT Rewards)</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link eventKey="DHT" to="/DHT" className='nav-link'>
                      <p style={{ textAlign: "center" }}>The DiamondHands Tokens FT (DHT)</p>
                      <b>(13200 Owned)</b>
                    </Link>
                  </Nav.Item>
                </Nav>
                <div className="db_navbox">
                </div>
              </div>

            </div>
          </div>
          <div className='row'>
            <div className='col-lg-9 col-12'>
              <div className="dh_left_box">
                <h3>The DiamondHands Founders NFT (DHF)</h3>

                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <InputGroup className='search_input'>
                        <button className='search_Btn' id="btnGroupAddon">Search DH#</button>
                        <FormControl className='searchDHT'
                          type="text"
                          aria-label="Input group example"
                          aria-describedby="btnGroupAddon"
                        />
                      </InputGroup>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity2} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity3} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity4} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-12'>
              <div className="dh_right_box">
                <h4>3 out of 7 owned NFTs selected</h4>
                <Button variant="success" className='green_btn'>Burn Selected NFTs</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterCommon /> */}
    </div>
  );
}

export default DHF;