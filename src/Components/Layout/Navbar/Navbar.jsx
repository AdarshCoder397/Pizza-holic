import { ReactNavbar } from "overlay-navbar";
import React from "react";
import {MdAccountCircle, MdHome, MdShoppingCart} from 'react-icons/md'

const Navbar = () => {
  return( <ReactNavbar 
    burgerColor="red" 
    navColor1="#1b1b1b" 
    logo="https://img.freepik.com/premium-vector/pizza-logo-vector_25327-119.jpg"
    logoHoverColor="#1b1b1b"
    searchIcon="true"
    cartIcon="true"
    CartIconElement={MdShoppingCart}
    SearchIconElement={MdHome}
    profileIcon="true"
    ProfileIconElement={MdAccountCircle}
    logoWidth="295px"
    logoTransition="0.5"
    logoAnimationTime="1"
    link1Text="Home"
    link2Text="Order"
    link3Text="Apply For Franchise"
    link4Text="About"
    link1Url="/home"
    link2Url="/order"
    link3Url="/apply"
    link4Url="/about"
    link1Size="1.6vmax"
    link1Color="#FFE5E5"
    nav2justifyContent="flex-end"
    nav3justifyContent="flex-start"
    link1ColorHover="#760000"
    link1Family="Roboto"
    link1Margin="2.1vmax"
    searchIconMargin="2vmax"
    cartIconMargin="2vmax"
    profileIconMargin="2vmax"
    searchIconColorHover="gray"
    cartIconColorHover="gray"
    searchIconUrl="/home"
    cartIconUrl="/order"
    profileIconUrl="/about"
    />
  )
};

export default Navbar;
