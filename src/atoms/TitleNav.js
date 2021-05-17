import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../atoms/BackButton";
import iconAdd from "../res/icons/mas.png";
import tw from "twin.macro";

const MainNav = tw.nav`grid grid-cols-3 h-12  border-b border-borderGray text-xl items-center justify-center`;

const TitleNav = ({
  title, // Es el título que va en el medio del navBar
  hasIconAdd, // Es un booleano que determina si el navbar tiene un icono "mas" o "add"
  backRoute, // Es la ruta que se pasa al boton de atras ("BackButton")
  iconAddRoute, // Es la ruta que se le pasa al ícono add en caso de que este activado
  option, // Option es un boton opcional, cuyo prop se sebe pasar en forma de objeto "{name: , "function"}"
  // Name contiene el texto dentro del boton y función, es la que se va a ejecutar al hacer click.
  // Option se renderiza si se pasa por props.
}) => {
  return (
    <MainNav>
      <BackButton route={backRoute} />
      <div>
        <h1 className="text-base">{title}</h1>
      </div>
      <div className="justify-self-end mr-4">
        {hasIconAdd && (
          <Link to={iconAddRoute}>
            <img src={iconAdd} width="20" alt=""></img>
          </Link>
        )}

        {option && (
          <button
            onClick={option.function}
            className="text-base text-lightBlue"
          >
            {option.name}
          </button>
        )}
      </div>
    </MainNav>
  );
};

export default TitleNav;
