import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="left_footer">
          <h3>Reach us:</h3>
          <a href="https://www.google.com/maps/place/Pizzaholic+CAFE/@26.1371278,85.3633512,15z/data=!4m12!1m6!3m5!1s0x0:0x79883823d08a2c49!2sPizzaholic+CAFE!8m2!3d26.1371278!4d85.3633513!3m4!1s0x0:0x79883823d08a2c49!8m2!3d26.1371278!4d85.3633513" target={"_blank"}>
          <h4>Maps</h4>
          </a>
          <h4>Email(Soon)</h4>
        </div>
        <div className="mid_footer">
          <h1>Pizza Holic</h1>
          <p>
            Best place For You To Dine in This <span>Weekend</span>!
          </p>
          <p>Copyrights 2022 &copy; PizzaHolic</p>
        </div>
        <div className="right_footer">
          <h4>Follow us at</h4>
          <h3>Instagram(Soon)</h3>
          <h3>Twitter(Soon)</h3>
          <h3>Youtube(Soon)</h3>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
