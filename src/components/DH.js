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
import Web3 from "web3";
const web3_Stake = new Web3(window.ethereum);



function DH() {


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
  const [mainNftBox_toggle, setMainNftBox_toggle] = useState(true)
  const [mainNftBox_toggle_oneNft, setMainNftBox_toggle_oneNft] = useState(true)
  let [loginUserAddress, setloginUserAddress] = useState('');
  const [imageDetails, setimageDetails] = useState([]);
  const [imgArry, setImgArry] = useState([])
  const [mintedImageUrl, setMintedImageUrl] = useState([])
  // ====================== ALL useRef =================================
  const cardCountRef = useRef(null)
  const burnRef = useRef(null)

  window.ethereum.enable().then((address) => {
    loginUserAddress = address[0];
    // console.log("loginUserAddressloginUserAddress",loginUserAddress);
    setloginUserAddress(loginUserAddress)
  });

  // ============================== NFT CARD COUNT ==================================

  useEffect(() => {
    cardCountRef.current = nftCardClicked;
    function nftCardClicked(e) {
      // console.log('nft card', e.target.checked);
      if (e.target.checked === true) {
        setCount(count + 1)
        imgArry.push(e.target.value)
        setImgArry(imgArry)
        localStorage.setItem('Data-object', JSON.stringify(imgArry))
        // console.log(JSON.stringify(e.target.value));
        // console.log(e.target.value);
        // console.log(JSON.parse(e.target.value));
      } else {
        setCount(count - 1)
        // imgArry.pop(e.target.value)
        var imgName = (e.target.value);
        console.log("imgName",imgName);
        var localStrgArr = JSON.parse(localStorage.getItem('Data-object'));
        console.log("localStrgArr",localStrgArr);
        const index = localStrgArr.indexOf(imgName);
        if (index > -1) {
          localStrgArr.splice(index, 1); // 2nd parameter means remove one item only
          console.log("localStrgArr after splice",localStrgArr);
          
          localStorage.setItem('Data-object', JSON.stringify(localStrgArr))
          setImgArry(JSON.parse(localStorage.getItem('Data-object')));
          console.log("imgArry",imgArry);
        }
        else{

          setImgArry(localStrgArr);
          console.log("imgArry",imgArry);
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
    // console.log("loginadre", loginUserAddress);
    fetch(`https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/0xD57A6427Ad96C17b7611F99967a65451F97b1C74`, requestOptions).then(res => res.json())
      .then((result) => {
        console.log('result', result); //API Result log
        if (result.length > 0) {
          result.map((findOurContractAddre) => {
            if (findOurContractAddre.contractAddress == '0x84f80640ba7fbf6086c61d14a9f7ab778e9b910e') {
              console.log("findOurContractAddre", findOurContractAddre);
              let arrayIMG = [];
              findOurContractAddre.metadata.map((getImageUrl,index) => {
                if(index < 32) 
                {
                  var getCIDWithTokenID = getImageUrl.url.split('://');
                  getCIDWithTokenID = getCIDWithTokenID[1];
                  fetch(`https://gateway.pinata.cloud/ipfs/${getCIDWithTokenID}`).then(res => res.json())
                    .then((findImage) => {
                      // console.log("findImage",findImage);
                      arrayIMG.push(findImage);
                      // console.log("imageDetailsARRRAY",imageDetails);
                    });
                  setTimeout(() => {
                    setimageDetails(arrayIMG);
                    // console.log("imageDetails1",imageDetails);
                  }, 1000)
                }
              });
            }
          });
        }
      });
  }, [])

  // =================================== Burn useEffect =================================
  useEffect(() => {
    burnRef.current = burnNFT;
    function burnNFT() {
      console.log('Burn Clicked');
      document.getElementById('burn_NftBtn').setAttribute('disabled', '')
      const burnABiWthiCONTRACT = new web3_Stake.eth.Contract(BurnAbi, CONTACT_ADDRESS);
      const mintABiWthiCONTRACT = new web3_Stake.eth.Contract(mint_DHFNFT, CONTACT_ADDRESS_DHFNFT);

      // burnABiWthiCONTRACT
      let localStorageDataGet = JSON.parse(localStorage.getItem('Data-object'));
      console.log("localStorageDataGet", localStorageDataGet);
      if (localStorageDataGet.length > 0) {
        localStorageDataGet.map((getNftName) => {
          console.log("getNftName", getNftName);
          
          var findTokenId = getNftName.split("#");
          console.log("findTokenId[1]",findTokenId[1]);
          findTokenId = findTokenId[1]-1;
          console.log("findTokenId",findTokenId);
          console.log(localStorageDataGet.lastIndexOf(getNftName));

          burnABiWthiCONTRACT.methods.burnNFT(findTokenId)
            .send(
              {
                from: loginUserAddress
              }
            )
            .on('error', function (error) {
              console.log('error',error);
            }).then(function (info) {
              console.log("info",info);
              if (localStorageDataGet.length == localStorageDataGet.lastIndexOf(getNftName) + 1) {
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
                    console.log('error',error);
                  }).then(function (info) {
                    console.log("info", info);
                    console.log("info.events.Transfer.length", info.events.Transfer.length);
                    if (info.events.Transfer.length > 0 && info.events.Transfer.length !== undefined) {
                      var lengthOfTransfer = info.events.Transfer.length;
                      console.log("lengthOfTransfer", lengthOfTransfer);
                      var newArray = [];
                      for (let i = 0; i < lengthOfTransfer; i++) {
    
                        var MImageUrl = `https://gateway.pinata.cloud/ipfs/QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj/DHF_${info.events.Transfer[i].returnValues.tokenId}.png`;
    
                        console.log("newArray newArray", newArray);
                        newArray.push(MImageUrl);
                      }
                      setMintedImageUrl(newArray)
                      console.log("setMintedImageUrl-Arry", mintedImageUrl);
                    }
                    else {
                      console.log("enter",info.events.Transfer.returnValues.tokenId);
                      var MImageUrl = `https://gateway.pinata.cloud/ipfs/QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj/DHF_${info.events.Transfer.returnValues.tokenId}.png`;
                      var newArray = [];
                      newArray.push(MImageUrl);
                      console.log("newArray MImageUrl",newArray);
                      setMintedImageUrl(newArray);
                      console.log("setMintedImageUrl", mintedImageUrl);
                    }
                  });
              }
            });

        })
      }
      setMainNftBox_toggle(!mainNftBox_toggle)
      setMainNftBox_toggle_oneNft(!mainNftBox_toggle_oneNft)
    }
  }, [mainNftBox_toggle])

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
                      {mintedImageUrl.map((getmintedUrl) => {
                        return <div className='col-lg-4 col-md-6 col-12' key={getmintedUrl}>
                                  <img width="500" src={getmintedUrl} />
                              </div>
                      })}
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
                    {imageDetails.map((data) => {
                      return <div className='col-lg-3 col-md-6 col-12' key={data.name}>
                        <div className='nft_boxes'>
                          <img src={data.image} alt="" />
                          <div className='nft_box_btm'>
                            <div className='title_card'>
                              <h5>{data.name} </h5>
                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" value={data.name} onClick={(e) => { cardCountRef.current(e) }} />
                              </Form.Group>
                            </div>
                            <p> <span>94</span> days held </p>
                            <p> DHT Reward: <span>3000</span> </p>
                          </div>
                        </div>
                      </div>
                    })}
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
                <h4>{count} NFTs selected</h4>
                <Button onClick={() => { burnRef.current() }} variant="success" id='burn_NftBtn' className='green_btn'>Burn Selected NFTs</Button>
                <h4 style={{ wordBreak: 'break-word' }}>Transaction Id : </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DH;