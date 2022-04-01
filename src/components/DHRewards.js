import { React, useState, useRef, useEffect, useContext } from 'react';
// import Navbar from "./Navbar";
import Rewards from './Rewards';
import Web3 from "web3";
import { StakingAbi } from "../contract/staking-abi";
import { CONTACT_ADDRESS_BURN_MINT, brun_mint_Abi } from '../contract/dht-abi';
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
import { Oval, Grid } from 'react-loader-spinner';
import { DhState } from '../context/dhContext';



export default function DHRewards() {
    // const myData = useContext(dhfContext)
    // console.log("myData.data", myData.data);

    const { data1, setData } = DhState();
    console.log("data", data1);
    // =========================== API Header Start ================================================
    const requestOptions = {
        method: 'GET',
        headers: {
            'x-api-key': 'bf846fcb-8fb4-4c74-a0ce-0e9642fc6741',
            'x-testnet-type': 'ethereum-rinkeby',
            'Content-Type': 'application/json',
        }
    };

    // =========================== API Header End ================================================
    // ============================ ALL useState ===============================
    const [count, setCount] = useState(0)
    const [toggleDropdown_stake, setToggleDropdown_stake] = useState(true)
    const [toggleDropdown_unStake, setToggleDropdown_unStake] = useState(true)
    let [getNftList, setgetNftList] = useState([])
    let [loginUserAddress, setloginUserAddress] = useState()
    const [imgArry, setImgArry] = useState([]);
    const [forUnStake, setforUnStake] = useState([])
    const [diamondWallet, setDiamondWallet] = useState(0)
    const [unStakeSelectArry, setUnStakeSelectArry] = useState([])
    const [diamondWalletUnstake, setdiamondWalletUnstake] = useState(0)
    const [gvoCount, setgvoCount] = useState(0);
    const [stakeDropLoader, setstakeDropLoader] = useState(false)
    const [rewardCollected, setRewardCollected] = useState(null)
    const [gvoBalance, setGvoBalance] = useState(0)
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
    let loginUserAdd;
    useEffect(async () => {
        window.ethereum.enable().then((address) => {
            loginUserAdd = address[0];
            console.log("loginUserAdd01", loginUserAdd);
            setloginUserAddress(loginUserAdd)
            setData(loginUserAdd)
            console.log("loginUserAddressloginUserAddress_DHREWARD", loginUserAddress);
        });
        setloginUserAddress(data1)
    }, [])


    const stakingABiWthiCONTRACT = new web3_Stake.eth.Contract(brun_mint_Abi, CONTACT_ADDRESS_BURN_MINT);

    // ======================= useEffect nft dropDown Select Count  OF STAKE ==============================
    useEffect(() => {
        dropDownRefStake.current = dropDrown_SelectItem_stake;
        console.log("dropDownRefStake.current", dropDownRefStake.current);
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
        console.log(unStakeSelectArry.length, "opopoopo");
        // ================================================
        // if(unStakeSelectArry.length == diamondWalletUnstake){
        //   console.log("check");
        //   document.getElementById('unStakeBtn').removeAttribute("disabled", "");
        //   } else{
        //   document.getElementById('unStakeBtn').setAttribute("disabled", "")
        //   }

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

        setTimeout(() => {
            console.log("loginUserAdd", loginUserAdd);
            const http = require("https");

            const options = {
                "method": "POST",
                "hostname": "api-eu1.tatum.io",
                "port": null,
                "path": "/v3/ethereum/smartcontract",
                "headers": {
                    "content-type": "application/json",
                    "x-testnet-type": "ethereum-rinkeby",
                    "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
                }
            };

            const req = http.request(options, function (res) {
                const chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    // console.log(body.toString());
                    console.log("bodybody", JSON.parse(body).data);
                    var dataNFT = JSON.parse(body).data;
                    // setimageDetails(JSON.parse(body).data);
                    if (dataNFT !== undefined) {
                        setstakeDropLoader(true)
                        setgetNftList(JSON.parse(body).data);
                    }

                });
            });

            req.write(JSON.stringify({
                contractAddress: '0xc74ca417d8b5E05BCc7823ce5c4Bea0D65c94dE2',
                methodName: 'walletOfOwner',
                methodABI: {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "walletOfOwner",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                params: [loginUserAdd],
                // amount: '100000',
                // fromPrivateKey: '0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2',
                // nonce: 0,
                // fee: { gasLimit: '40000', gasPrice: '20' }
            }));
            req.end();


        }, 5000)


        // console.log("loginadre", loginUserAddress);
        // console.log("loginadre", loginUserAddress);
        // const forDataSearching = new web3_Stake.eth.Contract(brun_mint_Abi, CONTACT_ADDRESS_BURN_MINT);
        // forDataSearching.methods.walletOfOwner(loginUserAddress).call().then(function (result) {
        //     console.log(result);
        //     setgetNftList(result);
        //     // setimageDetails(result);
        //     // console.log("imageDetails",imageDetails);
        //     // setLoaderFront(true);
        //     })
        //     .catch((err)=>{
        //     console.log("error forDataSearching",err );
        //     });
        // fetch(`https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/${loginUserAddress}`, requestOptions).then(res => res.json())
        //     .then((result) => {
        //         console.log('result', result); //API Result log
        //         if (result.length > 0) {
        //             result.map((findOurContractAddre) => {
        //                 if (findOurContractAddre.contractAddress == '0xf2c7ddf9e5a6e8aa3474a11e7b367528f21fc505') {
        //                     console.log("findOurContractAddre", findOurContractAddre);
        //                     let arrayTokenIdAndName = [];
        //                     findOurContractAddre.metadata.map((getImageUrl, index) => {
        //                         if (index < 10) {
        //                             var getCIDWithAndName = getImageUrl.tokenId;
        //                             arrayTokenIdAndName.push(getCIDWithAndName);
        //                         }
        //                     });
        //                     setgetNftList(arrayTokenIdAndName);
        //                     console.log("arrayTokenIdAndName", arrayTokenIdAndName);
        //                 }
        //             });
        //         }
        //     });
    }, [loginUserAddress, diamondWallet])

    // =================================== get stake nft's for unstake===================
    useEffect(() => {

        setTimeout(() => {

            const http = require("https");

            const options = {
                "method": "POST",
                "hostname": "api-eu1.tatum.io",
                "port": null,
                "path": "/v3/ethereum/smartcontract",
                "headers": {
                    "content-type": "application/json",
                    "x-testnet-type": "ethereum-rinkeby",
                    "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
                }
            };

            const req = http.request(options, function (res) {
                const chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    // console.log(body.toString());
                    console.log("bodybody", JSON.parse(body).data);
                    var dataNFT = JSON.parse(body).data;
                    // setimageDetails(JSON.parse(body).data);
                    console.log("dataNFT", dataNFT);
                    if (dataNFT !== undefined) {
                        console.log("tesing unstake");
                        setUnStakeSelectArry(dataNFT);
                        console.log("unStakeSelectArry", unStakeSelectArry);
                        // setstakeDropLoader(true)
                        // setgetNftList(JSON.parse(body).data);
                    }

                });
            });

            req.write(JSON.stringify({
                contractAddress: '0xc74ca417d8b5E05BCc7823ce5c4Bea0D65c94dE2',
                methodName: 'getStakedTokens',
                methodABI: {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "getStakedTokens",
                    "outputs": [
                        {
                            "internalType": "uint256[]",
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                params: [loginUserAdd],
                // amount: '100000',
                // fromPrivateKey: '0x05e150c73f1920ec14caa1e0b6aa09940899678051a78542840c2668ce5080c2',
                // nonce: 0,
                // fee: { gasLimit: '40000', gasPrice: '20' }
            }));
            req.end();


        }, 5000)
    }, [loginUserAddress])

    // =================================== get reward for unstake time ===================
    // useEffect(() => {
    //     // await window.contract.methods.stage().call(function (err, received_res) {
    //     //     if (err) {
    //     //       console.log("An error occured", err)
    //     //       return
    //     //     }
    //     //     console.log("stage", received_res)

    //     //    $('.stage').val(received_res);
    //     // });
    //     stakingABiWthiCONTRACT.methods.calculateReward().call(
    //         function (err, received_res) {
    //                 if (err) {
    //                   console.log("An error occured", err)
    //                   return
    //                 }
    //                 console.log("success", received_res)
    //             });
    //         // .on('error', function (error) {
    //         //     // setDiamondWallet(diamondWallet + parseInt(stakeNumber))
    //         //     // console.log(typeof stakeNumber);
    //         //     console.log("error", error)
    //         //     // let o = stakeNumber.Number()
    //         //     // console.log(typeof o);
    //         //     // console.log('error');
    //         // }).then(function (info) {
    //         //     console.log('success ', info);
    //         //     // setDiamondWallet(diamondWallet + stakeNumber)
    //         //     console.log("diamondWallet 186");
    //         // });

    // }, [])
    useEffect(() => {

        setTimeout(() => {

            const http = require("https");

            const options = {
                "method": "POST",
                "hostname": "api-eu1.tatum.io",
                "port": null,
                "path": "/v3/ethereum/smartcontract",
                "headers": {
                    "content-type": "application/json",
                    "x-testnet-type": "ethereum-rinkeby",
                    "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
                }
            };

            const req = http.request(options, function (res) {
                const chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    // console.log(body.toString());
                    console.log("bodybody", JSON.parse(body).data);
                    var dataNFT = JSON.parse(body).data;
                    // setimageDetails(JSON.parse(body).data);
                    console.log("collect_reward_called", dataNFT);
                    setRewardCollected(dataNFT)
                    console.log("rewardCollected", rewardCollected);
                    if (dataNFT !== undefined) {
                        console.log("tesing unstake");
                        // setUnStakeSelectArry(dataNFT);
                        // console.log("unStakeSelectArry",unStakeSelectArry);
                        // setstakeDropLoader(true)
                        // setgetNftList(JSON.parse(body).data);
                    }

                });
            });

            req.write(JSON.stringify({
                contractAddress: '0xc74ca417d8b5E05BCc7823ce5c4Bea0D65c94dE2',
                methodName: 'calculateReward',
                methodABI: {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_user",
                            "type": "address"
                        }
                    ],
                    "name": "calculateReward",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                },
                params: [loginUserAdd],
            }));
            req.end();


        }, 5000)
    }, [])

    // ======================================== Stake Function =========================================
    useEffect(() => {
        createStakeRef.current = stakeClick;

        function stakeClick() {
            document.getElementById('stakeLoader').style.display = "flex";
            var stakeNumber = JSON.parse(localStorage.getItem("DH-Id"));
            console.log("stakeNumber", stakeNumber);
            console.log("diamondWallet 186", diamondWallet);
            stakingABiWthiCONTRACT.methods.stakeBatch(stakeNumber)
                .send(
                    {
                        from: loginUserAdd
                    }
                )
                .on('error', function (error) {
                    // setDiamondWallet(diamondWallet + parseInt(stakeNumber))
                    // console.log(typeof stakeNumber);
                    console.log("error", error)
                    // let o = stakeNumber.Number()
                    // console.log(typeof o);
                    // console.log('error');
                    document.getElementById('stakeLoader').style.display = "none";
                    window.location.reload()
                }).then(function (info) {
                    console.log('success ', info);
                    // setDiamondWallet(diamondWallet + stakeNumber)
                    console.log("diamondWallet 186", diamondWallet);
                    setDiamondWallet(diamondWallet + parseInt(stakeNumber.length))
                    document.getElementById('stakeLoader').style.display = "none";
                    window.location.reload()
                });
        }
    }, [])

    // ============================================ UnStake Function =========================================
    useEffect(() => {
        let unstakeSelect = forUnStake
        // if (unstakeSelect == null) {
        //     setUnStakeSelectArry([])
        // } else {
        //     let revretFromLocal = JSON.parse(localStorage.getItem('DH-Id'));
        //     console.log("revretFromLocal", revretFromLocal);
        //     if (revretFromLocal !== undefined && revretFromLocal !== '' && revretFromLocal !== null) {

        //         setUnStakeSelectArry(revretFromLocal)
        //     }
        //     else {
        //         setUnStakeSelectArry([])
        //     }
        //     // setUnStakeSelectArry(unstakeSelect)
        // }

        createUnStakeRef.current = unStakeClick;

        function unStakeClick() {
            document.getElementById('stakeLoader').style.display = "flex";
            console.log("nadeem");
            var unStakeNumber = document.getElementById('unStakeNumber').value;
            console.log("parseInt(diamondWallet)", (diamondWallet), "unStakeNumber", parseInt(unStakeNumber));
            // setUnStakeSelectArry(getIdArrayUnStake)
            console.log('unStake Clicked');
            console.log('loginUserAdd', loginUserAddress);
            stakingABiWthiCONTRACT.methods.unstakeBatch(unstakeSelect)
                .send(
                    {
                        from: loginUserAddress,
                        // value: unStakeNumber,
                    }
                )
                .on('error', function (error) {

                    // setDiamondWallet((diamondWallet) - parseInt(unStakeNumber.length))
                    console.log('error');
                    document.getElementById('stakeLoader').style.display = "none";
                    window.location.reload()

                }).then(function (info) {
                    localStorage.setItem("diamondWalletUnstake", unstakeSelect.length);
                    setgvoCount(unstakeSelect.length);
                    // setgvoCount(diamondWalletUnstake);
                    console.log('success ', info);
                    setDiamondWallet((diamondWallet) - parseInt(unstakeSelect.length))
                    var stakeArray = JSON.parse(localStorage.getItem("DH-Id"));
                    console.log("stakeArray", stakeArray);
                    // if(stakeArray !== null){
                    // }
                    // forUnStake.map((elemt) => {
                    //     const index = stakeArray.indexOf(elemt);
                    //     console.log(index);
                    //     if (index > -1) {
                    //         stakeArray.splice(index, 1); // 2nd parameter means remove one item only
                    //         console.log("forUnStakeforUnStake set", forUnStake);
                    //         localStorage.setItem('DH-Id', JSON.stringify(stakeArray));
                    //         setUnStakeSelectArry(stakeArray)
                    //     }
                    // });

                    setdiamondWalletUnstake(0);
                    document.getElementById('stakeLoader').style.display = "none";
                    window.location.reload()

                });

        }
    }, [diamondWallet, gvoCount, loginUserAddress])
    // ================================================= COLLECTED GVO =====================================
    useEffect(() => {
        setgvoCount(localStorage.getItem("diamondWalletUnstake"));
        const gvoABiWthiCONTRACT = new web3_Stake.eth.Contract(CONTACT_ABI_GVO, CONTACT_ADDRESS_GVO);
        collectGVORef.current = collectGVO;
        function collectGVO() {
            document.getElementById('collectLoader').style.display = "flex";
            console.log("GVO", rewardCollected, "CONTACT_ADDRESS_GVO", CONTACT_ADDRESS_GVO);
            gvoABiWthiCONTRACT.methods.transferGVOToken("0x619a67bc8132D5ce5Fb2D88a9a9912af86d9825b", rewardCollected)
                .send(
                    {
                        from: loginUserAddress
                    }
                )
                .on('error', function (error) {
                    // setDiamondWallet(diamondWallet + parseInt(stakeNumber))
                    // console.log(typeof stakeNumber);
                    console.log("error", error)
                    // let o = stakeNumber.Number()
                    // console.log(typeof o);
                    // console.log('error');
                    document.getElementById('collectLoader').style.display = "none";
                    window.location.reload()

                }).then(function (info) {
                    console.log('success ', info);
                    localStorage.setItem("diamondWalletUnstake", 0);
                    setgvoCount(0)
                    // setDiamondWallet(diamondWallet + stakeNumber)
                    // console.log("diamondWallet 186", diamondWallet);
                    // setDiamondWallet(diamondWallet + parseInt(stakeNumber.length))
                    document.getElementById('collectLoader').style.display = "none";
                    window.location.reload()

                });
        }

    }, [rewardCollected, loginUserAddress])


    useEffect(() => {

        setTimeout(() => {

            const http = require("https");

            const options = {
                "method": "POST",
                "hostname": "api-eu1.tatum.io",
                "port": null,
                "path": "/v3/ethereum/smartcontract",
                "headers": {
                    "content-type": "application/json",
                    "x-testnet-type": "ethereum-rinkeby",
                    "x-api-key": "bf846fcb-8fb4-4c74-a0ce-0e9642fc6741"
                }
            };

            const req = http.request(options, function (res) {
                const chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    const body = Buffer.concat(chunks);
                    // console.log(body.toString());
                    console.log("bodybody", JSON.parse(body).data);
                    var dataNFT = JSON.parse(body).data;
                    // setimageDetails(JSON.parse(body).data);
                    console.log("dataNFT", dataNFT);
                    setGvoBalance(dataNFT)
                    // console.log("rewardCollected",rewardCollected);
                    if (dataNFT !== undefined) {
                        console.log("tesing unstake");
                        // setUnStakeSelectArry(dataNFT);
                        // console.log("unStakeSelectArry",unStakeSelectArry);
                        // setstakeDropLoader(true)
                        // setgetNftList(JSON.parse(body).data);
                    }

                });
            });

            req.write(JSON.stringify({
                contractAddress: '0x8E61F383B4ecF92F0074C0CcB7c2cB9dA6Dd2F1A',
                methodName: 'balanceOf',
                methodABI: {
                    "inputs":
                        [{ "internalType": "address", "name": "tokenOwner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function"
                },
                params: [loginUserAdd],
            }));
            req.end();


        }, 5000)
    }, [])
    //   ======================================= MAX input felid =================================
    const [maxInput_val, setMaxInput_val] = useState(1)
    function maxInput_Onchange(e) {
        if (e.target.value <= Number(rewardCollected)) {
            setMaxInput_val(e.target.value)
        } else {
            setMaxInput_val(1)
        }
    }
    function maxClicked() {
        setMaxInput_val(rewardCollected)
    }
    // ================================= select ALL Unstake dropDown ================================
    function select_all_unstakeBtnClick(e) {
        console.log(e.target.checked);
        if(e.target.checked == true){
            // document.getElementsByClassName('all_select_input')[0].style.backgroundColor = "red !important";
            let selectAll_ul = document.getElementById('custDrop_ul_ID_unstake');
            let allnft_List = selectAll_ul.getElementsByClassName('after_unstake_list');
            for (let i = 0; i < allnft_List.length; i++) {
                if (allnft_List[i].checked == true) {
                    setdiamondWalletUnstake(i + 1)
                } else {
                    allnft_List[i].click()
                    setdiamondWalletUnstake(i + 1)
                }
            }
        } else{
            let selectAll_ul = document.getElementById('custDrop_ul_ID_unstake');
            let allnft_List = selectAll_ul.getElementsByClassName('after_unstake_list');
            // console.log("clicked");
            console.log("allnft_List", allnft_List.length);
            for (let i = 0; i < allnft_List.length; i++) {
                console.log("1a");
    
                if (allnft_List[i].checked == true) {
                    console.log("1b");
                    // setdiamondWalletUnstake(i - 1);
                    // console.log("diamondWalletUnstake",diamondWalletUnstake);
                    allnft_List[i].click()
                } else {
                    // setdiamondWalletUnstake(i - 1)
                }
                // console.log("allnft_List[i].checked", allnft_List[i].checked)
            }
            setdiamondWalletUnstake(0);
        }
    }
    // ================================= unselect ALL Unstake dropDown ================================
    // function unselect_all_unstakeBtnClick() {
    
    // }
    return (
        <>
            <div className='connect_wallet'>
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
                                        <Accordion.Body style={{ background: "#132323", position: "relative" }}>
                                            <div id="stakeLoader" style={{ display: "none", width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.8)", top: "0px", left: "0px", zIndex: "8" }}>
                                                <Grid color="#FFFFFF" height={60} width={60} />
                                            </div>
                                            <Tabs defaultActiveKey="Stake" id="uncontrolled-tab-example" className="my-3 customTab">
                                                <Tab eventKey="Stake" className='stakeButton' title="Stake">
                                                    <div className="stakeContentDiv">
                                                        {/* <div className='row dh_NFT_cards_Div my-4' style={{ height: '359px' }}> */}
                                                        <div className='custom_dropdown'>
                                                            <div onClick={() => { toggleDropDownRef_stake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Select NFT <span className='stake_dropArrow'><svg style={toggleDropdown_stake ? { transform: "rotate(0deg)" } : { transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                            </svg></span></div>
                                                            <ul id='custDrop_ul_ID' className='custDrop_ul' style={toggleDropdown_stake ? { display: 'none' } : { display: 'block' }}>
                                                                {stakeDropLoader ? getNftList.map((param, key) => {
                                                                    // console.log(param);
                                                                    // dhnftincremental++
                                                                    return <li style={{ display: 'flex', alignItems: 'center' }} key={key}>
                                                                        <input className="form-check-input" type="checkbox" value={param} id="flexCheckDefault1" onClick={(e) => { dropDownRefStake.current(e) }} />
                                                                        <label className="form-check-label mx-4" htmlFor="flexCheckDefault1">
                                                                            {/* DHN #{param.split('/')[5].slice(4, 7)} */}
                                                                            theDH.io#{Number(param) + 1}
                                                                        </label>
                                                                    </li>
                                                                }) : <div style={{ display: "flex", justifyContent: "center" }}><Oval color="#0e8d8f" height={30} width={30} /></div>}
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
                                                                    GVO Token in wallet:
                                                                </div>
                                                                <div className=''>{gvoBalance}</div>
                                                            </div>
                                                            <div className='StakewalletDiv' style={{ marginTop: '20px' }}>
                                                                <div className="text">
                                                                    GVO Token to collect:
                                                                </div>
                                                                <div className=''>{rewardCollected}</div>
                                                            </div>
                                                            <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                                <div className="text">
                                                                    DH NFT Stake :
                                                                </div>
                                                                <div className=''>{unStakeSelectArry.length}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="UnStake" title="UnStake">
                                                    <div className="stakeContentDiv">
                                                        {/* <div className='row dh_NFT_cards_Div my-4' style={{ height: '359px' }}> */}
                                                        <div className='custom_dropdown'>
                                                            <div onClick={() => { toggleDropDownRef_unStake.current() }} className='custom_dropdown_txt my-4' style={{ border: '1px solid #fff', padding: '10px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Select NFT <span className='unstake_dropArrow'><svg style={toggleDropdown_unStake ? { transform: "rotate(0deg)" } : { transform: "rotate(180deg)" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                                            </svg></span></div>
                                                            <ul id='custDrop_ul_ID_unstake' className='custDrop_ul' style={toggleDropdown_unStake ? { display: 'none' } : { display: 'block' }}>
                                                                {/* <button id='unselect_allBtn' onClick={unselect_all_unstakeBtnClick} className='select_all_unstakeBtn'>unSelect All</button> */}
                                                                {/* <button id='select_allBtn' onClick={select_all_unstakeBtnClick} className='select_all_unstakeBtn'>Select All</button> */}
                                                                <li style={{ display: 'flex', alignItems: 'center' }}>
                                                                    <input className='form-check-input all_select_input' id='all' type='checkbox' onClick={select_all_unstakeBtnClick} />
                                                                    <label>All</label>
                                                                </li>
                                                                {unStakeSelectArry.map((param, key) => {
                                                                    return <li style={{ display: 'flex', alignItems: 'center' }} key={key}>
                                                                        <input className="form-check-input after_unstake_list" type="checkbox" value={param} id="flexCheckDefault1" onClick={(e) => { dropDownRefUnStake.current(e) }} />
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
                                                            <input id='unStakeNumber' type="number" disabled value={diamondWalletUnstake} />
                                                            <button className='btn' id="unStakeBtn" onClick={() => { createUnStakeRef.current() }}>UnStake</button>
                                                        </div>
                                                        <div className="ContentDiv">
                                                            <div className='StakewalletDiv'>
                                                                <div className="text">
                                                                    GVO Token in wallet:
                                                                </div>
                                                                <div className=''>{gvoBalance}</div>
                                                            </div>
                                                            <div className='StakewalletDiv' style={{ marginTop: '20px' }}>
                                                                <div className="text">
                                                                    GVO Token to collect:
                                                                </div>
                                                                <div className=''>{rewardCollected}</div>
                                                            </div>
                                                            <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                                <div className="text">
                                                                    DH NFT Stake :
                                                                </div>
                                                                <div className=''>{unStakeSelectArry.length}</div>
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
                                        <Accordion.Body style={{ background: "#132323", position: "relative" }}>
                                            <div id="collectLoader" style={{ display: "none", width: "100%", height: "100%", position: "absolute", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.8)", top: "0px", left: "0px", zIndex: "8" }}>
                                                <Grid color="#FFFFFF" height={60} width={60} />
                                            </div>
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
                                                    <input type="number" value={maxInput_val} onChange={maxInput_Onchange} />
                                                    <button className='maxBtn' onClick={maxClicked}>Max</button>
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
                                                            <img src={logo} alt="" style={{ width: "35px", marginRight: "10px" }} /> GVO Token
                                                        </div>
                                                        <div className='compoundingDiv'>
                                                            <span><img src={questionMark} alt="icon" style={{ width: '25px', marginLeft: '10px' }} /></span>
                                                            <div className="compounding_popover">
                                                                When you stake DIAMOND HAND, you also earn extra GVO Token as a bonus reward.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='YourStakeDiv' style={{ marginTop: '20px' }}>
                                                        <div className="text">
                                                            Earned to date:
                                                        </div>
                                                        <div className=''>{unStakeSelectArry.length}</div>
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
            </div>
        </>

    )

}
