import React from "react";
import backIcon from "../res/icons/back.svg";
import { Link } from "react-router-dom";

// Es el botón de atras del navBar, acepta un parametro o prop "route"
// "route" es la ruta a donde hay que dirigirse al presionar el boton

const BackButton = ({route}) => {
  return (
    <Link to={route}>
      <div className="ml-2 justify-self-start flex flex-row">
        <img src={backIcon} width="15" alt=""/>
        <h1 className="text-sm text-lightBlue">Atras</h1>
      </div>
    </Link>
  );
};

export default BackButton;
