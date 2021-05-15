import { useState } from "react";
import callIcon from "../res/icons/accept.png";
import PhoneScreen from "../molecules/PhoneScreen";
import retourIcon from "../res/icons/retour.png";
import "../App.css";

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
    <PhoneScreen bgColor="bg-gray-200" layout="flex" flexDisposition="flex-col">
      <div className="flex flex-row h-10 w-full mt mb-2">
        <input
          placeholder="Ingrese numero"
          className="p-2 ml-2 focus:outline-none bg-gray-200 border-b border-black text-xl w-3/4"
          
          defaultValue={input}
        ></input>
        <button className="focus:outline-none" onClick={() => del()}>
          <img
            src={retourIcon}
            alt=""
            className="w-5 h-5 self-center ml-4 "
          ></img>
        </button>
      </div>

      <div className="grid grid-rows-4 grid-cols-3 gap-4 p-2">
        {numbers.map((number) => (
          <button
            key={number.num}
            className="bg-blue-600 rounded-full h-16 w-16 shadow-lg border-2 focus:outline-none  border-blue-100"
            onClick={(e) => write(e.currentTarget.value)}
            value={number.num}
          >
            <h1 className="text-2xl text-white font-bold">{number.num}</h1>
            <h4 className="text-sm text-white font-bold mb-1">{number.char}</h4>
          </button>
        ))}
      </div>

      <button className="self-center focus:outline-none rounded-full border-2 ">
        <img
          src={callIcon}
          width="50"
          alt=""
          className="shadow-lg rounded-full border-2 border-green-300"
        />
      </button>
    </PhoneScreen>
  );
};

export default NumberScreen;
