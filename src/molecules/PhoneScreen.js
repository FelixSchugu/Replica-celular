import React from "react";

const PhoneScreen = ({
  children,
  bgColor,
  layout,
  flexDisposition,
  gridCol,
  gridRow,
  justify,
  align,
  navBgColor,
  navTextColor,
}) => {
  //Principales
  const ifGgColor = bgColor || "bg-white"; // Background color
  const ifLayout = layout || ""; // Layout a usar como flex o grid

  // Flex
  const ifFlexDisposition = flexDisposition || ""; // Disposición del layout flex: row o columns

  // Grid layout
  const ifGridCol = gridCol || "";
  const ifGridRow = gridRow || "";

  //Alinear conteindo
  const ifJustify = justify || ""; //Alineación horizaontal
  const ifAlign = align || ""; //Alineación vertical

  // navbar
  const ifNavBgColor = navBgColor || "";
  const ifNavTextColor = navTextColor || "";

  return (
    <div
      className={` h-altoPantalla border border-black w-anchoPantalla 
      ${ifGgColor} 
      ${ifLayout} 
      ${ifFlexDisposition}
      ${ifJustify}
      ${ifAlign}
      ${ifGridCol}
      ${ifGridRow}
      `}
    >
      <div
        className={`grid grid-cols-3 items-center text-sm w-full self-start font-bold  
        ${ifNavBgColor} 
        ${ifNavTextColor}`}
      >
        <p className="justify-self-start ml-2  ">Claro 4G</p>
        <p className="justify-self-center">15:56</p>
        <p className="justify-self-end mr-2">Bat.: 80%</p>
      </div>
      {children}
    </div>
  );
};

export default PhoneScreen;
