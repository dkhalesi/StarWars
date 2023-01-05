import "./styles/App.css";
import { Table } from "./components/Table";
import { Home } from "./components/Home";
import { useState } from "react";
import { Title } from "./components/Title";
import { Textbox } from "./components/Textbox";
function App() {
  const [characterName, setCharacterName] = useState("");
  return (
    <div className="App">
      <Title setCharacterName={setCharacterName} />
      {characterName === "" ? (
        <Home
          characterName={characterName}
          setCharacterName={setCharacterName}
        />
      ) : (
        <>
          <Textbox
            characterName={characterName}
            setCharacterName={setCharacterName}
          />
          <Table
            characterName={characterName}
            setCharacterName={setCharacterName}
          />
        </>
      )}
    </div>
  );
}

export default App;
