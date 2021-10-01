import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./Pricing.css";
const PriceSection = ({
  icon,
  middle,
  type,
  price,
  transactions,
  cashBack,
  limit,
}) => {
  return (
    <Link to="/signup">
      <div
        className={`flex flex-col p-12 lg:px-16 lg:py-12 transform mx-2 rounded transition-all duration-700 shadow-2xl w-full price-section hover:scale-100 lg:hover:scale-105 
      ${
        middle
          ? "bg-gray-900 transform scale-90 lg:scale-100"
          : "bg-blue-600 transform scale-90 lg:scale-90 "
      }`}
      >
        <div className="mx-auto mb-3 text-6xl text-white icon">{icon}</div>
        <div className="font-bold text-center text-white price-text">
          <h3 className="text-3xl">{type}</h3>
          <p className="my-2 text-5xl">{price}</p>
          <span className="text-sm">per month</span>
        </div>
        <div className="py-6 text-lg font-bold text-center text-white details">
          <h3>{transactions}</h3>
          <p>{cashBack}</p>
          <span>{limit}</span>
        </div>
        <div className="price-btn">
          <Link to="/signup">
            <Button btnText="Choose Plan" PriceBtn={true} />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PriceSection;
