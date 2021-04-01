import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className='text-center text-white'
      style={{ display: "grid", placeContent: "center", height: "70vh" }}
    >
      <Link to='/persons'>
        <h1> Go To Persosn </h1>
      </Link>
    </div>
  );
};

export default Home;
