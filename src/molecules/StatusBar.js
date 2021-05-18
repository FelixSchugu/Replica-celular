import React from "react";
import batteryIcon from "../res/icons/batteryIcon.png";
import wifiBlack from "../res/icons/wifi.svg";
import wifiWhite from "../res/icons/wifiWhite.svg";
import tw from "twin.macro";

const MainDiv = tw.div`grid grid-cols-3 items-center text-sm w-full self-start font-bold`;
const SignalDiv = tw.div`justify-self-start ml-2 text-xs`;
const HourPh = tw.p`justify-self-center text-xs`;
const BatteryDiv = tw.div`justify-self-end flex flex-row items-center`;

const StatusBar = ({ bgColor, textColor }) => {
  const ifNavBgColor = bgColor || "";
  const ifNavTextColor = textColor || "";

  return (
    <MainDiv // Este div contiene la barra de estado del teléfono
      className={` 
        ${ifNavBgColor} 
        ${ifNavTextColor}`}
    >
      <SignalDiv>
        <img src={ifNavTextColor ? wifiWhite : wifiBlack} width="15" alt="" />
      </SignalDiv>
      <HourPh>{"16:00"}</HourPh>
      <BatteryDiv>
        <p className="text-xs mr-1">100%</p>
        <img src={batteryIcon} width="22" className=" mr-2 text-xs" alt="" />
      </BatteryDiv>
    </MainDiv>
  );
};

export default StatusBar;
