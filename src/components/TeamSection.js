import BlakeImage from "../assets/images/profile/blake.png";
import DolphinWhaleImage from "../assets/images/profile/dolphin-whale.jpeg";
import TheGuyImage from "../assets/images/profile/the-guy.png";
import MdxBlocksImage from "../assets/images/profile/mdxblocks.png";
import EthicImage from "../assets/images/profile/ethic.jpg";

function TeamSection() {
  return (
    <section id="team" className="container team-section">
      <h2 className="heading">A Real Team</h2>
      <p className="sub-heading">
        Real Artists - Real BlockChain Developers - Real NFT Curators
      </p>


      <div className="column-grid">
        <TeamProfile
          profileName="Yanis - Ethikdesign"
          profilePicture={EthicImage}
          designation="The Artist"
        />
        <TeamProfile
          profileName="MDxBlocks Inc."
          profilePicture={MdxBlocksImage}
          designation="The Blockchain Guru’s"
        />
        <TeamProfile
          profileName="Blake"
          profilePicture={BlakeImage}
          designation="The Visionary"
        />
        <TeamProfile
          profileName="DolphinWhale"
          profilePicture={DolphinWhaleImage}
          designation="The Driver"
        />
        <TeamProfile
          profileName="TheGuy"
          profilePicture={TheGuyImage}
          designation="The Navigator"
        />
      </div>
    </section>
  );
}

function TeamProfile({ profileName, profilePicture, designation }) {
  return (
    <div className="team-profile">
      <div className="profile-picture">
        <img
          src={
            profilePicture ||
            "https://assets.webiconspng.com/uploads/2016/12/User-Icon.png"
          }
          alt={profileName}
        />
      </div>
      <p className="sub-heading">{profileName}</p>
      <p>{designation}</p>
    </div>
  );
}

export default TeamSection;
