import React from "react";
import { categoryInfos } from "./catagoryFullInfo";
import catagoryStyle from "./catagory.module.css";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className={catagoryStyle.category__container}>
      {categoryInfos.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
      ))}
    </section>
  );
};

export default Category;
