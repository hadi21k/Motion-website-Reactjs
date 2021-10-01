import React, { useEffect, useState } from "react";
import PriceSection from "./PriceSection";
import "./Pricing.css";
import { FaGripfire } from "react-icons/fa";
import { BsFillXDiamondFill } from "react-icons/bs";
import { RiVipDiamondFill } from "react-icons/ri";
const Pricing = ({ NavLight }) => {
  return (
    <div
      className={` py-12 lg:py-24 flex relative items-center overflow-hidden justify-center ${
        NavLight ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container grid grid-cols-1 gap-8 px-8 mx-auto lg:place-items-center lg:grid-cols-3 price-container">
        <PriceSection
          icon={<FaGripfire />}
          type="Starter"
          price="9.99"
          transactions="1000 Transactions"
          cashBack="2% Cash Back"
          limit="$10000 Limit"
        />
        <PriceSection
          icon={<BsFillXDiamondFill />}
          middle={true}
          type="Gold"
          price="$29.99"
          transactions="10000 Transactions"
          cashBack="3.5% Cash Back"
          limit="$100,000 Limit"
        />
        <PriceSection
          icon={<RiVipDiamondFill />}
          type="Diamond"
          price="$99.99"
          transactions="Unlimited Transactions"
          cashBack="5% Cash Back"
          limit="Unlimited Spend"
        />
      </div>
    </div>
  );
};

export default Pricing;
