import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="headerImage">
      <div className="header">
        <div className="container">
          <h2 className="header-name">
            Готовый рулонный газон от производителей +998 97 334 13 13
          </h2>
          <p className="header-text">
            Мы производим лучший рулонный(готовый) газон. Для продажи, оптом и в
            розницу. С доставкой и настилом в Ташкенте и Ташкентской области.
          </p>
          <h4 className="header-subname">Форма обратного звонка</h4>
          <form action="" className="header-form">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="form-input"
            />
            <input
              type="tell"
              placeholder="Your Number"
              required
              className="form-input"
            />
          </form>
          <button className="header-button">Отправка</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
