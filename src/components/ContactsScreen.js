import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";
import TitleNav from "../atoms/TitleNav";

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
    <PhoneScreen bgColor="bg-gray-300" layout="flex" flexDisposition="flex-col">
      <TitleNav title={`Contactos`} />

      <div className="overflow-auto w-full h-full">
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
            <div className="flex flex-row items-center bg-indigo-100 m-2 text-left h-1/7 shadow-sm p-2">
              <div className=" flex w-9 h-9 bg-blue-600 p-2 rounded-full justify-center items-center text-white">
                <h1 className="text-center">{contact.name[0]}</h1>
              </div>
              <h1 className="ml-4">{contact.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </PhoneScreen>
  );
};

export default ContactsScreen;
