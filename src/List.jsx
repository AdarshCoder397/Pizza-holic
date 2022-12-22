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
        reviews: [
          { name: "Adarsh", review: "Great" ,stars:1},
          { name: "Adarsh", review: "Great work " ,stars:3},
          { name: "Adarsh", review: "Nice" ,stars:5},
          { name: "Adarsh", review: "Amazing" ,stars:4.5},
        ],
      },
    ];
    return items;
  }
};

export default List;
