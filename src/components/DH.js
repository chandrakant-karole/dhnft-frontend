import { React, useState, useEffect } from 'react'
import '../styles/components/_connectwallet.scss';
import { InputGroup, FormControl, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

// import Navbar from "./Navbar";
import Rewards from './Rewards';
import rarity1 from "../assets/images/rarity/white.png";
import rarity2 from "../assets/images/rarity/magnethik.png";
import rarity3 from "../assets/images/rarity/compression.png";
import rarity4 from "../assets/images/rarity/framed.png";
// import FooterCommon from './FooterCommon';
const requestOptions = {
  method: 'GET',
  // headers: { 'x-api-key': '2527a5e1-0c06-48a6-abcc-74fdbc9c7ce4' } //testnet
  headers: { 'x-api-key': '13d40da7-80c9-4277-a5a0-1d636579613b' } //mainet
};
function DH() {
  // ======================== Sessions =========================
  // let checkAddress1 = sessionStorage.getItem('Address');

  // if (checkAddress1 === null) {
  //   window.location.pathname = '/dht_token/'
  //   console.log('checkAddress->', checkAddress1);
  // }

  let [count, setCount] = useState(0);

  
  const [contract, setContract] = useState([])
  const [metadataAll, setMetadataAll] = useState([])

  const [transcID, setTranscID] = useState('')


  const checkedNFTCount = (e) => {
    const checkedItem = e.target.checked;
    console.log(checkedItem);
    if (checkedItem === true) {
      // console.log('checked')
      setCount(count + 1)
      // console.log(count)
    } 
    if (checkedItem === false) {
      // console.log('not checked');
      setCount(count - 1)
      // console.log(count)
    }
  }

  console.log('updated count',count);

  useEffect(() => {
    // ==================== Enable / Disabled ===========================
    if(count > 7){
      console.log('enabled Btn');
      document.getElementById('burn_NftBtn').removeAttribute("disabled");
    } 
    if(count < 8) {
      document.getElementById('burn_NftBtn').setAttribute("disabled", " ");
    }


    // ================================= Fetch ===============================
    fetch("https://api-us-west1.tatum.io/v3/nft/address/balance/ETH/0x5f9c31883229bf1cff7c373b9bd5ab7867d136fc", requestOptions).then(res => res.json())
    .then(
      (result) => {
        console.log("result", result);
        setContract(result)
        // console.log();
        // this.setState({
        //   isLoaded: true,
        //   items: result.items
        // });


        result.map((param)=>{
          if(param.contractAddress === '0x3290f349a0642229b46b7102d2024b34fe8bd3cc'){
          // if(param.contractAddress === "0xfbb89d3e41e1d0ab8d2e1453b2a2278b8644c8a2"){
            
            console.log("metadata179", param.metadata)
            setMetadataAll(param.metadata)
            console.log(param.metadata);
            console.log("param.metadata[0].metadata.image",param.metadata[0].metadata.image)
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

  }, [count]);
  
  function burn(){
    const http = require("https");

    const options = {
      "method": "POST",
      "hostname": "api-us-west1.tatum.io",
      "port": null,
      "path": "/v3/nft/burn",
      "headers": {
        "content-type": "application/json",
        "x-testnet-type": "ethereum-rinkeby",
        "x-api-key": "6b9a5165-24f8-4f80-bc22-5dd8e37ad49c"
      }
    };

    const req = http.request(options, function (res) {
      const chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        const body = Buffer.concat(chunks);
        console.log(body.toString());
        setTranscID(body.toString())
      });
    });

    req.write(JSON.stringify({
      chain: 'ETH',
      tokenId: '7',
      contractAddress: '0x5eb2275bf49a6351c3fc25c440dce9281891341c',
      fromPrivateKey: 'e86d3e8b8351f86a1a1e0d1a9b7c97e8e442acd8905fbcb58a6bbb6e82ef18e8'
    }));
    req.end();
  
};

  return (
    <div className="connect_wallet">
      {/* <Navbar /> */}
      <Rewards />
      <div className='cont_wallet_box'>
        <div className="container" style={{ display: 'block' }}>
          {/* <div className='row'>
            <div className='col-lg-12'>
              <div className='cntwllt_nav'>
                <Nav justify variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Link to="/DH" className='active nav-link'>
                      <p style={{ textAlign: "center" }}>The Diamond Hands NFT (DH)</p>
                      <b>(7 Owned)</b>
                      <p style={{ textAlign: "center" }}>(Eligible for DHT Rewards)</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/DHF" className='nav-link' eventKey="DHF" >
                      <p style={{ textAlign: "center" }}>The DiamondHands Founders NFT (DHF)</p>
                      <b>(2 Owned)</b>
                      <p style={{ textAlign: "center" }}>(Eligible for DHT Rewards)</p>
                    </Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Link to="/DHT" className='nav-link' eventKey="DHT" >
                      <p style={{ textAlign: "center" }}>The DiamondHands Tokens FT (DHT)</p>
                      <b>(13200 Owned)</b>
                    </Link>
                  </Nav.Item>
                </Nav>
                <div className="db_navbox"></div>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-9 col-12'>
              <div className="dh_left_box">
                {/* <h3>The Diamond Hands NFT (DH)</h3> */}
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
                  {/* {metadataAll.map((urls) => {
                          return <div className='col-lg-3 col-md-6 col-12' key={urls.metadata.image}>
                            <div className='nft_boxes'>
                              <img src={urls.metadata.image} alt="" />
                              <div className='nft_box_btm'>
                                <div className='title_card'>
                                  <h5>{urls.metadata.name} </h5>

                                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }}/>
                                  </Form.Group>
                                </div>
                                <p> <span>94</span> days held </p>
                                <p> DHT Reward: <span>3000</span> </p>
                              </div>
                            </div>
                          </div>
                        })
                      } */}
                    <div className='col-lg-3 col-md-6 col-12'>
                      <div className='nft_boxes'>
                        <img src={rarity1} alt="" />
                        <div className='nft_box_btm'>
                          <div className='title_card'>
                            <h5>DH # <span>00123</span> </h5>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
                              <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }} />
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
              <div className="dh_right_box">
                <h4>{count} out of 8 owned NFTs selected</h4>
                <Button variant="success" id='burn_NftBtn' onClick={burn} className='green_btn'>Burn Selected NFTs</Button>
                    <h4 style={{wordBreak: 'break-word'}}>Transaction Id : {transcID}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <FooterCommon /> */}
    </div>
  );
}

export default DH;