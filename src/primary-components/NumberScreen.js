import { useState } from "react";
import callIcon from "../res/icons/accept.png";
import PhoneScreen from "../molecules/PhoneScreen";
import retourIcon from "../res/icons/retour.png";
import { Link } from "react-router-dom";
import "../App.css";
import tw from "twin.macro";

const MainDiv = tw.div`flex flex-row h-10 w-full mb-2`;
const NumInput = tw.input`p-2 ml-2 focus:outline-none  border-b border-black text-xl w-3/4`;
const NumContainer = tw.div`grid grid-rows-4 grid-cols-3 gap-4 p-2`;
const ButtonNum = tw.button`bg-borderGray rounded-full h-16 w-16 shadow-md focus:outline-none`;
const ButtonNumTitle = tw.h1`text-2xl font-bold`;
const ButtonCharTitle = tw.h4`text-sm font-bold mb-1`;
const IconDelete = tw.img`w-5 h-5 self-center ml-4`;
const CallIconImg = tw.img`shadow-lg rounded-full`;

const numbers = [
  { num: 1, char: "Voice" },
  { num: 2, char: "ABC" },
  { num: 3, char: "DEF" },
  { num: 4, char: "GHI" },
  { num: 5, char: "JKL" },
  { num: 6, char: "MNO" },
  { num: 7, char: "PQRS" },
  { num: 8, char: "TUV" },
  { num: 9, char: "WXYZ" },
  { num: "*", char: "" },
  { num: 0, char: "+" },
  { num: "#", char: "" },
];

const NumberScreen = () => {
  const [input, setIntput] = useState("");

  const write = (d) => {
    setIntput(input + d);
  };

  const del = () => {
    if (input.length > 0) {
      setIntput(input.slice(0, -1));
    }
  };

  return (
    <PhoneScreen bgColor="bg-bgMain" layout="flex" flexDisposition="flex-col">
      <MainDiv>
        <NumInput placeholder="Ingrese numero" defaultValue={input}></NumInput>
        <button className="focus:outline-none" onClick={() => del()}>
          <IconDelete src={retourIcon} alt=""></IconDelete>
        </button>
      </MainDiv>

      <NumContainer>
        {numbers.map((number) => (
          <ButtonNum
            key={number.num}
            onClick={(e) => write(e.currentTarget.value)}
            value={number.num}
          >
            <ButtonNumTitle>{number.num}</ButtonNumTitle>
            <ButtonCharTitle>{number.char}</ButtonCharTitle>
          </ButtonNum>
        ))}
      </NumContainer>

      <Link
        className="self-center focus:outline-none rounded-full "
        to={{
          pathname: `${input.length > 0 ? "/call-screen" : ""}`,
          state: { name: " ", number: input },
        }}
      >
        <CallIconImg src={callIcon} width="50" alt="" />
      </Link>
    </PhoneScreen>
  );
};

export default NumberScreen;
