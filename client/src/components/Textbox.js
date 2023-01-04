import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/search-icon.svg";
import "../styles/Textbox.css";

export const Textbox = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (inputValue === "") {
      alert("You must enter a value before submitting.");
      return;
    }
    event.preventDefault();
    props.setCharacterName(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="textbox"
        placeholder="Enter Character Name"
      />
      <button type="submit" className="submit">
        <SearchIcon />
      </button>
    </form>
  );
};
