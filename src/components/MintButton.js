import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

import Loader from "./Loader";

// import CouponForm from "./CouponForm";
import MintForm from "./MintForm";
import ImageCarousel from "./ImageCarousel";

Modal.setAppElement("#root");

function MintButton({ days, hours, minutes, seconds, disabled }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [openSeeUrlArr, setOpenSeeUrlArr] = useState([]);
  const [imgUrlArr, setImgUrlArr] = useState([]);

  const [mintingCompleted, setMintingCompleted] = useState(false);

  // const [mintedImages, setMintedImages] = useState([]);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [buttonText, setButtonText] = useState("Minting Completed");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [preMint, setPreMint] = useState(true);

  useEffect(() => {
    // if (hours <= 3) {
    //   setButtonText("Premint now");
    //   setButtonDisabled(false);
    // }
    // if (hours === 0 && minutes === 0 && seconds === 0) {
    //   setButtonText("Mint now");
    //   setButtonDisabled(false);
    //   setPreMint(false);
    // }
  }, [hours, minutes, seconds]);

  return (
    <>
      <button className="btn" disabled onClick={toggleModal}>
        {buttonText}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="content"
        overlayClassName="modal"
      >
        {loading && <Loader />}
        {!mintingCompleted && !loading && (
          <MintForm
            toggleModal={toggleModal}
            setOpenSeeUrlArr={setOpenSeeUrlArr}
            setImgUrlArr={setImgUrlArr}
            setLoading={setLoading}
            preMint={preMint}
            setMintingCompleted={setMintingCompleted}
          />
        )}
        {mintingCompleted && !loading && <ImageCarousel images={imgUrlArr} />}
      </Modal>
    </>
  );
}

export default MintButton;
