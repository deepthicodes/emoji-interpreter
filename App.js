import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😒": "Unamused face",
  "😠": "Angry face",
  "❤️": "love",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking face"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojiWeKnow = Object.keys(emojiDictionary);

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = " we don't have this in our database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <input onChange={emojiInputHandler} />
      <div> {meaning} </div>
      <h3>emojis we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
