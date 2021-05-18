import React from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";

function NewNote() {
  return (
    <PhoneScreen bgColor="bg-navGray">
      <TitleNav title={"Nueva nota "} backRoute={"/notes-screen"}/>
    </PhoneScreen>
  );
}

export default NewNote;
