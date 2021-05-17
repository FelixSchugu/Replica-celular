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
          <Route exact path="/">
            <MainScreen />
          </Route>
          <Route path="/number-screen">
            <NumberScreen />
          </Route>
          <Route path="/messages-screen">
            <MessagesScreen />
          </Route>
          <Route path="/contacts-screen">
            <ContactsScreen />
          </Route>
          <Route path="/contact-page">
            <ContactPage />
          </Route>

          <Route path="/chat-screen">
            <ChatScreen />
          </Route>

          <Route path="/call-screen">
            <CallScreen />
          </Route>

          <Route path="/new-contact">
            <NewContact />
          </Route>

          <Route path="/new-message">
            <NewMessage />
          </Route>

          <Route path="/notes-screen">
            <NotesScreen />
          </Route>
        </Switch>

        <Link to="/" id="home-button"></Link>
      </div>
    </Router>
  );
}

// export default App;
