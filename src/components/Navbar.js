import { useState } from "react";
import { FaTwitterSquare, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo-white.png";
// import MetaMaskButton from "./MetaMaskButton";

function Navbar() {
  const [active, setActive] = useState(false);

  function toggleNav() {
    setActive(!active);
    document.body.classList.toggle("hidden");
  }

  // ============================== Meta Mask ================================

  const HideStyle = {
    display: 'none'
  }
  // const ShowStyle = {
  //   display: 'block'
  // }

  // const [Hide, setHide] = useState(HideStyle);

  const openMetaMask = async () => {
    let data;
    await window.ethereum.enable().then((address) => {
      data = address[0]
      console.log(address, 'this is the data we got ')

      // window.location.pathname = '/dht_token/DH'
      document.getElementById('next').click();
      if(typeof address[0] === 'string'){
        document.getElementById('connected').innerText = 'Connected'
      }
      // setHide(ShowStyle)
    });

    // console.log(Hide)

  }

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={logo} alt="Diamond Hands Logo" height="50px" width="auto" />
          </Link>
        </div>
        <div className="nav-menu">
          <a href='/dht_token/#learn' >Learn</a>
          <a href="/dht_token/#defi-nft">DeFi + NFTs</a>
          <a href="/dht_token/#rarity">Rarity</a>
          <a href="/dht_token/#team">Team</a>
          <a href="/dht_token/#faqs">FAQ's</a>
        </div>
        <div className="nav-buttons">
          <Link id="next" to="/DH" style={HideStyle} className="conted_wlt">Connected #0x02548</Link>
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
