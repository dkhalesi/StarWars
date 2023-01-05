import React, { useState } from "react";
import "../styles/Home.css";
import { Textbox } from "./Textbox";

export const Home = (props) => {
  return (
    <div className="flex">
      <div className="container">
        <h3 className="texth3">
          In a metaverse far far away... A Star Wars super fan has to prepare
          for their weekly trivia night. Here is the tool that will help you
          unlock supreme Star Wars knowledge that will send your opponents to
          another dimension!
        </h3>
        <Textbox
          characterName={props.characterName}
          setCharacterName={props.setCharacterName}
        />
      </div>
    </div>
  );
};
