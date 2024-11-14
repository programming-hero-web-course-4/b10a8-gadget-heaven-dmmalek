import React from "react";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
