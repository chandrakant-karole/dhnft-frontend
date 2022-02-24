import bannerImage from "../assets/images/diamond-hands-banner.png";

function IntroSection() {
  return (
    <section id="learn" className="container intro-section">
      <div className="row">
        <div className="col-lg-6">
          <div className="caption">
            <h2 className="heading">LEARN (yes, our artist is superRare!):</h2>
            <div className="description">
              <p>
                The Diamond Hands is a collection of 11,111 programmatically,
                randomly generated NFTs on the Ethereum blockchain.
              </p>
              <p>
                We are bringing the NFT community a new level of value in the
                collectable art scene; so naturally we procured one of the most
                talented artists in the game, and he's currently approved and
                actively selling his 1 of 1 artwork on SuperRare.com.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="image-container">
            <img src={bannerImage} alt="Learn" />
          </div>
        </div>
      </div>

    </section>
  );
}

export default IntroSection;
