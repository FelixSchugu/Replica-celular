import { useState } from "react";
import { Link } from "react-router-dom";
import callIcon from "../res/icons/accept.png";
import "../App.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];

const NumberScreen = () => {
  const [input, setIntput] = useState("");

  const write = (d) => {
    setIntput(input + d);
  };

  return (
    <div className="PhoneScreen" style={styles.screen}>
      <h1>Ingrese número </h1>
      <input
        placeholder="Numero de teléfono"
        id="input-phone-number"
        value={input}
      ></input>

      <div id="phone-numbers-container">
        {numbers.map((d) => (
          <div id="number-key" value={d} onClick={() => write(d)}>
            <h4>{d}</h4>
          </div>
        ))}
      </div>

      <div>
        <div>
          <img src={callIcon} width="45" style={{paddin:"4"}} alt=""></img>{" "}
        </div>
      </div>
    </div>
  );
};

const styles = {
  screen: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default NumberScreen;
