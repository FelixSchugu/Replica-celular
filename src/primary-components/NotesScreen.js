import React from "react";
import TitleNav from "../atoms/TitleNav";
import PhoneScreen from "../molecules/PhoneScreen";

const NotesScreen = () => {
  return (
    <PhoneScreen bgColor="bg-navGray">
      <TitleNav
        title={"Notas"}
        hasIconAdd={true}
        backRoute={"/"}
        iconAddRoute={"/new-note"}
      />
    </PhoneScreen>
  );
};

export default NotesScreen;
