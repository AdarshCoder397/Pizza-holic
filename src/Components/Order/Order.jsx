import React from "react";
import "./Order.css";
import Product from "../Home/Product/Product";
import List from '../../List'

const Order = () => {
  const items = List('all')
  return (
    <div className="order" id="order">
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
