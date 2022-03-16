import { useState, useEffect, useRef } from "react";
import { FaTwitterSquare, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie'
import logo from "../assets/logo-white.png";
// import MetaMaskButton from "./MetaMaskButton";

function Navbar() {
  const [active, setActive] = useState(false);

  function toggleNav() {
    setActive(!active);
    document.body.classList.toggle("hidden");
  }
  // ============================== Meta Mask ================================

  //========================== Store Meta Mask Address ==================
  // const addressValue = useSelector(state => state.addressReducer1)
  // const dispatch = useDispatch();

  const HideStyle = {
    display: 'none'
  }
  const ShowStyle = {
    display: 'block'
  }

  const [Hide, setHide] = useState(HideStyle);
  const [walletAddress, setWalletAddress] = useState(null);
  const [lastFourDigitAddValue, setLastFourDigitAddValue] = useState(null);
  // ===================================== OPEN METAMASK =====================================================

  
  const openMetaMask = async () => {
    let data;
    await window.ethereum.enable().then((address) => {
      data = address[0]
      // console.log(address, 'this is the data we got ')

      document.getElementById('next').click();
      setWalletAddress(data)

      let lastAddressDigit = data.length - 4

      // console.log(data.slice(lastAddressDigit, data.length));
      let lastFourAddValue = data.slice(lastAddressDigit, data.length)
      setLastFourDigitAddValue(lastFourAddValue)


      if (typeof data === 'string') {
        document.getElementById('connected').innerText = 'Connected'
        // Cookies.set('Address', data)
        // sessionStorage.setItem('Address', data)

      }
      setHide(ShowStyle)
    });


  }
  // ====================================== useEffect ==============================================
  useEffect(() => {
    // =============================== SHOW ADDRESS BY COOKIE ==============================================
    // let checkAddress = Cookies.get('Address');
    let checkAddress = sessionStorage.getItem('Address')
    if (checkAddress === null || checkAddress === undefined) {
      document.getElementById('connected').innerText = 'Connect Wallet'
      // console.log("not connected");
    } else {
      // document.getElementById('connected').innerText = 'Connected'
      // // console.log("connected ");
      // setWalletAddress(checkAddress)
      // let lastAddressDigit = checkAddress.length - 4
      // let lastFourAddValue = checkAddress.slice(lastAddressDigit, checkAddress.length)
      // setLastFourDigitAddValue(lastFourAddValue)
    }

  }, []);
 
  useEffect(() => {

    let data;
    window.ethereum.enable().then((address) => {
      data = address[0]
      // console.log(address, 'this is the data we got ')
  
      document.getElementById('next').click();
      setWalletAddress(data)
  
      let lastAddressDigit = data.length - 4
  
      // console.log(data.slice(lastAddressDigit, data.length));
      let lastFourAddValue = data.slice(lastAddressDigit, data.length)
      setLastFourDigitAddValue(lastFourAddValue)
  
  
      if (typeof data === 'string') {
        document.getElementById('connected').innerText = 'Connected'
        // Cookies.set('Address', data)
        // sessionStorage.setItem('Address', data)
  
      }
      setHide(ShowStyle)
    })
  }, [])

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="Diamond Hands Logo" height="50px" width="auto" />
          </Link>
        </div>
        <div className="nav-menu">
          <a href='/stringblock/#learn' >Learn</a>
          <a href="/stringblock/#defi-nft">DeFi + NFTs</a>
          <a href="/stringblock/#rarity">Rarity</a>
          <a href="/stringblock/#team">Team</a>
          <a href="/stringblock/#faqs">FAQ's</a>
        </div>
        <div className="nav-buttons">
          <Link id="next" to="/DH" style={HideStyle} className="conted_wlt">Connected #0x02548</Link>
          <span className="walletAddress_txt">{walletAddress}</span><span className="lastFourAddValue">{lastFourDigitAddValue}</span>
          <button id="connected" style={{ cursor: 'pointer' }} onClick={openMetaMask} className="cont_wlt">Connect Wallet</button>
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
            <FaTwitterSquare />
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
            <FaTwitterSquare />
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
