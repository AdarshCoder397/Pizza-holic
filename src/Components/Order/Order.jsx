import React from "react";
import "./Order.css";
import Product from "../Home/Product/Product";

const Order = () => {
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
    <div className="order">
      <h2 className="homeh2">All Items</h2>
      <div className="itemss">
        {items.map((item) => (
          <Product product={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
