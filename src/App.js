import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div>
      <div className="flex justify-center">
        <h3 className="font-bold m-4 p-4 bg-yellow-500 text-white text-lg rounded-lg text-center w-40 border border-solid shadow-sm">
          2048 Puzzle
        </h3>
      </div>
      <Board />
    </div>
  );
}

export default App;
