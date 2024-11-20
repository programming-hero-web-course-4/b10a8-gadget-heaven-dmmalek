import React from "react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-5 rounded-md">
      <footer className="footer footer-center gap-y-4">
        <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p className="font-base text-[rgba(9,8,15,0.6)] font-semibold ">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </footer>
      <div className="divider"></div>
      <footer className="footer  text-base-content mx-auto justify-center gap-48">
        <nav className="text-center">
          <h6 className="footer-title opacity-100">Services</h6>
          <a className="link link-hover">Product Support </a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title opacity-100">Legal</h6>
          <a className="link link-hover">Terms of service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
