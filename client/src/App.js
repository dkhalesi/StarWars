import "./styles/App.css";
import { Table } from "./components/Table";
import { Home } from "./components/Home";
import { useState } from "react";
import { ButtonHome } from "./components/ButtonHome";
// import { Home } from "./components/Home";

function App() {
  const [characterName, setCharacterName] = useState("");
  return (
    <div className="App">
      {characterName === "" ? (
        <Home
          characterName={characterName}
          setCharacterName={setCharacterName}
        />
      ) : (
        <div>
          <ButtonHome setCharacterName={setCharacterName} />
          <Table
            characterName={characterName}
            setCharacterName={setCharacterName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
