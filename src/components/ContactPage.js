import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

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
      bgColor="bg-gray-300"
    >
      <Link to="/contacts-screen" className="self-start ml-2 ">
        <h1 className="self-start ml-2 focus:outline-none">{`< Atras`}</h1>
      </Link>

      <div className="flex items-center justify-center text-white bg-blue-600 w-28 h-28 rounded-full mt-5">
        <h1 className="text-5xl font-semibold">{`${contactName[0]} ${
          contactName[contactName.indexOf(" ") + 1]
        }`}</h1>
      </div>
      <h1 className="text-2xl mt-4">{`${contactName}`}</h1>
      <h1 className="text-2xl mt-2">{`${contactNumber}`}</h1>

      <div className="flex flex-col self-start items-start ml-4 mt-4">
        <button className="focus:outline-none">Llamar</button>
        <Link
          to={{
            pathname: "/chat-screen",
            state: { name: data.state.name, chat: data.state.chat },
          }}
          className="focus:outline-none"
        >
          Enviar mesnaje{" "}
        </Link>
      </div>
    </PhoneScreen>
  );
};

export default ContactPage;
