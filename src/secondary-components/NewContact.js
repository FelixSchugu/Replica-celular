import React, { useState } from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";

const NewContact = () => {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const validate = () => {

  }
  // El prop "option" del "TitleNav" un boton y acpeta un objeto con dos variables: "name" y "function" 
  // En function se pasa la función que se va a ejecutar cuando se presione el boton.

  return (
    <PhoneScreen layout="flex" flexDisposition="flex-col" bgColor="bg-navGray"> 
      <TitleNav title="Nuevo contacto" backRoute="/contacts-screen" option={{name: "Listo"}}/> 
      <div className="flex flex-col pt-2">
        <h1 className="ml-1 p-1 text-left border-b border-borderGray w-full">
          Ingrese nombre
        </h1>
        <input
          placeholder="Nombre"
          required
          className="bg-bgMain pl-2 w-full focus:outline-none"
        ></input>

        <h1 className="ml-1 p-1 border-b text-left border-borderGray w-full ">
          Ingrese Apellido
        </h1>
        <input
          placeholder="Apellido"
          className="bg-bgMain pl-2 w-full focus:outline-none"
        ></input>
 
        <h1 className="ml-1 p-1 border-b text-left border-borderGray w-full ">
          Ingrese número de celular
        </h1>
        <input
          placeholder="Celular"
          type="number"
          className="bg-bgMain pl-2 w-full focus:outline-none"
        ></input>
      </div>
    </PhoneScreen>
  );
};

export default NewContact;
