import React, { useEffect, useState } from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";
import { useLocation } from "react-router-dom";

const ChatScreen = () => {
  const [chats, setChats] = useState([]);
  const [name, setName] = useState("");

  const data = useLocation();

  useEffect(() => {
    setChats(data.state.chat);
    setName(data.state.name);
  }, [data]);

  return (
    <PhoneScreen layout="flex" flexDisposition="flex-col">
      <TitleNav title={name} />

      <div className="flex flex-col border w-full border-black h-full overflow-auto">
        {chats.map((message) => (
          <div
            className={`border flex flex-col rounded-md ${
              message.sender === "client" ? "self-end" : "self-start"
            } text-left border-black m-2 min-w-0 max-w-maxMsg p-1`}
          >
            <h1 className="border border-black break-words">
              {message.text}
            </h1>
            <h1 className="border border-black h-6 text-xs text-right">{`${new Date(
              message.date
            ).getHours()}:${new Date(message.date).getMinutes()}`}</h1>
          </div>
        ))}
      </div>

      <div className="m-2">
        <input placeholder="Escribe un mensaje" ></input>
        <button>Enviar</button>
      </div>
    </PhoneScreen>
  );
};

export default ChatScreen;
