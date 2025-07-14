import React from "react";
import { products } from "@/utils/data";
import Link from "next/link";
const Ecommerce = () => {
  return (
    <div>
      Ecommerce
      <div className="flex gap-10 mt-10">
        {products.map((dets) => {
          return (
            <Link href={`ecommerce/${dets.id}`} key={dets.id}>
              <div className="border p-3">
                <h1>Name : {dets.name}</h1>
                <img src={dets.image} className="w-70" alt="" />
                <p>Price : {dets.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Ecommerce;
