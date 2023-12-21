import React, { useState } from "react";

function PlayerInfo({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredName, setEnteredName] = useState(name);

  function clickHandler() {
    setIsEditing(editing=>!editing);
  }

  function changeNameHandler(e) {
    setEnteredName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            onChange={changeNameHandler}
            value={enteredName}
            required
          ></input>
        ) : (
          <span className="player-name">
            {enteredName}
          </span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}

export default PlayerInfo;
