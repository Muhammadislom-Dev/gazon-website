import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-list">
          <div className="footer-item">
            <h3 className="footer-name">Plus Jasur Invest</h3>
            <p className="footer-text">
              MyGazon Готовый рулонный газон от производителей. Мы производим
              рулонный газоны и предлагаем готовый рулонный газон для продажи,
              оптом и в розницу в Ташкенте и Ташкентской области.
            </p>
          </div>
          <div className="footer-item">
            <a href="#" className="footer-link">
              Главная
            </a>
            <a href="#" className="footer-link">
              Наши Продукты
            </a>
            <a href="#" className="footer-link">
              Галерея
            </a>
            <a href="#" className="footer-link">
              О Нас{" "}
            </a>
            <a href="#" className="footer-link">
              Контакты
            </a>
          </div>
          <div className="footer-item">
            <a href="tel:+998973341313" className="footer-link">
              +998 97 334 13 13
            </a>
            <a href="tel:https://t.me/gazon123456" className="footer-link">
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
