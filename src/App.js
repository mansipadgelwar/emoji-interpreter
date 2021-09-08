import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍕": "pizza",
  "🍔": "burger",
  "🍟": "french fries",
  "🌭": "Hot dog",
  "🍿": "Popcorn",
  "🥓": "Bacon",
  "🧇": "Waffles",
  "🥞": "pancakes",
  "🥗": "green salad",
  "🍛": "curry rice",
  "🥟": "dumpling",
  "🍝": "spaghetti"
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
      <h1>🍱Food Emoji Interpretor</h1>
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
