import "./App.css";
import { Table } from "./components/Table";
import { TextBox } from "./components/Textbox";
import { useState } from "react";

function App() {
  const [characterName, setCharacterName] = useState("");
  return (
    <div className="App">
      {characterName === "" ? (
        <TextBox setCharacter={setCharacterName} />
      ) : (
        <Table character={characterName} setCharacter={setCharacterName} />
      )}
    </div>
  );
}

export default App;
