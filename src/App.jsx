import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function selectSquareHandler() {
    setActivePlayer((curActive) => (curActive === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <PlayerInfo
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={selectSquareHandler}
          activePlayerSymbol={activePlayer}
        />
      </div>
      log
    </main>
  );
}

export default App;
