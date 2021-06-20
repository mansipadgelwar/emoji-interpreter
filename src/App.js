import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling Face",
  "😂": "Face with tears of joy",
  "😉": "Winking-Face",
  "🤩": "Star-Struck",
  "😗": "Kissing Face",
  "🤐": "Zipper-Mouth Face",
  "😯": "hushed face"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "emoji undefined in DB";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning} </h2>
      <h3>emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
