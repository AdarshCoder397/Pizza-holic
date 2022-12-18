import React from "react";
import FranchiseForm from "../About/Form/Form";
import "./Franchise.css";
const PreOrder = () => {
  return (
    <div>
      <h2 className="homeh2">Apply for franchise</h2>
      <div className="col">
        <FranchiseForm type="apply" />
      </div>
    </div>
  );
};

export default PreOrder;
