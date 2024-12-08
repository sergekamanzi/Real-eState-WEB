import  { useState } from "react";
import { IoLocation } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import "./listings.css";
import house1 from "/house1.jpg";
import house2 from "/house2.jpg";
import house3 from "/house3.jpg";
import house4 from "/house4.jpg";
import house5 from "/house5.jpg"; 
import house6 from "/house6.jpg";
import house7 from "/house7.jpg";
import house8 from "/house8.jpg";
import house9 from "/house9.jpg";
import house10 from "/house10.jpg";
import house11 from "/house11.jpg";
import house12 from "/house12.jpg";
import house13 from "/house13.jpg";
import house14 from "/house14.jpg";

const Listings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const listingsData = [
    { h6 : "Remera-resolt", location: "Remera", bedrooms: "4", price: "$500,000", img: house1, RE: "Sell"},
    { h6 : "Gisozi-resolt", location: "Gisozi", bedrooms: "3", price: "$450,000", img: house2, RE: "Sold"},
    { h6 : "Gishushu-resolt", location: "Gishushu", bedrooms: "2", price: "$400,000", img: house3, RE: "Sell"},
    { h6 : "Gikondo-resolt", location: "Gikondo", bedrooms: "1", price: "$380,000", img: house4, RE: "Sell"},
    { h6 : "Kimihurura-resolt", location: "Kimihurura", bedrooms: "5", price: "$600,000", img: house5, RE: "Sell"},
    { h6 : "Nyamata-resolt", location: "nyamata", bedrooms: "3", price: "$200,000", img: house6, RE: "Sold"},
    { h6 : "Kicukiro-resolt", location: "kicukiro", bedrooms: "5", price: "$300,000", img: house7, RE: "Sell"},
    { h6 : "Gacuriro-resolt", location: "gacuriro", bedrooms: "7", price: "$600,000", img: house8, RE: "Sold"},
    { h6 : "Kanombe-resolt", location: "kanombe", bedrooms: "4", price: "$300,000", img: house9, RE: "Sell"},
    { h6 : "Kagugu-resolt", location: "kagugu", bedrooms: "3", price: "$150,000", img: house10, RE: "Sell"},
    { h6 : "Kimironko-resolt", location: "kimironko", bedrooms: "5", price: "$300,000", img: house11, RE: "Sell"},
    { h6 : "Niboyi-resolt", location: "niboyi", bedrooms: "2", price: "$100,000", img: house12, RE: "Sold"},
    { h6 : "Gacuriro-resolt", location: "gacuriro", bedrooms: "4", price: "$450,000", img: house13, RE: "Sell"},
    { h6 : "Bugesera-resolt", location: "bugesera", bedrooms: "5", price: "$300,000", img: house14, RE: "Sell"},
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % listingsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + listingsData.length) % listingsData.length
    );
  };

  return (
    <div className="main-listings">
      <h3>Homes For You</h3>
      <p>Based on your view history</p>
      <div className="slider-container">
        <button className="nav-button left" onClick={handlePrev}>
          &#8249;
        </button>
        <div
          className="cards"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {listingsData.map((item, index) => (
            <div className="card-lists" key={index}>
              <img src={item.img} alt={item.location} />
              <div className="card-text">
                <h6>{item.h6}</h6>
                <span>{item.price}&nbsp;&nbsp;&nbsp;{item.RE}</span>
              </div>
              <div className="card-icons">
                <IoLocation />
                <p>{item.location}</p>
                <FaBed />
                <p>{item.bedrooms} bedrooms</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Listings;
