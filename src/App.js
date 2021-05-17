import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainScreen from "./primary-components/MainScreen";
import NumberScreen from "./primary-components/NumberScreen";
import MessagesScreen from "./primary-components/MessagesScreen";
import ContactsScreen from "./primary-components/ContactsScreen";
import ContactPage from "./secondary-components/ContactPage";
import ChatScreen from "./secondary-components/ChatScreen";
import CallScreen from "./secondary-components/CallScreen";
import NewContact from "./secondary-components/NewContact";
import NewMessage from "./secondary-components/NewMessage";
import NotesScreen from "./primary-components/NotesScreen";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route path="/number-screen" component={NumberScreen} />
          <Route path="/messages-screen" component={MessagesScreen} />
          <Route path="/contacts-screen" component={ContactsScreen} />
          <Route path="/contact-page" component={ContactPage}/>
          <Route path="/chat-screen" component={ChatScreen}/>
          <Route path="/call-screen" component={CallScreen} />
          <Route path="/new-contact" component={NewContact} />
          <Route path="/new-message" component={NewMessage}/>
          <Route path="/notes-screen" component={NotesScreen} />
        </Switch>

        <Link to="/" id="home-button"></Link>
      </div>
    </Router>
  );
}

// export default App;
