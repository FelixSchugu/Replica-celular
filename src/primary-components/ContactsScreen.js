import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import { Link } from "react-router-dom";
import json from "../json/contacts.json";
import TitleNav from "../atoms/TitleNav";
import contactIcon from "../res/icons/Michael.png";
import tw from "twin.macro";

const MainDiv = tw.div`overflow-auto bg-bgMain w-full h-full`;
const ContactDiv = tw.div`flex flex-row items-center border-b border-borderLightGray m-2 text-left h-8 shadow-sm p-2`;
const ContactTitle = tw.h1`ml-2 text-sm`;

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
      <MainDiv className="Contact-div">
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
            <ContactDiv>
              <img
                src={contactIcon}
                width="25"
                className="rounded-full"
                alt=""
              />
              <ContactTitle>{contact.name}</ContactTitle>
            </ContactDiv>
          </Link>
        ))}
      </MainDiv>
    </PhoneScreen>
  );
};

export default ContactsScreen;
