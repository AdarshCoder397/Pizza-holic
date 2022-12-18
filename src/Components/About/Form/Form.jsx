import React, { useState } from "react";
import "./Form.css";

const FranchiseForm = ({ type }) => {
  const states= ['Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana','Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal']
  if (type === "apply") {
    return (
      <div className="form">
        <div className="name">
          <h5>Name</h5>
          <input type="text" />
        </div>
        <div className="email">
          <h5>Email</h5>
          <input type="email" />
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <input type="number" />
        </div>
        <div className="msg">
          <h5>Message</h5>
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
          ></textarea>
        </div>
        <div className="btn_cont">
          <button className="btn">Submit</button>
        </div>
      </div>
    );
  }
  if (type === "outlet") {
    return (
      <div className="form">
        <div className="name">
          <h5>Name</h5>
          <input type="text" />
        </div>
        <div className="email">
          <h5>Email</h5>
          <input type="text" />
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <input type="text" />
        </div>
        <div className="msg">
          <h5>State</h5>
          <select className="selector" id="selector">
            {states.map((state)=> {
              return <option value={state}>{state}</option>
            })}
          </select>
        </div>
        <div className="btn_cont">
          <button className="btn">Submit</button>
        </div>
      </div>
    );
  }
};

export default FranchiseForm;
