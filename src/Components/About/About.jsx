import React from "react";
import "./About.css";
import pizza from '../../img/pizza2.png'
import { MdHandyman } from "react-icons/md";
import FranchiseForm from './Form/Form'

const About = () => {
  return (
    <div className="main" id="about">
      <div className="first_half">
        <div className="info">
          <h2>About Us</h2>
          <p>
            We are currenly running our one outlet in Muzaffarpur,Bihar and
            eagerly looking to expand in nearby places and you know what's the
            best part it's our own custom Franchise based and also do you know
            the starting price?
          </p>
          <p className="red">@49 only</p>
        </div>
        <img src={pizza} alt="Pizza" />
      </div>
      <hr />
      <div className="second_half">
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipMJtZiGb5zhipPcYN9PEGU2gbsXJnX7EejSlNgr=s680-w680-h510"
          alt="Image"
        />
        <div className="temp">
          <div className="info2">
            <h2>Our Franchise</h2>
            <p className="des">
              As you heared,we are running this outlet on our own franchise and
              our franchise has different varities of snacks and treats!
            </p>
          </div>
          <a href="#apply">
            <button>
              <MdHandyman />
              Request an outlet
            </button>
          </a>
        </div>
      </div>
      <div className="third_half" id="apply">
        <h2 className="homeh2">Request an outlet</h2>
        <FranchiseForm type="outlet"/>
      </div>
    </div>
  );
};

export default About;
