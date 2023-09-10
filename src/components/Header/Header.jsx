import React from "react";
import "./Header.css";
import { useState } from "react";
import { toast } from "react-toastify";

function Header() {
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [, setInvalidName] = useState(false);
  const [, setInvalidNumber] = useState(false);

  function changeNumber(item) {
    setNumberValue(item);
    setInvalidNumber(false);
  }

  function changeName(item) {
    setNameValue(item);
    setInvalidName(false);
  }
  let bot = {
    TOKEN: "6567609620:AAHWghf_07FQxHs1wI220pI6IM71TgBmEVQ",
    chatID: "-1001849406680",
    message: `
          Assalomu alaykum sizga yangi xabar!%0A
          %0AIsmi 👤: ${nameValue}; 
          %0ATelefon raqami ☎: ${numberValue};`,
  };

  function sendMessage() {
    if (nameValue === "") {
      setInvalidName(true);
    } else if (numberValue === "") {
      setInvalidNumber(true);
    } else {
      fetch(
        `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
        {
          method: "GET",
        }
      ).then(
        (success) => {
          console.log("send message");
          toast.success("Sizning xabaringiz muvaffaqiyatli yuborildi!");
        },
        (error) => {
          console.log(error);
        }
      );

      setNameValue("");
      setNumberValue("");
    }
  }
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
              value={nameValue}
              onChange={(e) => changeName(e.target.value)}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="form-input"
            />
            <input
              value={numberValue}
              onChange={(e) => changeNumber(e.target.value)}
              type="number"
              name="tel"
              placeholder="Your Number"
              required
              className="form-input"
            />
          </form>
          <button
            type="submit"
            onClick={() => sendMessage()}
            className="header-button">
            Отправка
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
