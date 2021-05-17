import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import TitleNav from "../atoms/TitleNav";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";
import contactImg from "../res/icons/Michael.png";
import tw from "twin.macro";

const ContainerDIv = tw.div`flex flex-col bg-bgMain h-full`;
const MessageDiv = tw.div`flex flex-row items-center border-b h-12 border-borderLightGray`;
const MessageElementsDiv = tw.div`ml-2 grid grid-cols-2 w-full justify-items-start text-left`;
const ContactTitle = tw.div`justify-self-start font-semibold text-sm w-40`;
const ContactChatTitle = tw.h1`justify-self-end mr-2 text-xs`;
const ContactLastMsgTitle = tw.h1`justify-self-start col-span-2 text-xs`;

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
      <TitleNav
        title={`Chats`}
        hasIconAdd={true}
        backRoute={"/"}
        iconAddRoute={"/new-message"}
      />
      <ContainerDIv>
        {msgList.map((contact) => (
          <Link
            className="w-full"
            to={{
              pathname: "/chat-screen",
              state: { name: contact.name, chat: contact.chat },
            }}
          >
            <MessageDiv>
              <img
                src={contactImg}
                width="25"
                className="ml-2 rounded-full"
                alt=""
              />
              <MessageElementsDiv>
                <ContactTitle>{contact.name}</ContactTitle>
                <ContactChatTitle>
                  {showLastDate(contact.chat)}
                </ContactChatTitle>
                <ContactLastMsgTitle>
                  {`${
                    contact.chat[contact.chat.length - 1].sender === "client"
                      ? "Tú:"
                      : "" // Muestra "Tú" si fuiste el úñtimo en escribir un mensaje
                  }  ${showLastMessage(contact.chat)}`}
                </ContactLastMsgTitle>
              </MessageElementsDiv>
            </MessageDiv>
          </Link>
        ))}
      </ContainerDIv>
    </PhoneScreen>
  );
};

export default MessagesScreen;
