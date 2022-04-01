import { Erc1155Abi } from "../contracts/Erc1155";
import { NFTAbi } from "../contracts/NFT";
import Web3 from "web3";
import {
  ERC721ContractAddress,
  ERC1155ContractAddress,
} from ".././../config/index";

const web3 = new Web3(window.ethereum);

const NFT721Contract = new web3.eth.Contract(NFTAbi, ERC721ContractAddress);

const ERC1155Contract = new web3.eth.Contract(
  Erc1155Abi,
  ERC1155ContractAddress
);

export const bulkMint = (length, myAddress) => {
  const amount = 0.09 * length;
  return new Promise((resolve, reject) => {
    if (web3 && web3.currentProvider) {
      NFT721Contract.methods
        .bulkMint(length)
        .send({
          from: myAddress,
          value: Web3.utils.toWei(`${amount}`, "ether"),
          // gas: 220821
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    } else {
      resolve();
    }
  });
};

export const getToken = () => {
  return new Promise((resolve, reject) => {
    if (web3 && web3.currentProvider) {
      NFT721Contract.methods
        .totalSupply()
        .call()
        .then((data) => {
          resolve(data);
        })
        .catch((error) => reject(error));
    } else {
      resolve();
    }
  });
};
