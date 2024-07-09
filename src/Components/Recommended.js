import React from "react";
import Button from "../Components/Button";



export const MobRecommendedFilter = ({ handleFilterChange }) => {
  const filters = [
    { value: "", title: "All Products" },
    { value: "5G", title: "5G Mobiles" },
    { value: "lowtohigh", title: "Low to High" },
    { value: "hightolow", title: "High to Low" },
  ];

  return (
    <div className="recommended-flex" style={{ padding: "30px", textAlign: "right" }}>
      {filters.map((filter, index) => (
        <Button key={index} onClickHandler={() => handleFilterChange(filter.value)} title={filter.title} />
      ))}
    </div>
  );
};
export const RecommendedFilter = ({ handleFilterChange }) => {
  const filters = [
    { value: "", title: "All Products" },
   
    { value: "lowtohigh", title: "Low to High" },
    { value: "hightolow", title: "High to Low" },
  ];

  return (
    <div className="recommended-flex" style={{ padding: "30px", textAlign: "right",display:"flex" }}>
      {filters.map((filter, index) => (
        <Button key={index} onClickHandler={() => handleFilterChange(filter.value)} title={filter.title} />
      ))}
    </div>
  );
};

