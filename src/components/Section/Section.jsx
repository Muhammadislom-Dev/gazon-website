import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="container">
        <h3 className="section-name">НАШИ ПРОДУКТЫ</h3>
        <p className="section-text">
          В этом разделе показано все наши продукты с описанием и реалными
          фотографиями продуктов.
        </p>
        <div className="section-list">
          <div className="section-item">
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products1&dirtyAlias=45079467da-1_500x306.jpg"
              alt=""
              className="section-img"
            />
            <a href="#" className="section-link">
              Партерный газон
            </a>
            <p className="section-text">
              Партерный газон – самый эффектный газон, отличающийся идеально
              ровной бархатистой поверхностью. Это – элитный газон, который
              обычно размещают в парадной части сада рядом с домом, в обрамлении
              цветников и декоративных кустарников.{" "}
            </p>
          </div>
          <div className="section-item">
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products1&dirtyAlias=45079467da-1_500x306.jpg"
              alt=""
              className="section-img"
            />
            <a href="#" className="section-link">
              Партерный газон
            </a>
            <p className="section-text">
              Спортивные газоны отличаются плотным и эластичным дерном, а также
              присутствием износостойких трав. В качестве примера спортивных
              газонов можно назвать футбольные и гольф-поля, теннисные корты.
            </p>
          </div>
          <div className="section-item">
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products1&dirtyAlias=45079467da-1_500x306.jpg"
              alt=""
              className="section-img"
            />
            <a href="#" className="section-link">
              Партерный газон
            </a>
            <p className="section-text">
              Для ландшафтного озеленения: от парадных зон до городских парков и
              площадей, спортивных и детских площадок. Оптимален для открытых
              солнечных участков.
            </p>
          </div>
          <div className="section-item">
            <img
              src="https://mygazon.uz/yii2images/images/image-by-item-and-alias?item=Products1&dirtyAlias=45079467da-1_500x306.jpg"
              alt=""
              className="section-img"
            />
            <a href="#" className="section-link">
              Партерный газон
            </a>
            <p className="section-text">
              Видовой состав: 100% мятлик луговой. Сортовой состав: Jumpstart,
              Fielder, Bluechip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
