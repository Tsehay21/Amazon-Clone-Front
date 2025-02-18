import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import productStyle from "./product.module.css";
import { Link } from "react-router-dom";
// import classes from "../../Pages/ProductDetail/productDetail.module.css";

const ProductCard = ({ product, flex, renderDesc }) => {
  const { image, title, id, rating, price, description } = product;
  return (
    <div
      className={`${productStyle.card__container} ${
        flex ? productStyle.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={productStyle.img_container} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={productStyle.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={productStyle.button}>add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
