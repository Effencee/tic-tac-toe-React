import { useState } from "react";
import GameBoard from "./components/GameBoard/GameBoard";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";
import Log from "./components/Logs/Log";
import { WINNING_COMBINATIONS } from "./WinningCombinations";
import GameOver from "./components/GameOver/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayer] = useState({
    X: 'Player 1',
    O: 'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(array=>[...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function selectSquareHandler(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function restartHandler(){
    setGameTurns([]);
  }

  function nameChangeHandler(symbol, newName){
    setPlayer((prevNames)=>{
      return {
        ...prevNames,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={nameChangeHandler}
          />
          <PlayerInfo
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={nameChangeHandler}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRestart={restartHandler} />
        )}
        <GameBoard onSelectSquare={selectSquareHandler} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
