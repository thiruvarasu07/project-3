import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./App.css";
import { Link } from "react-router-dom";

function Main() {
  const [menu, setMenu] = useState([]);
  const [activeButton, setActiveButton] = useState("all");

  useEffect(() => {
    // Sample menu data
    const sampleMenu = [
      {
        id: 1,
        name: "Cake",
        category: "cake",
        price: 350,
        image:
          "https://pixelz.cc/wp-content/uploads/2018/10/chocolate-cream-cake-uhd-4k-wallpaper.jpg",
      },
      {
        id: 2,
        name: "Bar",
        category: "Ice-cream",
        price: 300,
        image: "https://images6.alphacoders.com/835/thumb-1920-835202.jpg",
      },
      {
        id: 3,
        name: "Dark Chocolate",
        category: "Chocolate",
        price: 300,
        image: "https://images5.alphacoders.com/857/thumb-1920-857167.jpg",
      },
      {
        id: 4,
        name: "Black Coffee",
        category: "Coffee",
        price: 150,
        image: "https://wallpaperaccess.com/full/2402088.jpg",
      },
      {
        id: 5,
        name: "Foam Cakes",
        category: "cake",
        price: 500,
        image: "https://images5.alphacoders.com/836/thumb-1920-836830.jpg",
      },
      {
        id: 6,
        name: "BlueBerry Ice-Cream",
        category: "Ice-cream",
        price: 300,
        image:
          "https://buttermilkbysam.com/wp-content/uploads/2018/07/blueberryicecream-2-1.jpg",
      },
      {
        id: 7,
        name: "Godiva",
        category: "Chocolate",
        price: 500,
        image: "https://images2.alphacoders.com/716/thumb-1920-716028.jpg",
      },
      {
        id: 8,
        name: "Hot Coffee",
        category: "Coffee",
        price: 200,
        image: "https://wallpaperaccess.com/full/2632548.jpg",
      },
      {
        id: 9,
        name: "Black Forest",
        category: "cake",
        price: 900,
        image:
          "https://cdn.igp.com/f_auto,q_auto,t_prodm/products/p-classic-black-forest-cake-half-kg--108742-m.jpg",
      },
      {
        id: 10,
        name: "Vanilla Ice-Cream",
        category: "Ice-cream",
        price: 150,
        image:
          "https://foodsguy.com/wp-content/uploads/2020/09/Ice-Cream-Without-Cream.jpg",
      },
      {
        id: 11,
        name: "Cadbury",
        category: "Chocolate",
        price: 200,
        image:
          "http://getwallpapers.com/wallpaper/full/d/f/2/1336634-best-chocolate-wallpapers-for-desktop-2840x1873-for-full-hd.jpg",
      },
      {
        id: 12,
        name: "Cappuccino",
        category: "Coffee",
        price: 250,
        image: "https://wallpaperaccess.com/full/2632475.jpg",
      },
      {
        id: 13,
        name: "Piece Cake",
        category: "cake",
        price: 70,
        image:
          "https://yesofcorsa.com/wp-content/uploads/2017/11/4K-Cakes-Photo-Download1.jpg",
      },
      {
        id: 14,
        name: "Kulfi",
        category: "Ice-cream",
        price: 150,
        image:
          "https://northernnester.com/wp-content/uploads/2020/11/kulfi.jpg",
      },
      {
        id: 15,
        name: "Hershey’s Chocolate",
        category: "Chocolate",
        price: 600,
        image: "https://images3.alphacoders.com/109/thumb-1920-1090620.jpg",
      },
      {
        id: 16,
        name: "Irish Coffee",
        category: "Coffee",
        price: 300,
        image:
          "https://blog.liebherr.com/huishoud/nl/wp-content/uploads/sites/21/2019/11/irish-coffee_post2.jpg",
      },
    ];

    setMenu(sampleMenu);
  }, []);

  const handleClick = (filter) => {
    setActiveButton(filter);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase().trim();
    const filteredMenu = menu.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    setMenu(filteredMenu);
  };

  return (
    <div>
      <div className="control">
        <h2
          className="logo"
          style={{ color: "blue", backgroundColor: "white" }}
        >
          Blue Collar
        </h2>
        <div className="btn-group">
          <button
            className={`btn ${activeButton === "all" ? "btn-clicked" : ""}`}
            onClick={() => handleClick("all")}
          >
            All
          </button>
          <button
            className={`btn ${activeButton === "cake" ? "btn-clicked" : ""}`}
            onClick={() => handleClick("cake")}
          >
            Cake
          </button>
          <button
            className={`btn ${
              activeButton === "Ice-cream" ? "btn-clicked" : ""
            }`}
            onClick={() => handleClick("Ice-cream")}
          >
            Ice-cream
          </button>
          <button
            className={`btn ${
              activeButton === "Chocolate" ? "btn-clicked" : ""
            }`}
            onClick={() => handleClick("Chocolate")}
          >
            Chocolate
          </button>
          <button
            className={`btn ${activeButton === "Coffee" ? "btn-clicked" : ""}`}
            onClick={() => handleClick("Coffee")}
          >
            Coffee
          </button>
        </div>
        <input
          type="text"
          placeholder="search food"
          id="search"
          onChange={handleSearch}
        />
        <Link to="/Resevation">
          <button
            style={{
              textDecoration: "none",
              backgroundColor: "red",
              color: "black",
              // additional styles...
            }}
          >
            <a href="/Resevation">Reservation</a>
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{
              textDecoration: "none",
              backgroundColor: "red",
              color: "black",
              // additional styles...
            }}
          >
            <a href="/login">Login</a>
          </button>
        </Link>
      </div>
      <div className="container">
        {menu.map((item) => (
          <div
            key={item.id}
            className="box"
            data-item={item.category}
            style={{
              display:
                activeButton === "all" || activeButton === item.category
                  ? "block"
                  : "none",
            }}
          >
            <div className="box-img">
              <img src={item.image} alt={item.name} />
              <div className="box-info">
                <section className="product-name">{item.name}</section>
                <section className="product-price">{`RS.${item.price}`}</section>
                {/* <button className="add-to-cart-btn">Add to Cart</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
