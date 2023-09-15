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
        <img
          src="https://avatars.mds.yandex.net/i?id=0499e45754447e04dcc197224b60646ca4386f76-8981391-images-thumbs&n=13"
          alt=""
          className="gallery-img"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=45d1752b9638a97fe1972f92d1ad2471ffa5863f-5388696-images-thumbs&n=13"
          alt=""
          className="gallery-img"
        />
        <img
          src="https://frankfurt.apollo.olxcdn.com/v1/files/ksdby15wj7gh-UZ/image;s=1600x1200"
          alt=""
          className="gallery-img"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=dc3a8ca5b5539397721c1a7563aadfd6592c0d56-8244444-images-thumbs&n=13"
          alt=""
          className="gallery-img"
        />
        <img
          src="https://avatars.mds.yandex.net/i?id=cee244732087b85fae601b9939fd63af4bbc176b-9592077-images-thumbs&n=13"
          alt=""
          className="gallery-img"
        />
        <img
          src="https://avatars.mds.yandex.net/get-altay/2094876/2a0000016ccd19e9a6342ce8dac05d874d6f/XXL_height"
          alt=""
          className="gallery-img"
        />
      </div>
      <iframe
        width="400"
        height="280"
        src="https://www.youtube.com/embed/GxJ7Nk__ZS4?si=QJAjBc1KYkjqYmou"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe
        width="400"
        height="280"
        src="https://www.youtube.com/embed/mSEGc_t9-dQ?si=PiIHoN1BatPdm66e"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe
        width="400"
        height="280"
        src="https://www.youtube.com/embed/evUIAilkfEQ?si=vTF4mgm2bUtF82lB"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe
        width="400"
        height="280"
        src="https://www.youtube.com/embed/_Vea6KgR_ss?si=2ZU8sGAmyXxnl0-e"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <iframe
        width="400"
        height="280"
        src="https://www.youtube.com/embed/p7yX9kjIldE?si=A4gx8ClFUleWOF9_"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <Link to="/gazon" className="gallery-link">
        Увидеть все
      </Link>
    </div>
  );
}

export default Gallery;
