import { Link } from 'react-router-dom';
import '../styles/components/_rewards.scss'
function Rewards() {
  return (
    <section className="reward_section">
      {/* <p className="mb-0">My DH Token <span>"Diamond Handing"</span> Rewards</p> */}
      <Link className='second_nav responsive_second_nav' to="/DH">My DH Token</Link>
      <Link className='second_nav' to="/DH_Rewards">"Diamond Handing" Rewards</Link>
    </section>
  );
}

export default Rewards;
