import { API_URL } from "../config";

export async function validateCoupon(couponCode, walletAddress) {
  const res = await fetch(`${API_URL}api/coupon/verify`, {
    headers: {
      accept: "application/json",
      "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      couponCode,
      walletAddress,
    }),
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });

  const data = await res.json();
  return data;
}

export async function consumeCoupon(couponCode, walletAddress) {
  const res = await fetch(`${API_URL}api/coupon/consume`, {
    headers: {
      accept: "application/json",
      "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      couponCode,
      walletAddress,
    }),
    method: "POST",
    mode: "cors",
    credentials: "omit",
  });

  const data = await res.json();
  return data;
}
