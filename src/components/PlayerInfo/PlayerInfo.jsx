import React, { useState } from "react";

function PlayerInfo({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredName, setEnteredName] = useState(name);

  function clickHandler() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, enteredName);
    }
  }

  function changeNameHandler(e) {
    setEnteredName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            onChange={changeNameHandler}
            value={enteredName}
            required
          ></input>
        ) : (
          <span className="player-name">{enteredName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}

export default PlayerInfo;
