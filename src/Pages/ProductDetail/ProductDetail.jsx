import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/EndPoint";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  // console.log(productId)
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(product);
  return (
    <LayOut>
      {isLoading ? <Loader /> : <ProductCard product={product} flex={true} renderDesc={true} />}
    </LayOut>
  );
};

export default ProductDetail;
