import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";
import TitleNav from "../atoms/TitleNav";
import iconAdd from "../res/icons/mas.png";
import contactIcon from "../res/icons/Michael.png";

const ContactsScreen = () => {
  const [contacts, setContacts] = useState([]);
  const contJson = json;

  useEffect(() => {
    setContacts(
      contJson.sort((obj1, obj2) => {
        // Se ordenan los contactos alfabéticamente
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
      <TitleNav
        title={`Contactos`}
        hasIconAdd={true}
        backRoute={"/"}
        iconAddRoute={"/new-contact"}
      />
      <div className="overflow-auto bg-bgMain w-full h-full">
        {contacts.map((contact, idx) => (
          <Link
            to={{
              pathname: "/contact-page",
              state: {
                number: contact.phoneNumber,
                name: contact.name,
                chat: contact.chat,
              }, // Se pasa como estado para la pagina de contactos
            }}
          >
            <div className="flex flex-row items-center border-b border-borderLightGray bg-indigo-100 m-2 text-left h-8 shadow-sm p-2">
              <img
                src={contactIcon}
                width="25"
                className="rounded-full"
                alt=""
              />
              <h1 className="ml-2 text-sm">{contact.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </PhoneScreen>
  );
};

export default ContactsScreen;
