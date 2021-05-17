import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import TitleNav from "../atoms/TitleNav";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";
import contactImg from "../res/icons/Michael.png";

const MessagesScreen = () => {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    let filteredMgs = json.filter((contact) => contact.chat.length > 0); // Encuentra si hay mensajes relacionados con algun contacto
    setMsgList(filteredMgs);
  }, []);

  //Función que muestra el último mensaje para que aparezca en la miniatura
  const showLastMessage = (chat) => {
    let len = chat.length;
    let text = chat[len - 1].text;

    if (text.length > 18) {
      return text.slice(0, 18) + "...";
    }
    return text;
  };

  const showLastDate = (chat) => {
    let len = chat.length;
    let date = new Date(chat[len - 1].date);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <PhoneScreen layout="flex" flexDisposition="flex-col" bgColor="bg-navGray">
      <TitleNav title={`Chats`} hasIconAdd={true} backRoute={"/"} iconAddRoute={"/new-message"} />
      <div className="flex flex-col bg-bgMain h-full">
        {msgList.map((contact) => (
          <Link
            className="w-full"
            to={{
              pathname: "/chat-screen",
              state: { name: contact.name, chat: contact.chat },
            }}
          >
            <div className="flex flex-row items-center border-b h-12 border-borderLightGray">
              <img
                src={contactImg}
                width="25"
                className="ml-2 rounded-full"
                alt=""
              />
              <div className="ml-2 grid grid-cols-2 w-full justify-items-start text-left">
                <h1 className=" justify-self-start font-semibold text-sm w-40">
                  {contact.name}
                </h1>
                <h1 className=" justify-self-end mr-2 text-xs">
                  {showLastDate(contact.chat)}
                </h1>
                <h1 className=" justify-self-start col-span-2 text-xs">
                  {`${
                    contact.chat[contact.chat.length - 1].sender === "client"
                      ? "Tú:"
                      : ""    // Muestra "Tú" si fuiste el úñtimo en escribir un mensaje 
                  }  ${showLastMessage(contact.chat)}`}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PhoneScreen>
  );
};

export default MessagesScreen;
