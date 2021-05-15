import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import NumberScreen from "./components/NumberScreen";
import MessagesScreen from "./components/MessagesScreen";
import ContactsScreen from "./components/ContactsScreen";
import ContactPage from "./components/ContactPage";
import ChatScreen from "./components/ChatScreen";
import CallScreen from "./components/CallScreen";

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
        </Switch>

        <Link to="/" id="home-button"></Link>
      </div>
    </Router>
  );
}

// export default App;
