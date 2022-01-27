import { useState, useEffect } from "react";

import { getToken } from "../utility/contractMethods/index";

function TotalMints() {
  const [totalMints, setTotalMints] = useState("11111");

  useEffect(() => {
    // async function getTotalMints() {
    //   const req = await fetch(
    //     "https://api.opensea.io/api/v1/collection/thediamondhands"
    //   );
    //   const data = await req.json();
    //   if (data.collection) {
    //     setTotalMints(data.collection.stats.count);
    //   }
    // }
    // getTotalMints();
    // async function getMintedArts() {
    //   let tokenId = await getToken();
    //   setTotalMints(tokenId);
    //   if (!tokenId) {
    //     setTotalMints(0);
    //   }
    // }
    // getMintedArts();
  }, []);

  return (
    <div className="container total-mints-comp">
      <div className="total-mints">
        <span>
          <h2 className="heading">Diamond Hands Minted</h2>
          <p className="sub-heading">
            Mint Completed 🥳{" "}
            <a
              href="https://opensea.io/collection/thediamondhands"
              style={{ color: "#3772fd", textDecoration: "underline" }}
            >
              Check all artworks
            </a>
          </p>
        </span>

        <div className="mint-progress">
          {/* <span>0,000</span> */}
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: (totalMints * 100) / 11111 + "%" }}
            >
              <Tooltip totalMints={totalMints} />
            </div>
          </div>
          <span>11,111</span>
        </div>
      </div>
    </div>
  );
}

function Tooltip({ totalMints }) {
  return (
    <div className="tooltip">
      <svg
        width="98"
        height="42"
        viewBox="0 0 98 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="48.9272"
          y="22.7972"
          width="13.2902"
          height="13.2902"
          rx="1"
          transform="rotate(45 48.9272 22.7972)"
          fill="#B3D1FB"
        />
      </svg>
      <span>{totalMints}</span>
    </div>
  );
}

export default TotalMints;
