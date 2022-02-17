import { React, useState } from 'react';
// import Navbar from "./Navbar";
import Rewards from './Rewards';
import Web3 from "web3";
import { NFTAbi } from "../utility/contracts/stakingAbiWhiContract";
// import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
// import rarity1 from "../assets/images/rarity/white.png";
// import rarity2 from "../assets/images/rarity/magnethik.png";
// import rarity3 from "../assets/images/rarity/compression.png";
// import rarity4 from "../assets/images/rarity/framed.png";
import { Accordion, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import questionMark from '../assets/question-mark.svg';
import logo from '../assets/logo-white.png';
// import FooterCommon from './FooterCommon';


const loginUserAddress = '0x3b235B5AF7841D8dF5dE1c01a56f52d560Bc35Dd'
const web3 = new Web3(window.ethereum);
const stakingABiWthiCONTRACT = new web3.eth.Contract(NFTAbi, '0x028cB60B6B11B4195937676ac99124E80917D1DC');
export default function DHRewards() {
    let [diamondWallet, setDiamondWallet] = useState(0)
    function stakeNFT() {
        var stakeNumber = document.getElementById('stakeNumber').value;
        console.log("stakeNumber", stakeNumber);
        stakingABiWthiCONTRACT.methods.createStake(stakeNumber)
            .send(
                {
                    from: loginUserAddress,
                    value: stakeNumber,
                }
            )
            .on('error', function (error) {
                setDiamondWallet(diamondWallet + parseInt(stakeNumber))
                console.log(typeof stakeNumber);
                // console.log()
                // let o = stakeNumber.Number()
                // console.log(typeof o);
                console.log('error');
            }).then(function (info) {
                console.log('success ', info);
                // setDiamondWallet(diamondWallet + stakeNumber)
                setDiamondWallet(diamondWallet + parseInt(stakeNumber))
            });
    }
    function unStakeNFT() {
        var unStakeNumber = document.getElementById('unStakeNumber').value;
        console.log("parseInt(diamondWallet)", parseInt(diamondWallet), "unStakeNumber", parseInt(unStakeNumber));
        if (parseInt(diamondWallet) > parseInt(unStakeNumber)) {

            var unStakeNumber = document.getElementById('unStakeNumber').value;
            console.log("unStakeNumber", unStakeNumber);
            stakingABiWthiCONTRACT.methods.removeStake(unStakeNumber)
                .send(
                    {
                        from: loginUserAddress,
                        value: unStakeNumber,
                    }
                )
                .on('error', function (error) {
                    setDiamondWallet(diamondWallet - parseInt(unStakeNumber))
                    console.log('error');
                }).then(function (info) {
                    console.log('success ', info);
                    setDiamondWallet(diamondWallet - parseInt(unStakeNumber))
                });
        } else {
            alert('Your token is less then unstake token number.. Please insert valid Number!')
        }
    }
    return (
        <>
            {/* <Navbar /> */}
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
                                                    <div className="inputDiv my-4">
                                                        <input type="text" />
                                                        <button style={{ width: '150px' }}>Add Token</button>
                                                    </div>
                                                    <div className="inputDiv">
                                                        <input id="stakeNumber" type="number" />
                                                        <button onClick={stakeNFT}>Stake</button>
                                                    </div>
                                                    <div className="ContentDiv">
                                                        <div className='StakewalletDiv'>
                                                            <div className="text">
                                                                Diamond Hand in wallet:
                                                            </div>
                                                            <div className=''>{diamondWallet}</div>
                                                        </div>
                                                        <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                            <div className="text">
                                                                Your Stake (Compounding):
                                                            </div>
                                                            <div className=''>{diamondWallet}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="UnStake" title="UnStake">
                                                <div className="stakeContentDiv">
                                                <div className="inputDiv my-4">
                                                        <input type="text" />
                                                        <button style={{ width: '150px' }}>Add Token</button>
                                                    </div>
                                                    <div className="inputDiv">
                                                        <input id='unStakeNumber' type="number" />
                                                        <button onClick={unStakeNFT}>UnStake</button>
                                                    </div>
                                                    <div className="ContentDiv">
                                                        <div className='StakewalletDiv'>
                                                            <div className="text">
                                                                Diamond Hand in wallet:
                                                            </div>
                                                            <div className=''>{diamondWallet}</div>
                                                        </div>
                                                        <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                            <div className="text">
                                                                Your Stake (Compounding):
                                                            </div>
                                                            <div className=''>{diamondWallet}</div>
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
                                            <div className="inputDiv mt-4">
                                                <input type="text" />
                                                <button style={{ width: '150px' }}>Add Token</button>
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
            {/* <FooterCommon/> */}
        </>

    )

}
