import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*",
                   "1", "2", "3", "-", "0", ".", "C", "+", "="];

  return (
    <div className="calculator">
      <h2>🔐 Secret Calculator</h2>
      <input type="text" readOnly value={input} />
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
