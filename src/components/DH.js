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
  // ====================== ALL useRef =================================
  const cardCountRef = useRef(null)
  const burnRef = useRef(null)

  // ============================== NFT CARD COUNT ==================================

  useEffect(() => {
    cardCountRef.current = nftCardClicked;
    function nftCardClicked(e) {
      // console.log('nft card', e.target.checked);
      if (e.target.checked === true) {
        setCount(count + 1)
      } else {
        setCount(count - 1)
      }
    }

    let remainder = count % 8
    console.log('remainder', remainder);
    if (count > 0 && remainder === 0) {
      document.getElementById('burn_NftBtn').removeAttribute('disabled')
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
    fetch("https://api-eu1.tatum.io/v3/nft/address/balance/MATIC/0xD57A6427Ad96C17b7611F99967a65451F97b1C74", requestOptions).then(res => res.json())
      .then((result) => {
        console.log('result', result); //API Result log
      })
  }, [])

  // =================================== Burn useEffect =================================
  useEffect(() => {
    burnRef.current = burnNFT;
    function burnNFT() {
      console.log('Burn Clicked');
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
                    <div className='row justify-content-center' dangerouslySetInnerHTML={showNFTImg()}>
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
                    {/* {loader ? ipfs.map((urls) => {
                      return <div className='col-lg-3 col-md-6 col-12' key={urls}>
                        <div className='nft_boxes'>
                          <img src={urls} alt="" />
                          <div className='nft_box_btm'>
                            <div className='title_card'>
                            

                              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" value={urls} onClick={(e) => { checkedNFTCount(e) }} />
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
                    {/* ============================================= DH NFT CARD ================================================== */}
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
                    </div>

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