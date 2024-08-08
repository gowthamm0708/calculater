import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function calculate() {
    setResult(eval(input));
  }

  function clear() {
    setInput("");
    setResult("");
  }

  function backspace() {
    setInput(input.slice(0, -1));
  }

  return (
    <div>
      <input type="text" value={result || input} onChange={handleInput} />
      <button onClick={calculate}>=</button>
      <button onClick={clear}>C</button>
      <button onClick={backspace}>←</button>
      <br />

      <br />
      <button onClick={() => setInput(input + "**")}>^</button>
      <button onClick={() => setInput(input + "(")}>(</button>
      <button onClick={() => setInput(input + ")")}>)</button>
      <br />
      <button onClick={() => setInput(input + "7")}>7</button>
      <button onClick={() => setInput(input + "8")}>8</button>
      <button onClick={() => setInput(input + "9")}>9</button>
      <button onClick={() => setInput(input + "*")}>*</button>
      <br />
      <button onClick={() => setInput(input + "4")}>4</button>
      <button onClick={() => setInput(input + "5")}>5</button>
      <button onClick={() => setInput(input + "6")}>6</button>
      <button onClick={() => setInput(input + "-")}>-</button>
      <br />
      <button onClick={() => setInput(input + "1")}>1</button>
      <button onClick={() => setInput(input + "2")}>2</button>
      <button onClick={() => setInput(input + "3")}>3</button>
      <button onClick={() => setInput(input + "+")}>+</button>
      <br />
      <button onClick={() => setInput(input + "0")}>0</button>
      <button onClick={() => setInput(input + ".")}>.</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => setInput(input + "/")}>/</button>
    </div>
  );
}

export default Calculator;
