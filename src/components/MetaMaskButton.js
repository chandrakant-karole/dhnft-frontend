import { useCallback, useState, useEffect } from "react";
import { FaWallet, FaCheckCircle } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import MetaMaskClass from "../utils/MetaMask";
import constants from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { setSetting } from "../redux/actions/accounts";

let metamask = null;
let accounts = [];
let metamaskWatcher = null;

function MetaMaskButton() {
  const [openConnect, setOpenConnect] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [awaiting, setAwaiting] = useState(false);
  const [error, setError] = useState("");
  // const [settings, setSetting] = useState({});
  // const [selectedAddress, setSelectedAddress] = useState();
  // const [walletType, setWalletType] = useState("");
  const [networkId, setNetworkId] = useState("");

  const { selectedAddress, latestBlockNumberState, walletType } = useSelector(
    (state) => state.accounts
  );
  const dispatch = useDispatch();

  // ---------------------------------Network Change connect-------------------------------------
  const checkNetwork = () => {
    let netId;
    if (walletType === "binance") {
      netId = +window.BinanceChain.chainId;
      setNetworkId(netId);
    } else {
      netId = window.ethereum.networkVersion
        ? +window.ethereum.networkVersion
        : +window.ethereum.chainId;
      setNetworkId(netId);
    }
    if (netId) {
      if (netId === 1) {
        toast.success(`Successfully connected to Ethereum network`);
      } else {
        toast.error(`Please select Ethereum Network`);
      }
    }
  };

  // useEffect(() => {
  //     if (window.ethereum) {
  //         window.addEventListener("load", () => {
  //             checkNetwork();
  //         });
  //     }
  // }, [window.ethereum]);

  // // ---------------------------------MetaMask connect-------------------------------------
  const withTimeoutRejection = async (promise, timeout) => {
    const sleep = new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error(constants.TIMEOUT)), timeout)
    );
    return Promise.race([promise, sleep]);
  };

  const handleWatch = async (isCalled) => {
    if (window.ethereum) {
      const accs = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (!accs[0]) {
        accounts = [];
        clearTimeout(metamaskWatcher);
        // setSelectedAddress(null);
        dispatch(setSetting({ selectedAddress: null }));
      }

      // if (!web3 || !accounts.length) {
      //   setAwaiting(true);
      // }
      try {
        const isLocked = isCalled
          ? !isCalled
          : error != "" && error.message === constants.LOCKED;

        if (!metamask || isLocked) {
          metamask = await withTimeoutRejection(
            MetaMaskClass.initialize(undefined), // if option is existed, add it
            20 * 1000 // timeout
          );
          checkNetwork();
        }

        let [tempWeb3, tempAccounts, latestBlockNumber] = await Promise.all([
          metamask.getWeb3(),
          metamask.getAccounts(),
          metamask.getLatestBlockNumber(),
        ]);
        accounts = tempAccounts;
        setWeb3(tempWeb3);
        setError("");

        //   setAwaiting(false);
        if (selectedAddress !== tempAccounts[0]) {
          // setSelectedAddress(tempAccounts[0]);
          dispatch(
            setSetting({
              selectedAddress: tempAccounts[0],
              latestBlockNumber,
            })
          );
        }
        metamaskWatcher = setTimeout(() => {
          clearTimeout(metamaskWatcher);
          handleWatch(true);
        }, 3000);
      } catch (err) {
        // setSelectedAddress(null);
        dispatch(setSetting({ selectedAddress: null }));
        accounts = [];
        setWeb3(null);
        setError(err);
        // setAwaiting(false);
      }
    } else {
      toast.error("Please install Metamask wallet");
    }
  };

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      handleWatch();
    }
  }, [window]);

  const handleMetaMask = () => {
    // setWalletType("metamask");
    setSetting({ walletType: "metamask" });
    setError(MetaMaskClass.hasWeb3() ? "" : new Error(constants.NOT_INSTALLED));
    handleWatch();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <button className="btn connect-btn" onClick={handleMetaMask} disabled>
        {selectedAddress && networkId == 1 ? <FaCheckCircle /> : <FaWallet />}
        {selectedAddress && networkId == 1
          ? `${selectedAddress.substring(0, 6)}...`
          : "Connect"}
      </button>
    </>
  );
}

export default MetaMaskButton;
