import React, { useState } from "react";
import "./Form.css";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { types, useAlert } from "react-alert";


const FranchiseForm = ({ type }) => {
  const alert = useAlert();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState("");
  const applyCheck = () => {
    if (name !== "" && number !== "" && email !== "") {
      return true;
    } else {
      alert.show("Fill your information", { type: types.INFO });
      return false;
    }
  };
  const addData = async (e) => {
    e.preventDefault();
    const res = applyCheck();
    console.log(res);
    if (res) {
      try {
        const docRef = await addDoc(collection(db, "franchise"), {
          name: name,
          email: email,
          phone: number,
          message: message,
        });
        alert.show("Franchise Request Bundled", { type: types.SUCCESS });
      } catch (e) {
        console.error("Error adding document: ", e);
        alert.show("We coudn't process your request!", { type: types.ERROR });
      }
    }
  };
  const addReq = async (e) => {
    const res = applyCheck();
    if (res) {
      try {
        const docRef = await addDoc(collection(db, "outlet"), {
          name: name,
          email: email,
          phone: number,
          state: String(state),
        });
        alert.show("Outlet Request Bundled", { type: types.SUCCESS });
      } catch (e) {
        console.error("Error adding document: ", e);
        alert.show("We coudn't process your request!", { type: types.ERROR });
      }
    }
  };
  if (type === "apply") {
    return (
      <div className="form">
        <div className="name">
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="msg">
          <h5>Message</h5>
          <textarea
            name=""
            id=""
            cols="20"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="btn_cont">
          <button className="btn" onClick={addData}>
            Submit
          </button>
        </div>
      </div>
    );
  }
  if (type === "outlet") {
    return (
      <div className="reqform">
        <div className="name">
          <h5>Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phone">
          <h5>Phone</h5>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="msg">
          <h5>State</h5>
          <select
            className="selector"
            id="selector"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            {states.map((state) => {
              return <option value={state}>{state}</option>;
            })}
          </select>
        </div>
        <div className="btn_cont">
          <button className="btn" onClick={addReq}>
            Submit
          </button>
        </div>
      </div>
    );
  }
};

export default FranchiseForm;
