import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import headerClass from "./header.module.css";

const LowerHeader = () => {
  const [selectedMenu, setSelectedMenu] = useState("All");

  return (
    <div className={headerClass.lower__container}>
      <ul>
        <li>
          <AiOutlineMenu />
          <select
            value={selectedMenu}
            onChange={(e) => setSelectedMenu(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Today's Deals">Today's Deals</option>
            <option value="Customer Service">Customer Service</option>
            <option value="Registry">Registry</option>
            <option value="Gift Cards">Gift Cards</option>
            <option value="Sell">Sell</option>
          </select>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
