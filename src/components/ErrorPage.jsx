import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="grid items-center justify-center min-h-screen">
      <div>
        <img src="../../public/404page.png" alt="404 Page" />
        <div className="text-center">
          <Link
            to={"/"}
            className="btn bg-customPurple rounded-3xl text-white text-xl"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
