import Header from "@/_components/header";
import React from "react";
// import Async from "./async";
import AsyncAwait from "./asyncAwait";
import ProductList from "./productList";

const About = () => {
  return (
    <>
      {/* <Async /> */}
      {/* <AsyncAwait /> */}

      <ProductList />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-red-400 h-52"></div>
        <div className="bg-blue-400 h-52"></div>
        <div className="bg-green-400 h-52"></div>
        <div className="bg-yellow-400 h-52"></div>
        <div className="bg-orange-400 h-52"></div>
        <div className="bg-pink-400 h-52"></div>
        <div className="bg-slate-400 h-52"></div>
        <div className="bg-teal-400 h-52"></div>
        <div className="bg-slate-400 h-52"></div>
        <div className="bg-yellow-400 h-52"></div>
      </div>
    </>
  );
};

export default About;
