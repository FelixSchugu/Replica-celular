import { Link } from "react-router-dom";
import contacts from "../res/icons/contacts.svg";
import messages from "../res/icons/messages.png";
import notes from "../res/icons/notes.svg";
import phone from "../res/icons/Phone.ico";
import PhoneScreen from "../molecules/PhoneScreen";
import tw from "twin.macro"

const IconsDiv = tw.div`self-end flex flex-row justify-center`


const MainScreen = () => {
  return (
    <PhoneScreen
      bgColor="bg-wallpaper"
      layout="grid"
      gridRow="grid-rows-2"
      wallpaper={true}
      navTextColor="text-bgMain"
    >
      <IconsDiv>
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
      </IconsDiv>
    </PhoneScreen>
  );
};

export default MainScreen;
