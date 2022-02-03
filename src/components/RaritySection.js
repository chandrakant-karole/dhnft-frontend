import ProgressBar from "./ProgressBar";
import rarity1 from "../assets/images/rarity/white.png";
import rarity2 from "../assets/images/rarity/magnethik.png";
import rarity3 from "../assets/images/rarity/compression.png";
import rarity4 from "../assets/images/rarity/framed.png";

function RaritySection() {
  return (
    <section id="rarity" className="container rarity-section">
      <div className="row">
        <div className="col-lg-3">
          <div className="image-container">
            <img src={rarity1} alt="Air" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="image-container">
            <img src={rarity2} alt="Fire" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="image-container">
            <img src={rarity3} alt="Ethic" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="image-container">
            <img src={rarity4} alt="Trails" />
          </div>
        </div>
      </div>
      <div className="col-2 mt-4">
        <div className="rarities">
          <ProgressBar title="Human Hands" percentage="40" />
          <ProgressBar title="Love Hands" percentage="17" />
          <ProgressBar title="Ape Hands" percentage="15" />
          <ProgressBar title="Robot Hands" percentage="12" />
          <ProgressBar title="Skeleton Hands" percentage="9" />
          <ProgressBar title="Alien Hands" percentage="7" />
        </div>
        <div className="dh">
          <h2 className="heading">How much is a Diamond Hand</h2>
          <div className="description">
            <p>
              Diamond Hands are set at the fixed price of only 0.09 ETH <br />
              No bonding curve.
              <br />
              No incentive to buy more than you can afford.
              <br />
              Just an opportunity to be part of a growing community and to own a
              piece of NFT history.
              <br />
              Oh yea, the art is 🔥 too!
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RaritySection;
