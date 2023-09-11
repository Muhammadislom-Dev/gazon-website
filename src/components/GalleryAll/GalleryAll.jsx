import React from "react";

function GalleryAll() {
  return (
    <div className="galleryAll">
      <div className="container">
        <h2 style={{ marginTop: "25px" }} className="section-name">
          НАША ГАЛЕРЕЯ
        </h2>
        <div className="gallery-list">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k3swepOHb6s?si=Xr1vEJwpP4YueAbB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DD9_bhA7Jno?si=Sk5xhNUvBNIN1d-L"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/KwCtHvLkKPg?si=TFx_ourmu__O3Hr0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YCaBL75UBbY?si=OM8zyuc7J0H_DI_S"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default GalleryAll;
