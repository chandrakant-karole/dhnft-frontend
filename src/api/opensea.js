import { ERC721ContractAddress } from "../config";

export async function getSingleAsset(tokenid) {
  const res = await fetch(
    `https://api.opensea.io/api/v1/asset/${ERC721ContractAddress}/${tokenid}/`,
    {
      headers: {
        accept: "application/json",
        "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/json",
      },
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  );

  const data = await res.json();
  return data;
}
