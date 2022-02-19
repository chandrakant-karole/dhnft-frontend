import { React, useState, useEffect, useRef } from 'react'
import '../styles/components/_connectwallet.scss';
import { Grid } from  'react-loader-spinner'
import { InputGroup, FormControl, Nav, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import dhfNFT from '../assets/Trails.png'

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
  headers: { 'x-api-key': 'bf846fcb-8fb4-4c74-a0ce-0e9642fc6741',
            'x-testnet-type':'polygonscan',
            'Content-Type': 'application/json',
            'PageSize': '10'
            } //mainet
};
function DH() {
  // ======================== Sessions =========================
  // let checkAddress1 = sessionStorage.getItem('Address');

  // if (checkAddress1 === null) {
  //   window.location.pathname = '/dht_token/'
  //   console.log('checkAddress->', checkAddress1);
  // }

  const [loader, setLoader] = useState(false)

  let [count, setCount] = useState(0);


  const [contract, setContract] = useState([])
  const [metadataAll, setMetadataAll] = useState([])
  const [imageArr, setImageArr] = useState([])

  const [transcID, setTranscID] = useState('')
  // const [paramMetaData, setParamMetaData] = useState([])
  const [ipfs, setIpfs] = useState([])




  const dh_leftBox_style = {
    display: 'none'
  }

  const dh_leftBox_style1 = {
    display: 'block'
  }

  const [leftBox, setleftBox] = useState(dh_leftBox_style1)

  const checkedNFTCount = (e) => {
    const checkedItem = e.target.checked;
    // console.log(checkedItem);
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

  //======================== This is Modules and Remainder =====================
  // console.log('updated count', count);

  let modulesNft = count % 8
  let reminderNft = count / 8

  // console.log("modulesNft", modulesNft);
  // console.log("reminderNft", reminderNft);


  // ==================== This is NFT image after Burn NFT ====================
  const countO = useRef(`hello 1`);
  let zz = ""
  if (modulesNft === 0) {
    for (let i = 0; i < reminderNft; i++) {
      // console.log("xxxxxxxxxxxxxx", countO.current)
      // zz +=   countO.current + "<br>"
      zz += `<div class="col-lg-4 col-md-6 col-12 my-2">
      <img src=${dhfNFT} />
      </div>`
    }
  }
  // console.log(zz);

  function showNFTImg() {
    return { __html: `${zz}` };
  }
  useEffect(()=>{
    // ==================== Enable / Disabled ===========================
    if (count > 7) {
      // console.log('enabled Btn');
      document.getElementById('burn_NftBtn').removeAttribute("disabled");
    }
    if (count < 8) {
      document.getElementById('burn_NftBtn').setAttribute("disabled", " ");
    }

  }, [count])

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
            param.balances.map((res)=>{
              num =  num+ 1
              // console.log(num);
              let ipfs1 = 'https://gateway.pinata.cloud/ipfs/'+'QmNWsCuxDLHstrGU55oA7i8b8JuT7JSUxYKYN2Nyr6aYjj'+'/DHF_'+num+'.png';
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

  //   function burn(){
  //     const http = require("https");

  //     const options = {
  //       "method": "POST",
  //       "hostname": "api-us-west1.tatum.io",
  //       "port": null,
  //       "path": "/v3/nft/burn",
  //       "headers": {
  //         "content-type": "application/json",
  //         "x-testnet-type": "ethereum-rinkeby",
  //         "x-api-key": "6b9a5165-24f8-4f80-bc22-5dd8e37ad49c"
  //       }
  //     };

  //     const req = http.request(options, function (res) {
  //       const chunks = [];

  //       res.on("data", function (chunk) {
  //         chunks.push(chunk);
  //       });

  //       res.on("end", function () {
  //         const body = Buffer.concat(chunks);
  //         console.log(body.toString());
  //         setTranscID(body.toString())
  //       });
  //     });

  //     req.write(JSON.stringify({
  //       chain: 'ETH',
  //       tokenId: '7',
  //       contractAddress: '0x5eb2275bf49a6351c3fc25c440dce9281891341c',
  //       fromPrivateKey: 'e86d3e8b8351f86a1a1e0d1a9b7c97e8e442acd8905fbcb58a6bbb6e82ef18e8'
  //     }));
  //     req.end();

  // };
  function burn() {


    if (modulesNft === 0) {
      const http = require("https");

      const options = {
        "method": "POST",
        "hostname": "api-eu1.tatum.io",
        "port": null,
        "path": "/v3/multitoken/burn/batch",
        "headers": {
          "content-type": "application/json",
          "x-testnet-type": "polygonscan",
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
          console.log(body.toString());
          setTranscID(body.toString());
          setleftBox(dh_leftBox_style)
          document.getElementById('imageDivBox').style.display = 'block'
          document.getElementById('burn_NftBtn').setAttribute("disabled"," ")
        });
      });

      req.write(JSON.stringify({
        chain: 'MATIC',
        account: '0x4b812a77b109A150C2Fc89eD133EaBC78bC9EC8f',
        tokenId: [
          "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
        ],
        amounts: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        contractAddress: "0x4d81828fb2374b1a497fae02802265fef3c15e9f",
        fromPrivateKey: "0d16e292185631cf0a4d3320e2f2a7f5969489d8cde0f933b0492d3bcd51414d",
        fee: { gasLimit: '40000', gasPrice: '20' }
      }));
      req.end();
    }
  else {
    alert("Please Select NFT, that are Multiple of 8")

  }
}

// console.log(ipfs); 
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
              <div className="dh_left_box" id="imageDivBox" style={{ display: 'none' }}>
                <div style={{ display: ' flex', justifyContent: ' center', flexDirection: ' column', alignItems: 'center' }}>
                  <h2 className='my-4'>Your One DHF NFT</h2>
                  <div className='container'>
                    <div className='row justify-content-center' dangerouslySetInnerHTML={showNFTImg()}>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dh_left_box" style={leftBox}>
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
                    {loader ? ipfs.map((urls) => {
                          return <div className='col-lg-3 col-md-6 col-12' key={urls}>
                            <div className='nft_boxes'>
                              <img src={urls} alt="" />
                              <div className='nft_box_btm'>
                                <div className='title_card'>
                                  {/* <h5>{urls.metadata.name} </h5> */}

                                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" onClick={(e) => { checkedNFTCount(e) }}/>
                                  </Form.Group>
                                </div>
                                <p> <span>94</span> days held </p>
                                <p> DHT Reward: <span>3000</span> </p>
                              </div>
                            </div>
                          </div>
                        }) : <div className='dh_NFT_cards_InnerDiv'>
                              {/* <Audio height="100" width="100" color='grey' ariaLabel='loading'/> */}
                              <Grid color="#FFFFFF" height={60} width={60} />
                            </div>
                      }

                    {/* <div className='col-lg-3 col-md-6 col-12'>
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
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-12'>
              <div className="dh_right_box">
                {/* <h4>{modulesNft} = {reminderNft}</h4> */}
                <h4>{count} out of 8 owned NFTs selected</h4>
                <Button variant="success" id='burn_NftBtn' onClick={burn} className='green_btn'>Burn Selected NFTs</Button>
                <h4 style={{ wordBreak: 'break-word' }}>Transaction Id : {transcID}</h4>
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