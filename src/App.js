import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(100);

  return (
    <>
      <div>
        <h1 className="d-flex align-item-center justify-content-center">
          This is my Counter Clock
        </h1>
        <div>{counter}</div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
