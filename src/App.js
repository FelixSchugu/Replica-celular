import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainScreen from "./components/MainScreen";
import NumberScreen from "./components/NumberScreen";

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
          <Route path="/scr3">
            <Screen3 />
          </Route>
        </Switch>

        <Link to="/" id="home-button">
        </Link>
      </div>
    </Router>
  );
}

const Screen3 = () => {
  return (
    <div className="PhoneScreen3">
      <h1>Pantalla 3 </h1>
      <Link to="/">Ir a Home</Link>
    </div>
  );
};

// export default App;
