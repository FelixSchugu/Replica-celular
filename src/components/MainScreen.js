import { Link } from "react-router-dom";
import contacts from "../res/icons/contacts.png";
import messages from "../res/icons/messages.png";
import notes from "../res/icons/notes.png";
import phone from "../res/icons/phone.png";

const MainScreen = () => {
  return (
    <div className="PhoneScreen" style={styles.screen}>
      {/* <h1>Pantalla 1</h1> */}
      <div style={styles.iconsDiv}>
        <Link to="/number-screen" style={{margin: 5}}>
          <img src={phone} width="50" height="50" alt=""/>
        </Link>

        <Link to="/number-screen" style={{margin: 5}}>
          <img src={contacts} width="50" height="50" alt=""/>
        </Link>

        <Link to="/number-screen" style={{margin: 5}}>
          <img src={messages} width="50" height="50" alt=""/>
        </Link>

        <Link to="/number-screen" style={{margin: 5}}>
          <img src={notes} width="50" height="50" alt=""/>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  screen: {
    display: "flex",
    color: "black",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  iconsDiv: {
    display: "flex"
  },
};

export default MainScreen;
