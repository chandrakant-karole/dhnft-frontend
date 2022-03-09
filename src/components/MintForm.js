import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

// import { consumeCoupon } from "../api/coupons.js";

import { OPENSEA_URL, JSON_URL } from "../config";
import { bulkMint, getToken } from "../utility/contractMethods/index";

import { finalImages } from "../_data/finalImages";
import { getSingleAsset } from "../api/opensea";

function MintForm(props) {
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const { selectedAddress, wrongNetwork } = useSelector(
    (state) => state.accounts
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      props.setLoading(true);
      if (!selectedAddress) {
        toast.error("Please install Metamask wallet");
        props.toggleModal();
        props.setLoading(false);
        return;
      }

      let urlArr = [];
      let imgUrl = [];

      let tokenId = await getToken();
      const data = await bulkMint(quantity, selectedAddress);

      let NewTokenId = await getToken();
      let tokenIdCorrect = parseInt(NewTokenId) - 1;
      let openUrl = [];
      let jsonUrl = [];
      for (let i = 0; i < quantity; i++) {
        openUrl.push(OPENSEA_URL + (tokenIdCorrect - i));
        jsonUrl.push(finalImages[tokenIdCorrect - i]);
        // await new Promise((resolve) => setTimeout(resolve, 5000));
        // const data = await getSingleAsset(tokenIdCorrect - i);
        // console.log(data);
        // jsonUrl.push(data.image_url);
      }
      props.setImgUrlArr(jsonUrl);
      props.setOpenSeeUrlArr(openUrl);
      props.setLoading(false);
      toast.success("Token Minted");
      props.setMintingCompleted(true);
      // props.save();
    } catch (error) {
      props.toggleModal();
      toast.error(error.message);
      props.setLoading(false);
    }
  };

  return (
    <form className="mint-form" onSubmit={handleSubmit}>
      <h2 className="heading">Let's start minting</h2>

      <div className="counter-input">
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
            if (e.target.value < 1 || e.target.value > 20)
              setErrorMessage("Enter numbers only");
            else setErrorMessage("");
          }}
        />
        {errorMessage && <span className="error">{errorMessage}</span>}
      </div>

      <div className="buttons">
        <button className="btn" disabled={errorMessage ? true : false}>
          Mint
        </button>
        <button onClick={props.toggleModal} className="btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default MintForm;
