import React from "react";
import { auth } from "../firebase";
import "./Message.css";

const style = {
  message: `flex items-center shadow-xl m-4 ]`,
  name: `mt-[-4.2rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-center float-right`,
  received: `bg-[#e5e5ea] text-black float-left `,

};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`} id="message">
        <div className="name-text">
          <p className={style.name} id="name">
            {message.name}
          </p>
          <p className="text">{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
