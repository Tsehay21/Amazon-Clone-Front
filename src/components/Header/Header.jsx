import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import headerClass from "./header.module.css";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section>
        <div className={headerClass.header__container}>
          {/* logo */}
          <div className={headerClass.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={headerClass.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section */}
          <div className={headerClass.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            {/* icon */}
            <FaSearch size={"22.5"} />
          </div>
          {/* other section */}
          <div className={headerClass.order__container}>
            <Link to="" className={headerClass.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            {/* three components */}
            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={headerClass.cart}>
              {/* icon */}
              <BiCartAlt size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
