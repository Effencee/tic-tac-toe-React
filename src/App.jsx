import GameBoard from "./components/GameBoard/GameBoard";
import PlayerInfo from "./components/PlayerInfo/PlayerInfo";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo name='Player 1' symbol='X'/>
          <PlayerInfo name='Player 2' symbol='O'/>
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  );
}

export default App
