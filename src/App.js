import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "ð": "pizza",
  "ð": "burger",
  "ð": "french fries",
  "ð­": "Hot dog",
  "ð¿": "Popcorn",
  "ð¥": "Bacon",
  "ð§": "Waffles",
  "ð¥": "pancakes",
  "ð¥": "green salad",
  "ð": "curry rice",
  "ð¥": "dumpling",
  "ð": "spaghetti"
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else if (userInput === "") {
      setMeaning("");
    } else {
      setMeaning("Emoji not available in database.");
    }
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>ð±Food Emoji Interpretor</h1>
      <input onChange={emojiInputHandler}></input>
      <h1>{meaning} </h1>
      <h2>emojis we know</h2>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ padding: "0.8rem", cursor: "pointer", fontSize: "2rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
