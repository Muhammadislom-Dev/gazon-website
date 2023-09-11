import React from "react";
import "./Gallery.css";
import Gazon1 from "../../assets/gazon1.jpg";
import Gazon2 from "../../assets/gazon2.jpg";
import Gazon3 from "../../assets/gazon3.jpg";
import Gazon4 from "../../assets/gazon4.jpg";
import Gazon5 from "../../assets/gazon5.jpg";
import Gazon6 from "../../assets/gazon6.jpg";
import Gazon7 from "../../assets/gazon7.jpg";
import Gazon8 from "../../assets/gazon8.jpg";
import Gazon9 from "../../assets/gazon9.jpg";
import Gazon10 from "../../assets/gazon10.jpg";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery">
      <h2 className="section-name">НАША ГАЛЕРЕЯ</h2>
      <div className="gallery-list">
        <img src={Gazon1} alt="" className="gallery-img" />
        <img src={Gazon2} alt="" className="gallery-img" />
        <img src={Gazon3} alt="" className="gallery-img" />
        <img src={Gazon4} alt="" className="gallery-img" />
        <img src={Gazon5} alt="" className="gallery-img" />
        <img src={Gazon6} alt="" className="gallery-img" />
        <img src={Gazon7} alt="" className="gallery-img" />
        <img src={Gazon8} alt="" className="gallery-img" />
        <img src={Gazon9} alt="" className="gallery-img" />
        <img src={Gazon10} alt="" className="gallery-img" />
      </div>
      <Link to="/gazon" className="gallery-link">
        Увидеть все
      </Link>
    </div>
  );
}

export default Gallery;
