import React, { useState } from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";
import tw from "twin.macro";

const Container = tw.div`flex flex-col pt-2`;
const TitleLabel = tw.h1`ml-1 p-1 text-left border-b border-borderGray w-full`;
const CustomInput = tw.input`bg-bgMain pl-2 w-full focus:outline-none`;

const NewContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const validate = () => {};
  // El prop "option" del "TitleNav" es un boton y acpeta un objeto con dos variables: "name" y "function"
  // En function se pasa la función que se va a ejecutar cuando se presione el boton.

  return (
    <PhoneScreen layout="flex" flexDisposition="flex-col" bgColor="bg-navGray">
      <TitleNav
        title="Nuevo contacto"
        backRoute="/contacts-screen"
        option={{ name: "Listo" }}
      />
      <Container>
        <TitleLabel>Ingrese nombre</TitleLabel>
        <CustomInput placeholder="Nombre" required></CustomInput>

        <TitleLabel>Ingrese Apellido</TitleLabel>
        <CustomInput placeholder="Apellido"></CustomInput>

        <TitleLabel>Ingrese número de celular</TitleLabel>
        <CustomInput placeholder="Celular" type="number"></CustomInput>
      </Container>
    </PhoneScreen>
  );
};

export default NewContact;
