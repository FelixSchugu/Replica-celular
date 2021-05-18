import React from "react";
import StatusBar from "../molecules/StatusBar";
import tw from "twin.macro";

const DefaultDiv = tw.div`h-altoPantalla border border-black w-anchoPantalla`;

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
    <DefaultDiv // Este div contiene todo lo que va adentro de la pantalla del celular despues de la barra de estado
      className={`
      ${ifGgColor} 
      ${ifLayout} 
      ${ifFlexDisposition}
      ${ifJustify}
      ${ifAlign}
      ${ifGridCol}
      ${ifGridRow}
      `}
      id={wallpaper ? "wallpaper-screen" : ""} // pone la imagen de wallpaper si el prop wallaper es true (pantalla principal)
    >
      <StatusBar bgColor={ifNavBgColor} textColor={ifNavTextColor} />
      {children}
    </DefaultDiv>
  );
};

export default PhoneScreen;
