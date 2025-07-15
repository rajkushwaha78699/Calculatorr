import { useState } from "react";

function FakeNote({ onUnlock }) {
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onUnlock(pass);
  };

  return (
    <div className="fake-note">
      <h2>📝 Notes</h2>
      <p>This is your daily note-taking app. Jot down your thoughts...</p>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password to unlock"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button type="submit">Unlock</button>
      </form>
    </div>
  );
}

export default FakeNote;
