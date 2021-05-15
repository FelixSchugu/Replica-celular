import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import TitleNav from "../atoms/TitleNav";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";

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
    <PhoneScreen layout="flex" flexDisposition="flex-col" bgColor="bg-gray-300">
      <TitleNav title={`Mensajes`} />

      <div className="flex flex-col">
        {msgList.map((contact) => (
          <Link
            className="w-full"
            to={{
              pathname: "/chat-screen",
              state: { name: contact.name, chat: contact.chat },
            }}
          >
            <div className="flex flex-row items-center border h-12 border-black m-2">
              <div className="w-10 h-10 ml-2 bg-blue-900 "></div>
              <div className="ml-2 grid grid-cols-2 w-full justify-items-start text-left">
                <h1 className=" justify-self-start">{contact.name}</h1>
                <h1 className=" justify-self-end pr-1">
                  {showLastDate(contact.chat)}{" "}
                </h1>
                <h1 className=" justify-self-start col-span-2">
                  {showLastMessage(contact.chat)}
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
