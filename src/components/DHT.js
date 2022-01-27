import '../styles/components/_connectwallet.scss';
import { InputGroup, FormControl, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import Navbar from "./Navbar";
import Rewards from './Rewards';
import rarity1 from "../assets/images/rarity/white.png";
import rarity2 from "../assets/images/rarity/magnethik.png";
import rarity3 from "../assets/images/rarity/compression.png";
import rarity4 from "../assets/images/rarity/framed.png";

function DHT() {
  return (
    <div className="connect_wallet">
      <Navbar />
      <Rewards />
      <div className='cont_wallet_box'>
        <div className="container">
          <div className='cntwllt_nav'>
            <Nav justify variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Link to="/DH" className='nav-link'>
                  <p>TheDiamondHands NFT (DH)</p>
                  <b>(7 Owned)</b>
                  <p>(Eligible for DHT Rewards)</p>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link eventKey="DHF" to="/DHF" className='nav-link'>
                  <p>TheDiamondHands Founders NFT (DHF)</p>
                  <b>(2 Owned)</b>
                  <p>(Eligible for DHT Rewards)</p>
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link eventKey="DHT" className='active nav-link' to="/DHT">
                  <p>TheDiamondHands Tokens FT (DHT)</p>
                  <b>(13200 Owned)</b>
                </Link>
              </Nav.Item>
            </Nav>
            <div className="db_navbox">
              <div className='row'>
                <div className='col-9'>
                  <div className="dh_left_box">
                    <h3>The Diamond Hands NFT (DHT)</h3>
                    {/* <InputGroup className='search_input'>
                            <InputGroup.Text id="btnGroupAddon">Search DH#</InputGroup.Text>
                              <FormControl
                                type="text"
                                aria-label="Input group example"
                                aria-describedby="btnGroupAddon"
                              />
                            </InputGroup> */}
                    {/* <div className='row'>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity1} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity2} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity3} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity4} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity4} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity4} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-2'>
                                <div className='nft_boxes'>      
                                  <img src={rarity4} alt="" />
                                  <div className='nft_box_btm'>
                                    <h5>DH # <span>00123</span> </h5>
                                    <p> <span>94</span> days held </p>
                                    <p> DHT Reward: <span>3000</span> </p>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                      <Form.Check type="checkbox" />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                    <div className='row'>
                      <div className='col-lg-12'>
                            <div className='dht_nft_list'>
                              <ul>
                                <li>Diamond Hands Tokens (DHT) Owned: <span className='dht_span'>3200</span></li>
                                <li>DHTs claimable from DHF NFTs held: <span className='dht_span'>5500</span></li>
                                <li>DHTs claimable based on DH NFTs held: <span className='dht_span'>18000</span></li>
                                <li>DHTs claimable by buring DH NFTS: <span className='dht_span'>2800</span></li>
                                <li>DHTs claimable based on Other NFTs held: <span className='dht_span'>3000</span></li>
                                <li>Additional DHT's claimable for this Wallet: <span className='dht_span'>5000</span></li>
                              </ul>
                            </div>
                      </div>
                      {/* <div className='col-lg-12'>
                            <div className='dht_claimBtn'>
                              <Button className='green_btn'>Claim DHT Rewards</Button>
                            </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className='col-3'>
                  <div className="dh_right_box">
                    {/* <h4>3 out of 7 owned NFTs selected</h4> */}
                    <Button variant="success" className='green_btn'>Claim DHT Rewards</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DHT;