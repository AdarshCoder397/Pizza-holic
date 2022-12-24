import React from "react";
import { MdLocalPizza } from "react-icons/md";
import "./Home.css";
import Product from "./Product/Product";
import List from '../../List'

const Home = () => {
  const items = List('home')
  
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
    </div>
  );
};

export default Home;
