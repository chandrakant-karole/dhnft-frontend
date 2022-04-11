import { useState, useEffect, useRef, useContext } from "react";
import { FaTwitterSquare, FaDiscord, FaTwitter } from "react-icons/fa";
import { BiWallet } from 'react-icons/bi'
import { Link } from "react-router-dom";
import logo from "../assets/DH-logo-white.png";
import { DhState } from '../context/dhContext';

function Navbar() {
  const [active, setActive] = useState(false);
  const { data1, setData } = DhState();
  console.log("data1", data1);

  function toggleNav() {
    setActive(!active);
    document.body.classList.toggle("hidden");
  }
  // ============================== Meta Mask ================================

  //========================== Store Meta Mask Address ==================

  const HideStyle = {
    display: 'none'
  }
  const ShowStyle = {
    display: 'block'
  }

  const [Hide, setHide] = useState(HideStyle);
  const [walletAddress, setWalletAddress] = useState(null);
  const [lastFourDigitAddValue, setLastFourDigitAddValue] = useState(null);


  useEffect(() => {
    if (data1 == null) {
      console.log("NADEEEM BEG");
    } else {
      console.log("nadeem data", data1);
      if (data1 == "") {
        document.getElementById('connected').innerText = 'Connect Wallet'
        // document.getElementById('burnLink').style.display = "none"
      }
      else {

        setWalletAddress(data1)
        let lastAddressDigit = data1.length - 4
        let lastFourAddValue = data1.slice(lastAddressDigit, data1.length)
        setLastFourDigitAddValue(lastFourAddValue)
        document.getElementById('connected').innerText = 'Connected'
        document.getElementById('connected').setAttribute("disabled", "")
        // document.getElementById('burnLink').style.display = "inline-block"
      }
    }

  }, [data1])

  // ===================================== OPEN METAMASK =====================================================
  const openMetaMask = async () => {
    // if(document.getElementById('connected').innerText == 'Disconnect'){
    //   console.log("IFIFIFI"); 
    //   setData('');
    //  setWalletAddress('')
    //  setLastFourDigitAddValue('')
    //  document.getElementById('connected').innerText = 'Connect Wallet'
    // document.getElementsByClassName('connect_wallet')[0].style.display = 'none'
    // document.getElementById('burnLink').style.display = "none"
    // }
    // else{
    //   console.log("elseelse");
    //   let data;
    //   await window.ethereum.enable().then((address) => {
    //     data = address[0]
    //     setData(data);
    //     document.getElementById('next').click();
    //     setWalletAddress(data)
    //     let lastAddressDigit = data.length - 4
    //     let lastFourAddValue = data.slice(lastAddressDigit, data.length)
    //     setLastFourDigitAddValue(lastFourAddValue)
    //     if (typeof data === 'string') {
    //       document.getElementById('connected').innerText = 'Disconnect'
    //     }
    //     setHide(ShowStyle)
    //   });
    //   document.getElementsByClassName('connect_wallet')[0].style.display = 'block'
    //   document.getElementById('connected').innerText = 'Disconnect'
    //   document.getElementById('burnLink').style.display = "inline-block"
    // }
    let data;
    await window.ethereum.enable().then((address) => {
      data = address[0]
      setData(data);
      document.getElementById('next').click();
      setWalletAddress(data)
      let lastAddressDigit = data.length - 4
      let lastFourAddValue = data.slice(lastAddressDigit, data.length)
      setLastFourDigitAddValue(lastFourAddValue)
      setHide(ShowStyle)
    });
    document.getElementById('connected').innerText = 'Connected'
    document.getElementById('connected').setAttribute("disabled", "")
  }


  // ====================================== useEffect ==============================================
  useEffect(() => {
    // =============================== SHOW ADDRESS BY COOKIE ==============================================
    let checkAddress = sessionStorage.getItem('Address')
    if (checkAddress === null || checkAddress === undefined) {
      document.getElementById('connected').innerText = 'Connect Wallet'
    } else {
    }

  }, []);

  // ============================= for nav ================================
  useEffect(() => {
    if (data1 === null) {

    } else {
      if (data1.length > 0) {
        console.log("sesAdd", data1);
        document.getElementById('connected').innerText = 'Connected'
        setWalletAddress(data1)
        let lastAddressDigit = data1.length - 4
        let lastFourAddValue = data1.slice(lastAddressDigit, data1.length)
        setLastFourDigitAddValue(lastFourAddValue)
        // document.getElementById('burnLink').style.display = "inline-block "
      }
    }
  }, [data1])
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="Diamond Hands Logo" height="50px" width="auto" />
          </Link>
        </div>
        <div className="nav-menu">
          <a href='/stringblock/#ourStory' >Our Story</a>
          <a href="/stringblock/#gvoToken">$GVO Token</a>
          <a href="/stringblock/#map">Map</a>
          <a href="/stringblock/#team">Team</a>
          <a href="/stringblock/#faqs">Network</a>
          <a href="/" className="claim_gvoBtn">Claim $GVO</a>
          {/* <Link id="burnLink" to="/DH" style={{ display: "none" }}>Burn</Link> */}
        </div>
        <div className="nav-buttons">
          <Link id="next" to="/DH" style={HideStyle} className="conted_wlt">Connected #0x02548</Link>
          <span className="walletAddress_txt">{walletAddress}</span><span className="lastFourAddValue">{lastFourDigitAddValue}</span>
          <BiWallet className="wallet_icon"/>
          <button id="connected" onClick={openMetaMask} className="cont_wlt">Connect Wallet</button>
          <a
            href="https://discord.com/invite/H7KMAKgaSH"
            target="_blank"
            rel="noreferrer noopener"
            className="sm fa_disco"
          >
            <FaDiscord />
          </a>
          <a
            href="https://twitter.com/diamondhandnft"
            target="_blank"
            rel="noreferrer noopener"
            className="sm twtsqur"
          >
            {/* <FaTwitterSquare /> */}
            <FaTwitter />
          </a>
          {/* <MetaMaskButton /> */}
        </div>
        <button
          onClick={toggleNav}
          className={`hamburger${active ? " active" : ""}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <MobileNavMenu active={active} setActive={setActive} />
      </div>
    </div>
  );
}

function MobileNavMenu({ active = true, setActive }) {
  function closeNav() {
    setActive(!active);
    document.body.classList.toggle("hidden");
  }

  return (
    <div className={`mobile-nav${active ? " active" : ""}`}>
      <div className="nav-menu">
        <a href="#learn" onClick={closeNav}>
          Learn
        </a>
        <a href="#defi-nft" onClick={closeNav}>
          DeFi + NFTs
        </a>
        <a href="#rarity" onClick={closeNav}>
          Rarity
        </a>
        <a href="#team" onClick={closeNav}>
          Team
        </a>
        <a href="#faqs" onClick={closeNav}>
          FAQ's
        </a>
        <div className="sm-links">
          <a
            href="https://twitter.com/diamondhandnft"
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeNav}
          >
            {/* <FaTwitterSquare /> */}
            <FaTwitter />
          </a>
          <a
            href="https://discord.com/invite/H7KMAKgaSH"
            target="_blank"
            rel="noreferrer noopener"
            onClick={closeNav}
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
