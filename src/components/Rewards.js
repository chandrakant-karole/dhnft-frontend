import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/_rewards.scss'
function Rewards() {

  const [activeBurn, setActiveBurn] = useState('');
  const [activeStaking, setActiveStaking] = useState('');
  
  useEffect(() => {
    
    if(window.location.pathname === '/dht_token/DH' || window.location.pathname === '/dht_token/DHF' || window.location.pathname === '/dht_token/DHT'){
      setActiveBurn('inner_nav_active')
    } else {
      setActiveBurn('')
    }

    if(window.location.pathname === '/dht_token/DH_Rewards'){
      setActiveStaking('inner_nav_active')
    } else {
      setActiveStaking('')
    }


  }, []);
  

  return (
    <section className="reward_section">
      {/* <p className="mb-0">My DH Token <span>"Diamond Handing"</span> Rewards</p> */}
      <Link className={`second_nav responsive_second_nav ${activeBurn}`} to="/DH">Burn</Link>
      <Link className={`second_nav ${activeStaking}`} to="/DH_Rewards">Stake / Rewards</Link>
    </section>
  );
}

export default Rewards;
