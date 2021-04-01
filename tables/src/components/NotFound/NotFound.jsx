import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div
      className='text-center text-white'
      style={{ display: "grid", placeContent: "center", height: "70vh" }}
    >
      <h1>404 Page Not Found!!</h1>
      <hr />
      <hr />
      <Link to='/'>
        <h1> Back To Home </h1>
      </Link>
    </div>
  );
};

export default Home;
