import React from "react";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  return (
    <div>
      <Hero></Hero>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
