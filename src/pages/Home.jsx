import React from "react";
import Hero from "../components/Hero";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductBanner from "../components/Gadgets/ProductBanner";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  const param = useParams();
  console.log(param.id);
  return (
    <div>
      {param?.id ? <ProductBanner /> : <Hero />}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
