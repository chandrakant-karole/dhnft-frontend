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
import { Grid } from 'react-loader-spinner'


import { CONTACT_ADDRESS, CONTACT_ABI } from '../contract/GVOToken'
const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');


// ================================================= Stake and UnStake Start ============================================
var loginUserAddress1 = '';
const web3_Stake = new Web3(window.ethereum);
window.ethereum.enable().then((address) => {
    loginUserAddress1 = address[0];
})
const stakingABiWthiCONTRACT = new web3_Stake.eth.Contract(NFTAbi, '0x028cB60B6B11B4195937676ac99124E80917D1DC');
export default function DHRewards() {

    let [diamondWallet, setDiamondWallet] = useState(0)
    function stakeNFT() {
        var stakeNumber = document.getElementById('stakeNumber').value;
        console.log("stakeNumber", stakeNumber);
        stakingABiWthiCONTRACT.methods.createStake(stakeNumber)
            .send(
                {
                    from: loginUserAddress1,
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
                        from: loginUserAddress1,
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
    // ================================================= Stake and UnStake End ============================================

    // ================================================= Add Token Start ============================================
    const TokenValue = useRef(null)

    const addToken = async (e) => {
        let tokenValue = TokenValue.current.value
        console.log("event", tokenValue)
        console.log('mintNft');
        await window.ethereum.enable().then((address) => {
            var loginUserAddress = address[0];
            console.log(address, 'this is the data we got ')


            const contactList = new web3.eth.Contract(CONTACT_ABI, CONTACT_ADDRESS);

            // const web_value = web3.utils.toWei(tokenValue, 'ether');
            // console.log(web_value);

            var tokenPirce = 0.0001;
            console.log(" tokenValue", tokenValue);
            var totalAmount = tokenPirce * tokenValue;

            console.log('tokenPirce', tokenPirce);
            console.log('totalAmount', totalAmount);
            var tokens = web3.utils.toWei(totalAmount.toString(), 'ether')
            var bntokens = web3.utils.toBN(tokens)

            console.log('tokens', tokens);
            console.log('bntokens', bntokens);
            console.log("210000*tokenValue,", 100000 * tokenValue);

            // contactList.methods.transferToken('0x01f58f74ceb948455ff28ecc6e402225c1778d26',bntokens,tokenValue) //client contract address 
            contactList.methods.transferToken('0x79319A973Be6C6F0cbad2206ea4F6573A9ecF223', tokens, tokenValue) //nadeeem contract address
                .send(
                    {
                        from: loginUserAddress,
                        gas: 4000000,
                        gas: 200000 * tokenValue,
                        // value: web_value,
                        // value:5
                        value: tokens,
                        // gasPrice:'130000000000',
                        // gasPrice: '5400000000',
                    }
                )
                .on('error', function (error) {
                    console.log('error');
                    // location.reload();
                }).then(function (info) {
                    console.log('success ', info);
                    alert("You got the GVO Token , Please check the MetaMask! || If You dont get the token the add this Token Address : 0x2b0b868e5595715e3b5d9e54fc58ed6b1f27a450")
                    // window.location.href = "/success";
                    // var token_id = info.events.Transfer.returnValues.tokenId;
                    // var transactionHash = info.transactionHash;

                });
            // setShow(false)
        });
    }
    // ================================================= Add Token End ============================================
    const [loader, setLoader] = useState(false)
    const [metadataAll, setMetadataAll] = useState([])

    const [contract, setContract] = useState([])
    const [ipfs, setIpfs] = useState([])
    let [count, setCount] = useState(0);


    const checkedNFTCount = (e) => {
        const checkedItem = e.target.checked;
        // console.log(checkedItem);
        if(checkedItem === true ){
            if (checkedItem === true && count < 3) {
                // console.log('checked')
                setCount(count + 1)
                // console.log(count)
            } else {
                alert("You Stake Max 3 DH-NFT")
                e.target.checked = false
            }
        }        
        if (checkedItem === false) {
            // console.log('not checked');
            setCount(count - 1)
            // console.log(count)
        }
    }
    const requestOptions = {
        method: 'GET',
        // headers: { 'x-api-key': '2527a5e1-0c06-48a6-abcc-74fdbc9c7ce4' } //testnet
        headers: {
            'x-api-key': 'bf846fcb-8fb4-4c74-a0ce-0e9642fc6741',
            'x-testnet-type': 'polygonscan',
            'Content-Type': 'application/json',
            'PageSize': '10'
        } //mainet
    };
    useEffect(() => {
        // setLoader()

        // ================================= Fetch ===============================
        fetch("https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/0xd57a6427ad96c17b7611f99967a65451f97b1c74", requestOptions).then(res => res.json())
            .then(
                (result) => {
                    // console.log("result", result);
                    setContract(result)
                    // setIpfs(result.balances)
                    // console.log(ipfs);
                    // console.log();
                    // this.setState({
                    //   isLoaded: true,
                    //   items: result.items
                    // });

                    let num = 100
                    result.map((param) => {
                        // setParamMetaData(param.metadata)
                        // console.log("meta DAta",param.metadata);
                        // param.metadata.map((resp)=>{console.log("metaDATA",resp)})
                        // console.log(param.metadata[0].url);
                        // console.log(param.metadata[0].url.split("/"));
                        // console.log(param.metadata[0].url.split("/")[2]);
                        param.balances.map((res) => {
                            num = num + 1
                            // console.log(num);
                            let ipfs1 = 'https://gateway.pinata.cloud/ipfs/' + 'QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj' + '/DHF_' + num + '.png';
                            // console.log("ipfs", typeof ipfs);
                            ipfs.push(ipfs1)
                        });
                        setIpfs(ipfs)
                        setLoader(true)
                        if (param.contractAddress === '0x45e6d6a4598dcdd20df354de0882c9844b47db20') {
                            // if(param.contractAddress === "0xfbb89d3e41e1d0ab8d2e1453b2a2278b8644c8a2"){

                            // console.log("metadata179", param.metadata)
                            setMetadataAll(param.metadata)
                            // console.log(param.metadata);
                            // console.log("param.metadata[0].metadata.image", param.metadata[0].metadata.image)
                            // let urlSplit = param.metadata[0].metadata.image.split('./')[1] 
                            // console.log('urlSplit',urlSplit)
                            // let imgUrl = 'https://ipfs.io' + urlSplit
                            // console.log('imgUrl', imgUrl);
                            // metadataAll.map((urls)=>{
                            //   console.log('urls',urls);
                            //   console.log(urls.metadata);
                            // })
                        } else {
                            console.log('something worng');
                            console.log(param.contractAddress)
                        }
                    })
                },


                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error", error);
                    // this.setState({
                    //   isLoaded: true,
                    //   error
                    // });
                }
            )
        console.log("RE-RENDERED");

    }, []);

 
  
    
    

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
                                                    <div className='row dh_NFT_cards_Div my-4' style={{height:'359px'}}>
                                                        {loader ? ipfs.map((urls) => {
                                                            return <div className='col-lg-4 col-md-6 col-12' key={urls}>
                                                                <div className='nft_boxes'>
                                                                    <img src={urls} alt="" />
                                                                    <div className='nft_box_btm'>
                                                                        <div className='title_card'>
                                                                            {/* <h5>NFT Name</h5> */}

                                                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                                                <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
                                                                            </Form.Group>
                                                                        </div>
                                                                        <p> <span>94</span> days held </p>
                                                                        <p> DHT Reward: <span>3000</span> </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }) : <div className='dh_NFT_cards_InnerDiv'>
                                                            <Grid color="#FFFFFF" height={60} width={60} />
                                                        </div>
                                                        }
                                                    </div>
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" ref={TokenValue} />
                                                        <button style={{ width: '150px' }} onClick={addToken}>Add Token</button>
                                                    </div> */}
                                                    <div className="inputDiv">
                                                        <input value={count} id="stakeNumber" type="number" disabled/>
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
                                                    {/* <div className="inputDiv my-4">
                                                        <input type="number" />
                                                        <button style={{ width: '150px' }}>Add Token</button>
                                                    </div> */}
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
            {/* <FooterCommon/> */}
        </>

    )

}
