import React from "react";

const List = (props) => {
  if (props === "home") {
    const items = [
      {
        name: "Cheese Onion Pizza",
        price: "99",
        link: "cheese-onion-pizza",
        images: [
          {
            url: "https://thefusionpizza.in/wp-content/uploads/2021/12/PANEER-ONION-600x600.jpg",
          },
        ],
      },
      {
        name: "Cheese Paneer Pizza",
        price: "99",
        link: "cheese-paneer-pizza",
        images: [
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk-R4b9jTwtNgJ4hvEfDgs-vzlzTuDKm-MQ&usqp=CAU",
          },
        ],
      },
      {
        name: "Fresh Veggie Onion Capsicum",
        price: "149",
        link: "veggie-onion-capsicum",
        images: [
          {
            url: "https://www.dominos.co.in//files/items/Fresh_Veggie.jpg",
          },
        ],
      },
      {
        name: "Cheese Corn Pizza",
        price: "99",
        link: "cheese-corn-pizza",
        images: [
          {
            url: "https://buddyspizzaandcafe.com/wp-content/uploads/2021/06/CHEESY-CORN-removebg-preview.png",
          },
        ],
      },
    ];
    return items;
  }
  if (props === "all") {
    const items = [
      {
        name: "Cheese Onion Pizza",
        link: "cheese-onion-pizza",
        price: "99",
        images: [
          {
            url: "https://thefusionpizza.in/wp-content/uploads/2021/12/PANEER-ONION-600x600.jpg",
          },
        ],
      },
      {
        name: "Cheese Paneer Pizza",
        price: "99",
        link: "cheese-paneer-pizza",
        images: [
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk-R4b9jTwtNgJ4hvEfDgs-vzlzTuDKm-MQ&usqp=CAU",
          },
        ],
      },
      {
        name: "Cheese Tomato Pizza",
        price: "99",
        link: "cheese-tomato-pizza",
        images: [
          {
            url: "https://www.dominos.co.in/files/items/cheese_and_tomato.png",
          },
        ],
      },
      {
        name: "Cheese Corn Pizza",
        price: "99",
        link: "cheese-corn-pizza",
        images: [
          {
            url: "https://buddyspizzaandcafe.com/wp-content/uploads/2021/06/CHEESY-CORN-removebg-preview.png",
          },
        ],
      },
      {
        name: "Double Cheese Margherita",
        price: "149",
        link: "double-cheese-margherita",
        images: [
          {
            url: "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
          },
        ],
      },
      {
        name: "Fresh Veggie Onion Capsicum",
        price: "149",
        link: "veggie-onion-capsicum",
        images: [
          {
            url: "https://www.dominos.co.in//files/items/Fresh_Veggie.jpg",
          },
        ],
      },
      {
        name: "Paneer Makhani",
        price: "149",
        link: "paneer-makhani",
        images: [
          {
            url: "https://www.dominos.co.in//files/items/Paneer_Makhni.jpg",
          },
        ],
      },
      {
        name: "Onion Pizza",
        price: "49",
        link: "onion-pizza",
        images: [
          {
            url: "http://pizzaparadise.in/wp-content/uploads/2019/10/paneer-onion-pizza-mania.png",
          },
        ],
      },
      {
        name: "Tomato Pizza",
        price: "49",
        link: "tomato-pizza",
        images: [
          {
            url: "https://www.dominos.co.in/files/items/pizza_mania_tomato.png",
          },
        ],
      },
    ];
    return items;
  }
};

export default List;
