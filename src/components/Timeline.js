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
        <div class="timeline">
          <br />
          <div class="timeline-container primary">
            <div class="timeline-icon">
              <FaRegGrinWink />
            </div>

            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">The Art</span>
              </h4>
              <p>
                Create 11,111 programmatically randomly generated Diamond Hands
                NFT by Ethikdesign
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container danger">
            <div class="timeline-icon">
              <FaRegGrinHearts />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge"> Crypto Punk 3557</span>
              </h4>
              <p>
                Upon the completion of the token sale, fractionalize Crypto Punk
                3557.
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container success">
            <div class="timeline-icon">
              <FaRegKissBeam />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">Silent AIRDROP</span>
              </h4>
              <p>
                Silently ‘airdrop’ these fractions to collectors of The Diamond
                Hands
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container warning">
            <div class="timeline-icon">
              <FaRegGrimace />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">Liquidity pool</span>
              </h4>
              <p>
                Create the “liquidity pool” on Fractional.art so collectors can
                buy and sell their fractions.
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container">
            <div class="timeline-icon">
              <FaRegKiss />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">Identify HV NFTs</span>
              </h4>
              <p>
                Identify three NFTs that are highly desirable to be
                fractionalized{" "}
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container info">
            <div class="timeline-icon">
              <FaRegGrin />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">Community Poll</span>
              </h4>
              <p>
                Present these options to the community and take a poll.
                Whichever has the most votes, we will purchase and repeat the
                process of the Punk fractionalization.
              </p>

              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
          <div class="timeline-container info">
            <div class="timeline-icon">
              <FaRegGrin />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge">Exclusive 1 of 1</span>
              </h4>
              <p>
                Yanis Georges - Ethikdesign will create a 1 of 1 to be given to
                a lucky winner of the community.
              </p>

              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>

          <div class="timeline-container danger">
            <div class="timeline-icon">
              <FaRegGrinHearts />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge"> Diamond Handing</span>
              </h4>
              <p>
                Explore more avenues to incentivize “diamond handing” The
                Diamond Hands
              </p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>

          <div class="timeline-container danger">
            <div class="timeline-icon">
              <FaRegGrinTongue />
            </div>
            <div class="timeline-body">
              <h4 class="timeline-title">
                <span class="badge"> Merch</span>
              </h4>
              <p>Launch our first round of merch</p>
              <p class="timeline-subtitle">http://thediamondhands.io</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
