import { useState } from "react";
import { useSelector } from "react-redux";
import { validateCoupon } from "../api/coupons.js";

function CouponForm({ toggleModal, setCouponCode, setCouponValidated }) {
  const [coupon, setCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { selectedAddress } = useSelector((state) => state.accounts);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = await validateCoupon(coupon, selectedAddress);
    setLoading(false);

    if (data.code != 200) {
      setErrorMessage(data.message);
    } else {
      setCouponCode(coupon);
      setCouponValidated(true);
    }
  };

  return (
    <form className="mint-form" onSubmit={handleSubmit}>
      <h2 className="heading">Enter Password</h2>

      <div className="counter-input">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {errorMessage && (
          <span className={!loading ? "error" : ""}>
            {loading ? "Loading..." : errorMessage}
          </span>
        )}
        <div className="buttons">
          <button className="btn">Submit</button>
          <button onClick={toggleModal} className="btn">
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default CouponForm;
