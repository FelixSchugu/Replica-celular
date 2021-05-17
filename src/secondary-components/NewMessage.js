import React, { useEffect, useState } from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";
import json from "../json/contacts.json";
import { Link } from "react-router-dom";

const NewMessage = () => {
  const [contactList, setContactList] = useState([]);

  const contJson = json;

  useEffect(() => {
    setContactList(
      contJson.sort((obj1, obj2) => {
        if (obj1.name > obj2.name) {
          return 1;
        } else if (obj1.name < obj2.name) {
          return -1;
        }
        return 0;
      })
    );
  }, []);

  return (
    <PhoneScreen bgColor="bg-navGray" layout="flex" flexDisposition="flex-col">
      <TitleNav title={"Nuevo mensaje"} backRoute={"/messages-screen"} />
      <div className="overflow-auto bg-bgMain w-full h-full flex flex-col items-start">
        {contactList.map((contact) => (
          <Link
            to={{
              pathname: "/chat-screen",
              state: { name: contact.name, chat: contact.chat },
            }}
            className="border-b border-borderGray w-full text-left pl-2"
          >
            <h1> {contact.name}</h1>
          </Link>
        ))}
      </div>
    </PhoneScreen>
  );
};

export default NewMessage;
