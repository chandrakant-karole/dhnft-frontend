import React from 'react';
import Navbar from "./Navbar";
import Rewards from './Rewards';
// import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
// import rarity1 from "../assets/images/rarity/white.png";
// import rarity2 from "../assets/images/rarity/magnethik.png";
// import rarity3 from "../assets/images/rarity/compression.png";
// import rarity4 from "../assets/images/rarity/framed.png";
import { Accordion, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import questionMark from '../assets/question-mark.svg';
import logo from '../assets/logo-white.png';
import FooterCommon from './FooterCommon';

export default function DHRewards() {
    return (
        <>
            <Navbar />
            <Rewards />
            <div className="container-fluid mb-4 pb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="reawardsHeroSection">
                            <div className="reawardsHeroDiv">
                                <h2>Stake Diamond Hand, earn up to</h2>
                                <h1 className='numberHead'>741.07%</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="stakeTitle text-center">
                            <h2>Diamond Hand Staking</h2>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="stakeDiv">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Your Stake</Accordion.Header>
                                    <Accordion.Body style={{ background: "#132323" }}>
                                        <Tabs defaultActiveKey="Stake" id="uncontrolled-tab-example" className="my-3 customTab">
                                            <Tab eventKey="Stake" className='stakeButton' title="Stake">
                                                <div className="stakeContentDiv">
                                                    <div className="inputDiv">
                                                        <input type="text" />
                                                        <button>Stake</button>
                                                    </div>
                                                    <div className="ContentDiv">
                                                        <div className='StakewalletDiv'>
                                                            <div className="text">
                                                                Diamond Hand in wallet:
                                                            </div>
                                                            <div className=''>00</div>
                                                        </div>
                                                        <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                            <div className="text">
                                                                Your Stake (Compounding):
                                                            </div>
                                                            <div className=''>00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="UnStake" title="UnStake">
                                                <div className="stakeContentDiv">
                                                    <div className="inputDiv">
                                                        <input type="text" />
                                                        <button>UnStake</button>
                                                    </div>
                                                    <div className="ContentDiv">
                                                        <div className='StakewalletDiv'>
                                                            <div className="text">
                                                                Diamond Hand in wallet:
                                                            </div>
                                                            <div className=''>00</div>
                                                        </div>
                                                        <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                            <div className="text">
                                                                Your Stake (Compounding):
                                                            </div>
                                                            <div className=''>00</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className="stakeDiv">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Rewards to Collect</Accordion.Header>
                                    <Accordion.Body style={{ background: "#132323" }}>
                                        <div className="stakeContentDiv">
                                            <div className='rewardsCollectTop'>
                                                <div className='whats_this'>
                                                    What's this <span><img src={questionMark} alt="icon" style={{ width: '25px', marginLeft: '10px' }} /></span>
                                                    <div className="whats_this_popover">
                                                        Trading fees collected by the protocol are distributed to DIAMOND HAND stakers as rewards. Reward rates are adjusted roughly every 24 hours, based on the past 24 hours’ trading activity.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="inputDiv">
                                                <input type="text" />
                                                <button>Collect</button>
                                            </div>
                                            <div className="ContentDiv">
                                                <div className='StakewalletDiv'>
                                                    <div className="text">
                                                        Last collected:
                                                    </div>
                                                    <div className=''>-</div>
                                                </div>
                                                <div className='YourStakeDiv'>
                                                    <div className="text">
                                                        Collected to date:
                                                    </div>
                                                    <div className=''>0.0</div>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="ContentDiv">
                                                <div className='StakewalletDiv'>
                                                    <div className="text" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                                                        <img src={logo} alt="" style={{ width: "35px", marginRight: "10px" }} /> Diamond Hand
                                                    </div>
                                                    <div className='compoundingDiv'>
                                                        Compounding <span><img src={questionMark} alt="icon" style={{ width: '25px', marginLeft: '10px' }} /></span>
                                                        <div className="compounding_popover">
                                                        When you stake DIAMOND HAND, you also earn extra DIAMOND HAND as a bonus reward.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                    <div className="text">
                                                        Earned to date:
                                                    </div>
                                                    <div className=''>0.0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='container'>
                <div className="db_navbox">
                    <div className='row'>
                        <div className='col-9'>
                        <div className="dh_left_box">
                                <h3>My Other "Diamond Handed" NFTs</h3>
                                <div className='row'>
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
                                </div>
                            </div>
                            <div className="dh_left_box">
                                <h3>The Diamond Hands NFT (DH)</h3>
                                <InputGroup className='search_input'>
                                    <InputGroup.Text id="btnGroupAddon">Search DH#</InputGroup.Text>
                                    <FormControl
                                        type="text"
                                        aria-label="Input group example"
                                        aria-describedby="btnGroupAddon"
                                    />
                                </InputGroup>
                                <div className='row'>
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
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className="dh_right_box">
                                <Button variant="success" className='green_btn'>Claim DHT Rewards</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <FooterCommon/>
        </>

    )

}
