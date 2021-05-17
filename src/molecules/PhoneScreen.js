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
  wallpaper,
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
  const ifNavBgColor = navBgColor || ""; // Es el color de la barra de estado
  const ifNavTextColor = navTextColor || ""; // Es el color del texto de la barra de estado del teléfono

  

  return (
    <div // Este div contiene todo lo que va adentro de la pantalla del celular despues de la barra de estado 
      className={` h-altoPantalla border border-black w-anchoPantalla 
      ${ifGgColor} 
      ${ifLayout} 
      ${ifFlexDisposition}
      ${ifJustify}
      ${ifAlign}
      ${ifGridCol}
      ${ifGridRow}
      `}
      id={wallpaper ? "wallpaper-screen" : ""}
    >
      <div // Este div contiene la barra de estado del teléfono 
        className={`grid grid-cols-3 items-center text-sm w-full self-start font-bold  
        ${ifNavBgColor} 
        ${ifNavTextColor}`}
      >
        <p className="justify-self-start ml-2 text-xs">Claro 4G</p>
        <p className="justify-self-center text-xs">{"16:00"}</p>
        <p className="justify-self-end mr-2 text-xs">Bat.: 80%</p>
      </div>
      {children}
    </div>
  );
};

export default PhoneScreen;
