import { products } from "@/utils/data";
import React from "react";

const InterceptedPage = async ({ params }) => {
  const { product } = await params;

  const findProduct = products.find((a) => a.id === +product);
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-green-400"> 
        InterceptedPage
        <div className="mt-30 p-10">
          <div key={findProduct.id} className="border p-3">
            <img src={findProduct.image} className="w-70" alt="" />
            
          </div>
        </div>
      </div>
    );
};

export default InterceptedPage;
