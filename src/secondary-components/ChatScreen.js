import React, { useEffect, useState } from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";
import { useLocation } from "react-router-dom";
import sendIcon from "../res/icons/sendMessage.png"

const ChatScreen = () => {
  const [chats, setChats] = useState([]);
  const [name, setName] = useState("");

  const data = useLocation();

  useEffect(() => {
    setChats(data.state.chat);
    setName(data.state.name);
  }, [data]);

  return (
    <PhoneScreen layout="flex" flexDisposition="flex-col" bgColor="bg-navGray" >
      <TitleNav title={name} backRoute={"/messages-screen"} />

      <div className="flex flex-col w-full bg-bgMainWsp h-full overflow-auto  border-b border-borderGray ">
        {chats.map((message) => (
          <div
            className={` flex flex-col rounded-md ${
              message.sender === "client" ? "self-end bg-msgWspGreen" : "self-start bg-msgWspWhite"
            } text-left m-2 min-w-0 max-w-maxMsg shadow-md p-2`}
          >
            <h1 className="font-bold text-mediumGray break-words">
              {message.text}
            </h1>
            <h1 className="h-4 text-xs text-right">{`${new Date(
              message.date
            ).getHours()}:${new Date(message.date).getMinutes()}`}</h1>
          </div>
        ))}
      </div>

      <div className="m-2 bg-navGray flex flex-row items-center ">
        <input placeholder="Escribe un mensaje" className="border border-mediumGray focus:outline-none rounded-xl pl-2" ></input>
        <button className="ml-4 focus:outline-none" ><img src={sendIcon} width="25" alt=""/></button>
      </div>
    </PhoneScreen>
  );
};

export default ChatScreen;
