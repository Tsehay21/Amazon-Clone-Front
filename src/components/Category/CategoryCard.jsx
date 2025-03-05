import React from "react";
import categoryStyle from "./catagory.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <div className={categoryStyle.category}>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data?.title} />
        <p>Shop now</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
