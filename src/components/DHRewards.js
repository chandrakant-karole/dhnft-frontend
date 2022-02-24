import { React, useState, useRef, useEffect } from 'react';
// import Navbar from "./Navbar";
import Rewards from './Rewards';
import Web3 from "web3";
import { NFTAbi } from "../utility/contracts/stakingAbiWhiContract";
// import { InputGroup, FormControl, Form, Button } from "react-bootstrap";
// import rarity1 from "../assets/images/rarity/white.png";
// import rarity2 from "../assets/images/rarity/magnethik.png";
// import rarity3 from "../assets/images/rarity/compression.png";
// import rarity4 from "../assets/images/rarity/framed.png";
import { Accordion, Tab, Tabs, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import questionMark from '../assets/question-mark.svg';
import logo from '../assets/logo-white.png';
// import FooterCommon from './FooterCommon';
// import { Grid } from 'react-loader-spinner'
// import { CONTACT_ADDRESS, CONTACT_ABI } from '../contract/GVOToken'
// const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
export default function DHRewards() {
    // ============================ ALL useState ===============================
    const [count, setCount] = useState(0)
    const [toggleDropdown_stake, setToggleDropdown_stake] = useState(true)
    const [toggleDropdown_unStake, setToggleDropdown_unStake] = useState(true)
    // ================================ useState End =====================================
    // ====================== ALL useRef =================================
    const toggleDropDownRef_stake = useRef(null)
    const toggleDropDownRef_unStake = useRef(null)
    const dropDownRefStake = useRef(null)
    const dropDownRefUnStake = useRef(null)

    // ======================= useEffect nft dropDown Select Count  OF STAKE ==============================
    useEffect(() => {
        dropDownRefStake.current = dropDrown_SelectItem_stake;
        function dropDrown_SelectItem_stake(e) {
            // console.log('nft card', e.target.checked);
            if (e.target.checked === true) {
                setCount(count + 1)
            } else {
                setCount(count - 1)
            }
        }
    }, [count])
    // ======================= useEffect nft dropDown Select Count  OF UN-STAKE ==============================
    useEffect(() => {
        dropDownRefUnStake.current = dropDrown_SelectItem_unStake;
        function dropDrown_SelectItem_unStake(e) {
            // console.log('nft card', e.target.checked);
            if (e.target.checked === true) {
                setCount(count + 1)
            } else {
                setCount(count - 1)
            }
        }
    }, [count])
    // ======================= stake toggle useEffect dropDown ==============================
    useEffect(() => {
        toggleDropDownRef_stake.current = toggleDropBtn;
        function toggleDropBtn() {
            setToggleDropdown_stake(!toggleDropdown_stake)
        }
    }, [toggleDropdown_stake])
    // ======================= unstake toggle useEffect dropDown ==============================
    useEffect(() => {
        toggleDropDownRef_unStake.current = toggleDropBtn;
        function toggleDropBtn() {
            setToggleDropdown_unStake(!toggleDropdown_unStake)
        }
    }, [toggleDropdown_unStake])

    // ============================================ On Created =======================================
    // console.log('dropdown count',count);
    return (
        <>
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
                                                    {/* <div className='row dh_NFT_cards_Div my-4' style={{ height: '359px' }}> */}
                                                    <div className='custom_dropdown'>
                                                        <div onClick={() => { toggleDropDownRef_stake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer' }}>Select NFT</div>
                                                        <ul id='custDrop_ul_ID' className='custDrop_ul' style={toggleDropdown_stake ? { display: 'none' } : { display: 'block' }}>
                                                            {/* {getIMGArryDH.map((param) => {
                                                                    // console.log(param);
                                                                    dhnftincremental++
                                                                    return <li>
                                                                        <input className="form-check-input" type="checkbox" value={dhnftincremental} id="flexCheckDefault1" onClick={(e) => { customSelect(e) }} />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                            DHN #{param.split('/')[5].slice(4, 7)}
                                                                        </label>
                                                                    </li>
                                                                })} */}
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #1
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #2
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #3
                                                                    </label>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    {/* </div> */}
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" ref={TokenValue} />
                                                        <button style={{ width: '150px' }} onClick={addToken}>Add Token</button>
                                                    </div> */}
                                                    <div className="inputDiv">
                                                        <input id="stakeNumber" type="number" disabled />
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
                                                    {/* <div className='row dh_NFT_cards_Div my-4' style={{ height: '359px' }}> */}
                                                    <div className='custom_dropdown'>
                                                        <div onClick={() => { toggleDropDownRef_unStake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer' }}>Select NFT</div>
                                                        <ul id='custDrop_ul_ID' className='custDrop_ul' style={toggleDropdown_unStake ? { display: 'none' } : { display: 'block' }}>
                                                            {/* {getIMGArryDH.map((param) => {
                                                                    // console.log(param);
                                                                    dhnftincremental++
                                                                    return <li>
                                                                        <input className="form-check-input" type="checkbox" value={dhnftincremental} id="flexCheckDefault1" onClick={(e) => { customSelect(e) }} />
                                                                        <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                            DHN #{param.split('/')[5].slice(4, 7)}
                                                                        </label>
                                                                    </li>
                                                                })} */}
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefUnStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #1
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefUnStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #2
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check formDiv_dropdown">
                                                                    <input onClick={(e) => { dropDownRefUnStake.current(e) }} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                                                                        DH #3
                                                                    </label>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" />
                                                        <button style={{ width: '150px' }}>Add Token</button>
                                                    </div> */}
                                                    <div className="inputDiv">
                                                        <input id='unStakeNumber' type="number" />
                                                        <button >UnStake</button>
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
                                            {/* <div className="inputDiv mt-4">
                                                <input type="number" />
                                                <button style={{ width: '150px' }}>Add Token</button>
                                            </div> */}
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

        </>

    )

}
