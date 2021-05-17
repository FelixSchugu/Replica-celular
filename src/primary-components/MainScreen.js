import { Link } from "react-router-dom";
import contacts from "../res/icons/contacts.svg";
import messages from "../res/icons/Messages.png";
import notes from "../res/icons/notes.svg";
import phone from "../res/icons/Phone.ico";
import PhoneScreen from "../molecules/PhoneScreen";

const MainScreen = () => {
  return (
    <PhoneScreen
      bgColor="bg-wallpaper"
      layout="grid"
      gridRow="grid-rows-2"
      wallpaper={true}
      navTextColor="text-bgMain"
    >
      <div className="self-end flex flex-row justify-center">
        <Link to="/number-screen" style={{ margin: 5 }}>
          <img src={phone} width="45" height="45" alt="" />
        </Link>

        <Link to="/contacts-screen" style={{ margin: 5 }}>
          <img src={contacts} width="45" height="45" alt="" />
        </Link>

        <Link to="/messages-screen" style={{ margin: 5 }}>
          <img src={messages} width="45" height="45" alt="" />
        </Link>

        <Link to="/notes-screen" style={{ margin: 5 }}>
          <img src={notes} width="45" height="45" alt="" />
        </Link>
      </div>
    </PhoneScreen>
  );
};

export default MainScreen;
