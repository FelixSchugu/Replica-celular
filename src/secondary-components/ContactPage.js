import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import BackButton from "../atoms/BackButton";
import contactIcon from "../res/icons/Michael.png";

const ContactPage = () => {
  const [contactName, setContactName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const data = useLocation(); // Trae los datos que se pasan en el state del link

  useEffect(() => {
    setContactName(data.state.name);
    setContactNumber(data.state.number);
  }, [data]);

  return (
    <PhoneScreen
      layout="flex"
      flexDisposition="flex-col"
      justify="items-center"
      bgColor="bg-navGray"
    >
      <div className="self-start">
        <BackButton route={"/contacts-screen"} />
      </div>

      <img src={contactIcon} width="100" className="rounded-full" alt="" />
      <h1 className="text-2xl mt-4 mb-2">{`${contactName}`}</h1>

      <div className="flex flex-col self-start items-start bg-bgMain w-full border-t border-borderGray">
        <h1 className="ml-4">Celular</h1>
        <h1 className="ml-4 text-lightBlue"> {`${contactNumber}`} </h1>
      </div>

      <div className="flex flex-col self-start items-start ml-4 mt-4">
        <Link
          to={{
            pathname: "/call-screen",
            state: { name: data.state.name, number: data.state.number },
          }}
          className="focus:outline-none text-lightBlue"
        >
          Llamar
        </Link>
        <Link
          to={{
            pathname: "/chat-screen",
            state: { name: data.state.name, chat: data.state.chat },
          }}
          className="focus:outline-none text-lightBlue"
        >
          Enviar mesnaje
        </Link>
      </div>
    </PhoneScreen>
  );
};

export default ContactPage;
