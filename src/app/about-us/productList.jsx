"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");

    const json = await res.json();

    setProduct(json ?? []);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(product);

  return (
    <div className="grid grid-cols-5 gap-16">
      {product.map((prod) => (
        <div>
          <Image width={500} height={500} src={prod.image} className="w-full h-[400px]" />
          <p>{prod.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
