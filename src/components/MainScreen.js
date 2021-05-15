import { Link } from "react-router-dom";
import contacts from "../res/icons/contacts.png";
import messages from "../res/icons/messages.png";
import notes from "../res/icons/notes.png";
import phone from "../res/icons/phone.png";
import PhoneScreen from "../molecules/PhoneScreen";

const MainScreen = () => {
  return (
    <PhoneScreen
      bgColor="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
      layout="grid"
      gridRow="grid-rows-2"
    >
      <div>Lorem ipsun</div>
      <div className="self-end flex flex-row justify-center">
        <Link to="/number-screen" style={{ margin: 5 }}>
          <img src={phone} width="50" height="50" alt="" />
        </Link>

        <Link to="/contacts-screen" style={{ margin: 5 }}>
          <img src={contacts} width="50" height="50" alt="" />
        </Link>

        <Link to="/messages-screen" style={{ margin: 5 }}>
          <img src={messages} width="50" height="50" alt="" />
        </Link>

        <Link to="/notes" style={{ margin: 5 }}>
          <img src={notes} width="50" height="50" alt="" />
        </Link>
      </div>
    </PhoneScreen>
  );
};

export default MainScreen;
