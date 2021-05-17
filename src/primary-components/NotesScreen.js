import React from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";

const NotesScreen = () => {
  return (
    <PhoneScreen bgColor="bg-navGray">
      <TitleNav title={"Notes"} hasIconAdd={true} backRoute={"/"} />
    </PhoneScreen>
  );
};

export default NotesScreen;
