import React from "react";
import "./Contact.css";
import Gazon11 from "../../assets/gazon11.jpg";
import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
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
    <div className="contact">
      <div className="contact-list">
        <img src={Gazon11} alt="" className="contact-img" />
        <div className="contact-item">
          <h4 className="contact-subname">
            Наши операторы ответят Вам в ближайшее время.
          </h4>
          <h2 className="contact-name">Оставьте свой номер телефона</h2>
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
            <button
              type="submit"
              onClick={() => sendMessage()}
              className="header-button">
              Отправка
            </button>
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446.06584403175884!2d69.19065812739957!3d41.22697082423348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae63232b5d086b%3A0xef2f020f97bf459b!2sFlowers%20Garden%20Park!5e0!3m2!1sen!2s!4v1694369052251!5m2!1sen!2s"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Contact;
