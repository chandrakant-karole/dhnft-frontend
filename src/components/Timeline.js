import {
  FaRegGrinHearts,
  FaRegKissBeam,
  FaRegKiss,
  FaRegGrin,
  FaRegGrimace,
  FaRegGrinTongue,
  FaRegGrinWink,
} from "react-icons/fa";

function Timeline() {
  return (
    <section className="container timeline-sec">
      <h2 className="heading">The Diamond Hands - Official Road Map</h2>

      <div className="timeline-wrapper">
        <div className="timeline">
          <br />
          <div className="timeline-container primary">
            <div className="timeline-icon">
              <FaRegGrinWink />
            </div>

            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">The Art</span>
              </h4>
              <p>
                Create 11,111 programmatically randomly generated Diamond Hands
                NFT by Ethikdesign
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container danger">
            <div className="timeline-icon">
              <FaRegGrinHearts />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge"> Crypto Punk 3557</span>
              </h4>
              <p>
                Upon the completion of the token sale, fractionalize Crypto Punk
                3557.
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container success">
            <div className="timeline-icon">
              <FaRegKissBeam />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Silent AIRDROP</span>
              </h4>
              <p>
                Silently ‘airdrop’ these fractions to collectors of The Diamond
                Hands
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container warning">
            <div className="timeline-icon">
              <FaRegGrimace />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Liquidity pool</span>
              </h4>
              <p>
                Create the “liquidity pool” on Fractional.art so collectors can
                buy and sell their fractions.
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-icon">
              <FaRegKiss />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Identify HV NFTs</span>
              </h4>
              <p>
                Identify three NFTs that are highly desirable to be
                fractionalized{" "}
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container info">
            <div className="timeline-icon">
              <FaRegGrin />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Community Poll</span>
              </h4>
              <p>
                Present these options to the community and take a poll.
                Whichever has the most votes, we will purchase and repeat the
                process of the Punk fractionalization.
              </p>

              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div className="timeline-container info">
            <div className="timeline-icon">
              <FaRegGrin />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge">Exclusive 1 of 1</span>
              </h4>
              <p>
                Yanis Georges - Ethikdesign will create a 1 of 1 to be given to
                a lucky winner of the community.
              </p>

              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>

          <div className="timeline-container danger">
            <div className="timeline-icon">
              <FaRegGrinHearts />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge"> Diamond Handing</span>
              </h4>
              <p>
                Explore more avenues to incentivize “diamond handing” The
                Diamond Hands
              </p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>

          <div className="timeline-container danger">
            <div className="timeline-icon">
              <FaRegGrinTongue />
            </div>
            <div className="timeline-body">
              <h4 className="timeline-title">
                <span className="badge"> Merch</span>
              </h4>
              <p>Launch our first round of merch</p>
              <p className="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
