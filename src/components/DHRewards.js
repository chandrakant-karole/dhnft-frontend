import { React, useState, useRef, useEffect } from 'react';
// import Navbar from "./Navbar";
import Rewards from './Rewards';
import Web3 from "web3";
import { StakingAbi } from "../contract/staking-abi";
import { CONTACT_ADDRESS_BURN_MINT, brun_mint_Abi } from '../contract/mintAndBurnBatch';
import { CONTACT_ADDRESS_GVO, CONTACT_ABI_GVO } from '../contract/GVOToken';
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
    // =========================== API Header Start ================================================
    const requestOptions = {
        method: 'GET',
        headers: {
            'x-api-key': 'bf846fcb-8fb4-4c74-a0ce-0e9642fc6741',
            'x-testnet-type': 'polygonscan',
            'Content-Type': 'application/json',
        }
    };

    // =========================== API Header End ================================================
    // ============================ ALL useState ===============================
    const [count, setCount] = useState(0)
    const [toggleDropdown_stake, setToggleDropdown_stake] = useState(true)
    const [toggleDropdown_unStake, setToggleDropdown_unStake] = useState(true)
    let [getNftList, setgetNftList] = useState([])
    let [loginUserAddress, setloginUserAddress] = useState('')
    const [imgArry, setImgArry] = useState([]);
    const [forUnStake, setforUnStake] = useState([])
    const [diamondWallet, setDiamondWallet] = useState(0)
    const [unStakeSelectArry, setUnStakeSelectArry] = useState([])
    const [diamondWalletUnstake, setdiamondWalletUnstake] = useState(0)
    const [gvoCount, setgvoCount] = useState(0);
    // const [dropTxt, setDropTxt] = useState([])
    // ================================ useState End =====================================
    // ====================== ALL useRef =================================
    const toggleDropDownRef_stake = useRef(null)
    const toggleDropDownRef_unStake = useRef(null)
    const dropDownRefStake = useRef(null)
    const dropDownRefUnStake = useRef(null)
    const createStakeRef = useRef(null)
    const createUnStakeRef = useRef(null)
    const collectGVORef = useRef(null)

    const web3_Stake = new Web3(window.ethereum);
    window.ethereum.enable().then((address) => {
        loginUserAddress = address[0];
        // console.log("loginUserAddressloginUserAddress",loginUserAddress);
        setloginUserAddress(loginUserAddress)
    });

    const stakingABiWthiCONTRACT = new web3_Stake.eth.Contract(brun_mint_Abi, CONTACT_ADDRESS_BURN_MINT);

    // ======================= useEffect nft dropDown Select Count  OF STAKE ==============================
    useEffect(() => {
        dropDownRefStake.current = dropDrown_SelectItem_stake;
        function dropDrown_SelectItem_stake(e) {

            // console.log('nft card', e.target.checked);
            if (e.target.checked === true && count < 3) {
                setCount(count + 1)
                console.log('e.target.value', e.target.value);
                // dropTxt.push(`DH.io ${e.target.value}`)
                imgArry.push(e.target.value)
                setImgArry(imgArry)
                localStorage.setItem('DH-Id', JSON.stringify(imgArry))
            } else {
                if (e.target.checked === false) {
                    setCount(count - 1)
                    var imgName = (e.target.value);
                    console.log("imgName", imgName);
                    var localStrgArr = JSON.parse(localStorage.getItem('DH-Id'));
                    console.log("localStrgArr", localStrgArr);
                    const index = localStrgArr.indexOf(imgName);
                    if (index > -1) {
                        localStrgArr.splice(index, 1); // 2nd parameter means remove one item only
                        console.log("localStrgArr after splice", localStrgArr);

                        localStorage.setItem('DH-Id', JSON.stringify(localStrgArr))
                        setImgArry(JSON.parse(localStorage.getItem('DH-Id')));
                        console.log("imgArry", imgArry);
                    }
                    else {

                        setImgArry(localStrgArr);
                        var imgName = (e.target.value);
                        console.log("imgArry", imgArry);
                        localStorage.setItem('DH-Id', JSON.stringify(imgArry));

                    }
                }
                else {
                    e.target.checked = false
                    alert('You can only select 3');
                }
            }

        }
    }, [count])
    // ======================= useEffect nft dropDown Select Count  OF UN-STAKE ==============================
    useEffect(() => {

        dropDownRefUnStake.current = dropDrown_SelectItem_unStake;
        function dropDrown_SelectItem_unStake(e) {

            // console.log('nft card', e.target.checked);
            if (e.target.checked === true) {
                setdiamondWalletUnstake(diamondWalletUnstake + 1)
                console.log("e.target.value UnStake", e.target.value)
                forUnStake.push(e.target.value)

            } else {
                setdiamondWalletUnstake(diamondWalletUnstake - 1);
                var localStrgArr = forUnStake;
                var imgName = e.target.value
                console.log("localStrgArr", localStrgArr);
                const index = forUnStake.indexOf(imgName);
                if (index > -1) {
                    forUnStake.splice(index, 1); // 2nd parameter means remove one item only
                    // localStorage.setItem('DH-Id', JSON.stringify(forUnStake))
                }
            }

        }
        console.log("unStakeArrayDropList", forUnStake);
    }, [diamondWalletUnstake])
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


    // ================================== API useEffect ===================================
    useEffect(() => {
        console.log("loginadre", loginUserAddress);
        fetch(`https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/${loginUserAddress}`, requestOptions).then(res => res.json())
            .then((result) => {
                console.log('result', result); //API Result log
                if (result.length > 0) {
                    result.map((findOurContractAddre) => {
                        if (findOurContractAddre.contractAddress == '0x913c6704985b958c86402c8001a5ae7287982ad9') {
                            console.log("findOurContractAddre", findOurContractAddre);
                            let arrayTokenIdAndName = [];
                            findOurContractAddre.metadata.map((getImageUrl, index) => {
                                if (index < 10) {
                                    var getCIDWithAndName = getImageUrl.tokenId;
                                    arrayTokenIdAndName.push(getCIDWithAndName);
                                }
                            });
                            setgetNftList(arrayTokenIdAndName);
                            console.log("arrayTokenIdAndName", arrayTokenIdAndName);
                        }
                    });
                }
            });
    }, [loginUserAddress])

    // ======================================== Stake Function =========================================
    useEffect(() => {
        createStakeRef.current = stakeClick;

        function stakeClick() {
            var stakeNumber = JSON.parse(localStorage.getItem("DH-Id"));
            console.log("stakeNumber", stakeNumber);
            console.log("diamondWallet 186", diamondWallet);
            stakingABiWthiCONTRACT.methods.stakingBatch(stakeNumber)
                .send(
                    {
                        from: loginUserAddress,
                    }
                )
                .on('error', function (error) {
                    // setDiamondWallet(diamondWallet + parseInt(stakeNumber))
                    // console.log(typeof stakeNumber);
                    console.log("error", error)
                    // let o = stakeNumber.Number()
                    // console.log(typeof o);
                    // console.log('error');
                }).then(function (info) {
                    console.log('success ', info);
                    // setDiamondWallet(diamondWallet + stakeNumber)
                    console.log("diamondWallet 186", diamondWallet);
                    setDiamondWallet(diamondWallet + parseInt(stakeNumber.length))
                });
        }
    }, [])

    // ============================================ UnStake Function =========================================
    useEffect(() => {
        let unstakeSelect = forUnStake
        if (unstakeSelect == null) {
            setUnStakeSelectArry([])
        } else {
            let revretFromLocal = JSON.parse(localStorage.getItem('DH-Id'));
            console.log("revretFromLocal", revretFromLocal);
            if (revretFromLocal !== undefined && revretFromLocal !== '' && revretFromLocal !== null) {

                setUnStakeSelectArry(revretFromLocal)
            }
            else {
                setUnStakeSelectArry([])
            }
            // setUnStakeSelectArry(unstakeSelect)
        }
        createUnStakeRef.current = unStakeClick;

        function unStakeClick() {
            var unStakeNumber = document.getElementById('unStakeNumber').value;
            console.log("parseInt(diamondWallet)", (diamondWallet), "unStakeNumber", parseInt(unStakeNumber));
            // setUnStakeSelectArry(getIdArrayUnStake)
            console.log('unStake Clicked');
            stakingABiWthiCONTRACT.methods.unstakeBatch(unstakeSelect)
                .send(
                    {
                        from: loginUserAddress
                        // value: unStakeNumber,
                    }
                )
                .on('error', function (error) {

                    // setDiamondWallet((diamondWallet) - parseInt(unStakeNumber.length))
                    console.log('error');
                }).then(function (info) {
                    localStorage.setItem("diamondWalletUnstake",unstakeSelect.length);
                    setgvoCount(unstakeSelect.length);
                    // setgvoCount(diamondWalletUnstake);
                    console.log('success ', info);
                    setDiamondWallet((diamondWallet) - parseInt(unstakeSelect.length))
                    var stakeArray = JSON.parse(localStorage.getItem("DH-Id"));
                    console.log("stakeArray", stakeArray);
                    forUnStake.map((elemt) => {
                        const index = stakeArray.indexOf(elemt);
                        console.log(index);
                        if (index > -1) {
                            stakeArray.splice(index, 1); // 2nd parameter means remove one item only
                            console.log("forUnStakeforUnStake set", forUnStake);
                            localStorage.setItem('DH-Id', JSON.stringify(stakeArray));
                            setUnStakeSelectArry(stakeArray)
                        }
                    });
                    
                    setdiamondWalletUnstake(0);
                });

        }
    }, [diamondWallet,gvoCount])
    // ================================================= COLLECTED GVO =====================================
    useEffect(() => {
        setgvoCount(localStorage.getItem("diamondWalletUnstake"));
        const gvoABiWthiCONTRACT = new web3_Stake.eth.Contract(CONTACT_ABI_GVO,CONTACT_ADDRESS_GVO );
        collectGVORef.current = collectGVO;
        function collectGVO() {
            console.log("GVO",gvoCount);
            gvoABiWthiCONTRACT.methods.transferGVOToken('0x619a67bc8132D5ce5Fb2D88a9a9912af86d9825b',gvoCount)
            .send(
                {
                    from: loginUserAddress,
                    gas:165000
                }
            )
            .on('error', function (error) {
                // setDiamondWallet(diamondWallet + parseInt(stakeNumber))
                // console.log(typeof stakeNumber);
                console.log("error", error)
                // let o = stakeNumber.Number()
                // console.log(typeof o);
                // console.log('error');
            }).then(function (info) {
                console.log('success ', info);
                localStorage.setItem("diamondWalletUnstake",0);
                setgvoCount(0)
                // setDiamondWallet(diamondWallet + stakeNumber)
                // console.log("diamondWallet 186", diamondWallet);
                // setDiamondWallet(diamondWallet + parseInt(stakeNumber.length))
            });
        }

    }, [gvoCount])


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
                                                        <div onClick={() => { toggleDropDownRef_stake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer' }}>Select NFT </div>
                                                        <ul id='custDrop_ul_ID' className='custDrop_ul' style={toggleDropdown_stake ? { display: 'none' } : { display: 'block' }}>
                                                            {getNftList.map((param, key) => {
                                                                // console.log(param);
                                                                // dhnftincremental++
                                                                return <li style={{ display: 'flex', alignItems: 'center' }} key={key}>
                                                                    <input className="form-check-input" type="checkbox" value={param} id="flexCheckDefault1" onClick={(e) => { dropDownRefStake.current(e) }} />
                                                                    <label className="form-check-label mx-4" htmlFor="flexCheckDefault1">
                                                                        {/* DHN #{param.split('/')[5].slice(4, 7)} */}
                                                                        theDH.io#{Number(param) + 1}
                                                                    </label>
                                                                </li>
                                                            })}
                                                            {/* <li>
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
                                                            </li> */}

                                                        </ul>
                                                    </div>
                                                    {/* </div> */}
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" ref={TokenValue} />
                                                        <button style={{ width: '150px' }} onClick={addToken}>Add Token</button>
                                                    </div> */}
                                                    <div className="inputDiv">
                                                        <input id="stakeNumber" type="number" value={count} disabled />
                                                        <button onClick={() => { createStakeRef.current() }}>Stake</button>
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
                                                    {/* <div className='row dh_NFT_cards_Div my-4' style={{ height: '359px' }}> */}
                                                    <div className='custom_dropdown'>
                                                        <div onClick={() => { toggleDropDownRef_unStake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer' }}>Select NFT</div>
                                                        <ul id='custDrop_ul_ID' className='custDrop_ul' style={toggleDropdown_unStake ? { display: 'none' } : { display: 'block' }}>
                                                            {unStakeSelectArry.map((param) => {
                                                                return <li style={{ display: 'flex', alignItems: 'center' }}>
                                                                    <input className="form-check-input" type="checkbox" value={param} id="flexCheckDefault1" onClick={(e) => { dropDownRefUnStake.current(e) }} />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                        theDH.io {Number(param) + 1}
                                                                    </label>
                                                                </li>
                                                            })}
                                                            {/* <li>
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
                                                            </li> */}

                                                        </ul>
                                                    </div>
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" />
                                                        <button style={{ width: '150px' }}>Add Token</button>
                                                    </div> */}
                                                    <div className="inputDiv">
                                                        <input id='unStakeNumber' type="number" value={diamondWalletUnstake} />
                                                        <button onClick={() => { createUnStakeRef.current() }}>UnStake</button>
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
                                                <input type="text" value={gvoCount} />
                                                <button onClick={() => { collectGVORef.current() }}>Collect</button>
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
