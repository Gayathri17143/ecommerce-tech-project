import React, { useState } from "react";
import Input from "../Components/Input";
export const MobPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["5000-9999", "10000-14999", "15000-29999", "30000-59999","60000 - 310999"].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const BasicphonesPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["449-899","899-3750", "3750-5299","5299-12100","12100-15100" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const IphonesPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["52990 - 71990", "71990 - 83990","151900 - 171900","171900 - 189990" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};

export const PriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["52990-85990", "85990-105990", "105990-145990", "145990-179990"].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const HdtvPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["9499-15490", "15490-21890", "21890-26990","26990-32590" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const AndroidtvPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["12990-52990", "52990-117990", "117990-362990", "362990-624990" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const FitnesswatchPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["1499-5990", "5990-25990", "25990-45990", "45990-85990" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const SoundbarPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["599-1999","1999-9999", "9999-21990", "21990-52990", "52990-113990", "113990-152990", "152990-199990" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const QLEDtvPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {[ "52990-117990", "117990-362990", "362990-624990", "624990-824990" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const PortablespeakerPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["599-1999","1999-9999", "9999-21990", "21990-49990"  ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const SmartspeakerPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["999-3499","3499-8999", "8999-13999"  ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const WiredPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["149-999", "999-2999"  ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};

export const EarphonesPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {["299-1199","1199-4990", "4990-14999","14999-20100","20100-24900" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};
export const MacbookPriceFilter = ({ handlePriceChange }) => {
  const [selectedRange, setSelectedRange] = useState("");

  const handleRadioChange = (e) => {
    const selectedRange = e.target.value;
    setSelectedRange(selectedRange);
    handlePriceChange(selectedRange);
  };

  return (
    <div style={{margin:"20px"}}>
      <h3 className="sidebar-title price-title">Price</h3>
      <label className="sidebar-label-container">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="priceRange"
          style={{ marginRight: "5px" }}
        />
        <span className="checkmark"></span>All
      </label>
      {[ "76990-149900", "149900-247900" , "247900-349900" ].map((range, index) => (
        <div key={index}>
          <Input
            handleChange={handleRadioChange}
            value={range}
            title={`₹${range.split("-")[0]} - ₹${range.split("-")[1]}`}
            name="priceRange"
          />
        </div>
      ))}
    </div>
  );
};

