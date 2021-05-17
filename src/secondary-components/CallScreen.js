import React, { useEffect, useState } from "react";
import PhoneScreen from "../molecules/PhoneScreen";
import contactImage from "../res/icons/Michael.png";
import callIcon from "../res/icons/call.jpg";
import endCallIcon from "../res/icons/endCall.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const CallScreen = () => {
  const [marginBtn, setMarginBtn] = useState("12"); // Margen del boton de cortar llamada para que esté alineado a la derecha
  const [btnAcceptCall, setBtnAcceptCall] = useState(true); // En caso de recibir una llamada este estado renderiza el boton de atender
  const [name, setName] = useState(""); // Nombre que aparecerá en llamada
  const [number, setNumber] = useState(""); // Numerro del que llama o el que esta siendo llamado

  const data = useLocation();

  useEffect(() => {
    // Los "?" evitan que exista "undefined error" en caso de no se pasen datos por el useLocation cuando la llamada viene de otro usuario
    if (data?.state?.name && data?.state?.number) {
      // Codigo para cuando el usuario llama desde su celular
      // Los datos se traen desde la pagina de contacto "ContactPage.js" usando "useLocation"
      // (se usa el prop state del componente "Link" para pasar los datos
      // (<Link to:{pathname: "ruta de destino", state: "Elementos que se pasan a la ruta de destino"} />))
      // En el componente de destino se usa el hook "useLocation" para extraer los datos pasados por state
      setName(data.state.name);
      setNumber(data.state.number);
      setBtnAcceptCall(false);
      setMarginBtn("0");
    } else {
      //Si el usuario recibe una llamada, ingresar codigo aquí y asignar los estados correspondientes
    }
  }, [data]);

  const hideBtnAcceptCall = () => {
    setBtnAcceptCall(false);
    setMarginBtn("0");
  };

  return (
    <PhoneScreen
      layout="flex"
      flexDisposition="flex-col"
      justify="items-center"
      bgColor="bg-mediumGray"
      navTextColor="text-bgMain"
    >
      <img
        src={contactImage}
        width="120"
        className="rounded-full mt-4"
        alt=""
      />
      <h1 className="text-bgMain text-xl mt-4"> {name}</h1>
      <h1 className="text-bgMain text-2xl mt-4">{number}</h1>

      <div className="flex flex-row mt-12">
        {btnAcceptCall && (
          <button className="focus:outline-none" onClick={hideBtnAcceptCall}>
            <img
              src={callIcon}
              width="50"
              className="shadow-md rounded-full"
              alt=""
            ></img>
          </button>
        )}

        <Link to="/">
          <img
            src={endCallIcon}
            width="50"
            className={`ml-${marginBtn} shadow-md rounded-full`}
            alt=""
          ></img>
        </Link>
      </div>
    </PhoneScreen>
  );
};

export default CallScreen;
