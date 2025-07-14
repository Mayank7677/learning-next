import { products } from "@/utils/data";
import React from "react";

const ProductDetails = async ({ params }) => {
  const { product } = await params;

  const findProduct = products.find((a) => a.id === +product);
  return (
    <div className="mt-30 p-10">
      <div key={findProduct.id} className="border p-3">
        <h1>Name : {findProduct.name}</h1>
        <img src={findProduct.image} className="w-70" alt="" />
        <p>Price : {findProduct.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
