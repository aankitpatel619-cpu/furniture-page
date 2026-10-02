import React from "react";
import HeroPoster from "../Components/HeroPoster";
import ProductList from "../Components/Productlist";
import Services from "../Components/Services";

const Shop = () => {
  return (
    <>
      <HeroPoster title="Shop" breadcrumb="Home > Shop" />
      <ProductList />
      <Services />
    </>
  );
};

export default Shop;
