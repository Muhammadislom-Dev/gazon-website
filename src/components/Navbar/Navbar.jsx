import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <h3 className="navbar-name">ПОСАДКА ГАЗОНА И СИСТЕМА ПОДКОРМКИ</h3>
        <div className="navbar-list">
          <a href="#" className="navbar-link">
            Главная{" "}
          </a>
          <a href="#" className="navbar-link">
            О Нас{" "}
          </a>
          <a href="#" className="navbar-link">
            Наши Продукты{" "}
          </a>
          <a href="#" className="navbar-link">
            Галерея{" "}
          </a>
          <a href="#" className="navbar-link">
            Блог{" "}
          </a>
          <a href="#" className="navbar-link">
            Отзывы{" "}
          </a>
          <a href="#" className="navbar-link">
            Контакты{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
