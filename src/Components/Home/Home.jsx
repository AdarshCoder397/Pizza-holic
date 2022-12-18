import React from "react";
import { MdLocalPizza } from "react-icons/md";
import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
  const items = [
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
    {
      name: "Test Pizza",
      price: "49",
      link: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
      images: [
        {
          url: "https://cdn.winsightmedia.com/platform/files/public/2019-03/background/slices-pizza-Shutterstock_1551894182.jpg?VersionId=gmt0HTnRT9vAN3CbWtjUdG5ZFCfB6CFB",
        },
      ],
    },
  ];
  return (
    <div className="home">
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
    </div>
  );
};

export default Home;
