import React, { useState } from "react";
 
const pincodeData = {
  600012: {
    deliveryDate: "7-Jun-2024",
    offers: ["10% off", "Free shipping"],
  },
  600035: {
    deliveryDate: "17-Jun-2024",
    offers: ["15% off", "Free return"],
  },
  600043: {
    deliveryDate: "4-Jun-2024",
    offers: ["5% off", "10% cashback on next order"],
  },
  600058: {
    deliveryDate: "13-Jun-2024",
    offers: ["10% off", "Free shipping "],
  },
  600063: {
    deliveryDate: "8-Jun-2024",
    offers: ["15% off", " Free return"],
  },

  // Add more pincode data as needed
};

const PincodeChecker = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleCheck = () => {
    const data = pincodeData[pincode];
    if (data) {
      setDeliveryDate(data.deliveryDate);
      setOffers(data.offers);
      setError("");
    } else {
      setError("Pincode not found. Please try again.");
      setDeliveryDate("");
      setOffers([]);
    }
  };

  return (
    <div style={{ padding:"10px" }}>
      <span>
        {" "}
        Delivery Options:{" "}
        <input style={{margin:"5px"}}
          type="text"
          value={pincode}
          onChange={handleChange}
          placeholder="Enter Pincode"
        />
      </span>
      <button onClick={handleCheck}>Check</button>
      {/* <h2> Enter delivery pincode to check faster delivery options</h2> */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {deliveryDate && (
        <div style={{border:"1px solid #ccc",padding:"15px",margin:"10px"}}>
          <p style={{ fontSize: "15px", fontWeight: "600" }}>
            {" "}
            Delivery on {deliveryDate}
          </p>
          {/* <h4>Offers:</h4> */}

          {offers.map((offer, index) => (
            <span key={index}>&nbsp;&nbsp;&nbsp;&nbsp;{offer}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PincodeChecker;
