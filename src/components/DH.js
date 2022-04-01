import { React, useState, useEffect, useRef } from 'react'
import '../styles/components/_connectwallet.scss';
import { Grid } from 'react-loader-spinner'
import { InputGroup, FormControl, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import dhfNFT from '../assets/Trails.png'


import Rewards from './Rewards';
import rarity1 from "../assets/images/rarity/white.png";
import rarity2 from "../assets/images/rarity/magnethik.png";
import rarity3 from "../assets/images/rarity/compression.png";
import rarity4 from "../assets/images/rarity/framed.png";
import { FaSearch } from 'react-icons/fa';

import { BurnAbi, CONTACT_ADDRESS } from '../contract/burn-abi';
import { mint_DHFNFT, CONTACT_ADDRESS_DHFNFT } from '../contract/dhf-nft';
import { CONTACT_ADDRESS_BURN_MINT, brun_mint_Abi } from '../contract/dht-abi';

import Web3 from "web3";
import { DhState } from '../context/dhContext';
const web3_Stake = new Web3(window.ethereum);
console.log("web3_Stake", web3_Stake);


function DH() {
  const { data1, setData } = DhState();

  // =========================== API Header Start ================================================
  const requestOptions = {
    method: 'GET',
    headers: {
      'x-api-key': 'bf846fcb-8fb4-4c74-a0ce-0e9642fc6741',
      'x-testnet-type': 'ethereum',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };
  // =========================== API Header End ================================================

  // ============================ ALL useState ===============================
  const [count, setCount] = useState(0)
  const [mainNftBox_toggle, setMainNftBox_toggle] = useState(true)
  const [mainNftBox_toggle_oneNft, setMainNftBox_toggle_oneNft] = useState(true)
  var [loginUserAddress, setloginUserAddress] = useState('');
  const [imageDetails, setimageDetails] = useState([]);
  const [imgArry, setImgArry] = useState([])
  const [mintedImageUrl, setMintedImageUrl] = useState([])
  const [loader, setLoader] = useState(false)
  const [loaderFront, setLoaderFront] = useState(false)
  const [allocated, setAllocated] = useState(0)
  // ====================== ALL useRef =================================
  const cardCountRef = useRef(null)
  const burnRef = useRef(null)




  // ============================== NFT CARD COUNT ==================================
console.log("data1", data1);
  let loginUserAdd;
  useEffect(async () => {
    window.ethereum.enable().then((address) => {
      loginUserAdd = address[0];
      // sessionStorage.setItem("oneuseforAdd", loginUserAdd);
      console.log("loginUserAddress1loginUserAddress1", loginUserAdd);
      setloginUserAddress(loginUserAdd)
      setData(loginUserAdd)
      console.log("loginUserAddress1loginUserAddress1", loginUserAddress);
    });
    // console.log("data1",data1);
    // setloginUserAddress(data1);
    // loginUserAdd =  data1;
    // var oneuseforAdd = sessionStorage.getItem('oneuseforAdd');
    // console.log("oneuseforAdd",oneuseforAdd);
    // const forDataSearching = new web3_Stake.eth.Contract(brun_mint_Abi, CONTACT_ADDRESS_BURN_MINT);
    //  forDataSearching.methods.walletOfOwner('0xD57A6427Ad96C17b7611F99967a65451F97b1C74').call().then(function (result) {
    //   console.log(result);
    //   setimageDetails(result);
    //   console.log("imageDetails",imageDetails);
    //   setLoaderFront(true);
    // })
    // .catch((err)=>{
    //   setimageDetails([]);
    //   console.log("error forDataSearching",err );
    //   setLoaderFront(true);
    // });
    cardCountRef.current = nftCardClicked;
    function nftCardClicked(e) {
      let splitNumber = Number(e.target.value)
      console.log("e.target.value", splitNumber);
      // console.log('nft card', e.target.checked);
      if (e.target.checked === true) {
        setCount(count + 1)
        // let splitNumber = Number(e.target.value.split('#')[1])
        // console.log("e.target.value",splitNumber);
        // imgArry.push(e.target.value)
        imgArry.push(splitNumber)
        setImgArry(imgArry)
        localStorage.setItem('Data-object', JSON.stringify(imgArry))
        // console.log(JSON.stringify(e.target.value));
        // console.log(e.target.value);
        // console.log(JSON.parse(e.target.value));
      } else {
        setCount(count - 1)
        // imgArry.pop(e.target.value)
        var imgName = splitNumber;
        console.log("imgName", imgName);
        var localStrgArr = JSON.parse(localStorage.getItem('Data-object'));
        console.log("localStrgArr", localStrgArr);
        const index = localStrgArr.indexOf(imgName);
        if (index > -1) {
          localStrgArr.splice(index, 1); // 2nd parameter means remove one item only
          console.log("localStrgArr after splice", localStrgArr);

          localStorage.setItem('Data-object', JSON.stringify(localStrgArr))
          setImgArry(JSON.parse(localStorage.getItem('Data-object')));
          console.log("imgArry", imgArry);
        }
        else {


          setImgArry(localStrgArr);
          console.log("imgArry", imgArry);
          localStorage.setItem('Data-object', JSON.stringify(imgArry))
        }



      }
    }

    let remainder = count % 8
    // console.log('remainder', remainder);
    // if (count > 0 ) {
    if (count > 0 && remainder === 0) {

      document.getElementById('burn_NftBtn').removeAttribute('disabled')
      // let customValue = 1;
      // if (count === 8 && remainder === 0) {
      //   // customValue++
      //   document.getElementById('burn_NftBtn').setAttribute('disabled', '')
      // }
    } else {
      document.getElementById('burn_NftBtn').setAttribute('disabled', '')
    }
    // if (remainder === 0) {

    // } else {
    //   document.getElementById('burn_NftBtn').setAttribute('disabled', '')
    //   alert('Please select Multiple of 8 DH NFT')
    // }
  }, [count])

  // ================================== API useEffect ===================================

  useEffect(() => {
    setTimeout(() => {
      console.log("in et time out", loginUserAdd);
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
          if(JSON.parse(body).data !== undefined){
            setimageDetails(JSON.parse(body).data);
            console.log("imageDetails", body);
            setLoaderFront(true);
          }
          else{
            setimageDetails(chunks)
            console.log("chunks", chunks);
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



    // fetch(`https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/${loginUserAddress}`, requestOptions).then(res => res.json())
    //   .then((result) => {
    //     console.log('result', result); //API Result log
    //     if (result.length > 0) {
    //       result.map((findOurContractAddre) => {
    //         if (findOurContractAddre.contractAddress == "0xf2c7ddf9e5a6e8aa3474a11e7b367528f21fc505") {
    //           console.log("findOurContractAddre", findOurContractAddre);
    //           let arrayIMG = [];
    //           findOurContractAddre.metadata.map((getImageUrl, index) => {
    //             if (index < 20) {
    //               // var getCIDWithTokenID = getImageUrl.url.split('://');
    //               // getCIDWithTokenID = getCIDWithTokenID[1];
    //               console.log("getImageUrl", getImageUrl.tokenId);
    //               arrayIMG.push(getImageUrl.tokenId);
    //               // fetch(`https://sillysloths.mypinata.cloud/ipfs/QmdZaSSxjxoPZvQ5JYGPWnFY6nECCyaPasdPahUCQMCLh1/${getImageUrl.tokenId}`).then(res => res.json())
    //               //   .then((findImage) => {
    //               //     console.log("findImage",findImage);
    //               //     arrayIMG.push(findImage);
    //               //     // console.log("imageDetailsARRRAY",imageDetails);
    //               //   });
    //               setTimeout(() => {
    //                 setimageDetails(arrayIMG);
    //                 setLoaderFront(true)
    //                 // console.log("imageDetails1",imageDetails);
    //               }, 1000)
    //             }
    //           });
    //         }
    //       });
    //     }
    //   });
  }, [])

  // =================================== Burn useEffect =================================
  useEffect(() => {
    burnRef.current = burnNFT;
    function burnNFT() {
      console.log('Burn Clicked');
      document.getElementById('burn_NftBtn').setAttribute('disabled', '')
      const burnABiWthiCONTRACT = new web3_Stake.eth.Contract(brun_mint_Abi, CONTACT_ADDRESS_BURN_MINT);
      const mintABiWthiCONTRACT = new web3_Stake.eth.Contract(mint_DHFNFT, CONTACT_ADDRESS_DHFNFT);

      // burnABiWthiCONTRACT
      let localStorageDataGet = JSON.parse(localStorage.getItem('Data-object'));
      console.log("localStorageDataGet", localStorageDataGet);
      console.log("loginUserAddress", loginUserAddress);
      // if (localStorageDataGet.length > 0) {
      // localStorageDataGet.map((getNftName) => {
      // console.log("getNftName", getNftName);

      // var findTokenId = getNftName.split("#");
      // console.log("findTokenId[1]", findTokenId[1]);
      // findTokenId = findTokenId[1] - 1;
      // console.log("findTokenId", findTokenId);
      // console.log(localStorageDataGet.lastIndexOf(getNftName));

      burnABiWthiCONTRACT.methods.burnBatch(localStorageDataGet)
        .send(
          {
            from: loginUserAddress
            // from: '0x619a67bc8132D5ce5Fb2D88a9a9912af86d9825b'
          }
        )
        // .call()
        .on('error', function (error) {
          console.log('error', error);
        }).then(function (info) {
          console.log("info", info);
          // if (localStorageDataGet.length == localStorageDataGet.lastIndexOf(getNftName) + 1) {
          var burnLength = localStorageDataGet.length;
          var mintDHFNFT = burnLength / 8;
          console.log("mintDHFNFT", mintDHFNFT)
          mintABiWthiCONTRACT.methods.mint(loginUserAddress, mintDHFNFT)
            .send(
              {
                from: loginUserAddress,
                value: 1
              }
            )
            .on('error', function (error) {
              console.log('error', error);
            }).then(function (info) {
              console.log("info", info);
              console.log("info.events.Transfer.length", info.events.Transfer.length);
              if (info.events.Transfer.length > 0 && info.events.Transfer.length !== undefined) {
                var lengthOfTransfer = info.events.Transfer.length;
                console.log("lengthOfTransfer", lengthOfTransfer);
                var newArray = [];
                for (let i = 0; i < lengthOfTransfer; i++) {

                  var MImageUrl = `https://sillysloths.mypinata.cloud/ipfs/QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj/DHF_${info.events.Transfer[i].returnValues.tokenId}.png`;

                  console.log("newArray newArray", newArray);
                  newArray.push(MImageUrl);
                }
                setMintedImageUrl(newArray)
                console.log("setMintedImageUrl-Arry", mintedImageUrl);
                setLoader(true)
                setAllocated(lengthOfTransfer)
              }
              else {
                console.log("enter", info.events.Transfer.returnValues.tokenId);
                var MImageUrl = `https://sillysloths.mypinata.cloud/ipfs/QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj/DHF_${info.events.Transfer.returnValues.tokenId}.png`;
                var newArray = [];
                newArray.push(MImageUrl);
                console.log("newArray MImageUrl", newArray);
                setMintedImageUrl(newArray);
                console.log("setMintedImageUrl", mintedImageUrl);
                setLoader(true)
                setAllocated(1)
              }
            });
          // }
        });

      // })
      // }
      setMainNftBox_toggle(!mainNftBox_toggle)
      setMainNftBox_toggle_oneNft(!mainNftBox_toggle_oneNft)
    }
  }, [mainNftBox_toggle, loginUserAddress, mintedImageUrl])

  // ====================================== inner HTML ==============================
  function showNFTImg() {
    return { __html: `<h1>Hello</h1>` };
  }

  // let oneNFTDiv = document.getElementById('imageDivBox');
  // if (oneNFTDiv.style.display === 'block') {
  //   console.log('blovk');
  //   document.getElementById('burn_NftBtn').style.display = 'none'
  // }
  // console.log("imageDetails222222",imageDetails);
  return (
    <div className="connect_wallet">
      <Rewards />
      <div className='cont_wallet_box'>
        <div className="container" style={{ display: 'block' }}>
          <div className='row'>
            <div className='col-lg-9 col-12'>
              <div className="dh_left_box" id="imageDivBox" style={mainNftBox_toggle_oneNft ? { display: 'none' } : { display: 'block' }}>
                <div style={{ display: ' flex', justifyContent: ' center', flexDirection: ' column', alignItems: 'center' }}>
                  <h2 className='my-4'>Your One DHF NFT</h2>
                  <div className='container'>
                    <div className='row justify-content-center'>
                      {loader ? mintedImageUrl.map((getmintedUrl) => {
                        return <div className='col-lg-4 col-md-6 col-12' key={getmintedUrl}>
                          <img width="500" src={getmintedUrl} />
                        </div>
                      }) : <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                        <Grid color="#FFFFFF" height={60} width={60} />
                      </div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dh_left_box" style={mainNftBox_toggle ? { display: 'block' } : { display: 'none' }}>
                <div className='' style={{ padding: '0px 30px' }}>
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
                  </div>
                </div>
                <div className='container'>
                  <div className='row dh_NFT_cards_Div'>
                    {/* {loader ? ipfs.filter((imgUri) => {
                      return getIMGArry.indexOf(imgUri.image) === -1
                    }).map((jsonData) => {
                      return <div className='col-lg-3 col-md-6 col-12' key={jsonData}>
                        <div className='nft_boxes'>
                          <img src={jsonData} alt="" className='nftImg' />
                          <div className='nft_box_btm'>
                            <div className='title_card'>
                    
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" value={jsonData} onClick={(e) => { checkedNFTCount(e) }} />
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
                    } */}
                    {loaderFront ? imageDetails.map((data) => {
                      return <div className='col-lg-3 col-md-4 col-sm-6 col-12' key={data}>
                        <div className='nft_boxes'>
                          <img src={`https://sillysloths.mypinata.cloud/ipfs/QmNN2PcnL8rdzf2DxTkvmPEkyT3dg4fs2PeyDW1wmwEvea/DH_${Number(data) + 1}.png`} alt="" />
                          <div className='nft_box_btm'>
                            <div className='title_card'>
                              <h5>Token ID {data} </h5>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" value={data} onClick={(e) => { cardCountRef.current(e) }} />
                              </Form.Group>
                            </div>
                            {/* <p> <span>94</span> days held </p> */}
                            {/* <p> DHT Reward: <span>3000</span> </p> */}
                          </div>
                        </div>
                      </div>
                    }) : <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                      <Grid color="#FFFFFF" height={60} width={60} />
                    </div>}
                    {/* ============================================= DH NFT CARD ================================================== */}
                    {/* <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" onClick={(e) => { cardCountRef.current(e) }} />
                            </Form.Group>
                          </div>
                          <p> <span>94</span> days held </p>
                          <p> DHT Reward: <span>3000</span> </p>
                        </div>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-12'>
              <div className="dh_right_box text-center">
                <h4>You have to select Multiple of 8 NFT's</h4>
                {loader ? <h4>{allocated} DHF NFT Allocated</h4> : <h4>{count} NFTs selected</h4>}
                <Button onClick={() => { burnRef.current() }} variant="success" id='burn_NftBtn' className='green_btn'>Burn Selected NFTs</Button>
                {/* <h4 style={{ wordBreak: 'break-word' }}>Transaction Id : </h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DH;