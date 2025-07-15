import { useState } from "react";
import FakeNote from "./FakeNote";
import Calculator from "./Calculator";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = (password) => {
    if (password === "1234") setUnlocked(true);
    else alert("Wrong password!");
  };

  return (
    <div className="app">
      {unlocked ? <Calculator /> : <FakeNote onUnlock={handleUnlock} />}
    </div>
  );
}

export default App;
