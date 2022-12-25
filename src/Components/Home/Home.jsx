import React from "react";
import { MdLocalPizza } from "react-icons/md";
import "./Home.css";
import Product from "./Product/Product";
import List from "../../List";
import { Avatar, Rating } from "@mui/material";

const Home = () => {
  const items = List("home");

  return (
    <div className="home" id="home">
      <div className="banner">
        <p>
          Welcome to the <span>Pizza Holic</span>!
        </p>
        <h2>Best Place For You To Dine-in!</h2>
        <a href="#main">
          <button>
            <MdLocalPizza />
            Taste food
          </button>
        </a>
      </div>
      <div className="items" id="main">
        <h2 className="homeh2">Popular Taste</h2>
        <div className="container" id="container">
          {items && items.map((product) => <Product product={product} />)}
        </div>
      </div>
      <h2 className="homeh2">Top reviews</h2>
      <div className="main_temp">
        <div className="productReviewCard long">
          <Avatar src="https://lh3.googleusercontent.com/a-/AD5-WCl_lBisXFVEq1m5P0ytAecN9eAv8oVCS3f1mO9Jotw=w60-h60-p-rp-mo-br100" />
          <div className="reviewInfo">
            <h5>Abhinav Anand</h5>
            <Rating name="read-only" value={5} readOnly />
            <p> Excellent food.The ambiance is very welcoming and charming!</p>
          </div>
        </div>
        <div className="productReviewCard">
          <Avatar src="https://lh3.googleusercontent.com/a-/AD5-WClUc1YpSYTKxct37GCVBFrNYpQHv_qWg6Lw8pXhow=w60-h60-p-rp-mo-br100" />
          <div className="reviewInfo">
            <h5>प्रणव</h5>
            <Rating name="read-only" value={5} readOnly />
            <p>Very delicious pizza!!🍕</p>
          </div>
        </div>
        <div className="productReviewCard">
          <Avatar src="https://lh3.googleusercontent.com/a-/AD5-WCmIb8kFdqm8bI-XLgI3ZkQDjCA6bVB7A0dQTAAaEg=w60-h60-p-rp-mo-ba3-br100" />
          <div className="reviewInfo">
            <h5>Annie_</h5>
            <Rating name="read-only" value={4} readOnly />
            <p>Justified!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
