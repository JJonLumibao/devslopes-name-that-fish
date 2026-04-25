import { Fish } from "../../types";
import "./styles/game-board.css";
import { useState } from "react";

type Props = {
  fishes: Fish[];
  setFishes: (fishes: Fish[]) => void;
  correctCount: number;
  setCorrectCount: (count: number) => void;
  incorrectCount: number;
  setIncorrectCount: (count: number) => void; 
};

export function FunctionalGameBoard({
  fishes, setFishes, correctCount, setCorrectCount, incorrectCount, setIncorrectCount
}: Props) {
  const [ userAnswer, setUserAnswer ] = useState("");
  
  if(fishes.length === 0) return null;
  
  const currentFish = fishes[0];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    userAnswer.toLowerCase() === currentFish.name
      ? setCorrectCount(correctCount + 1)
      : setIncorrectCount(incorrectCount + 1);

      setFishes(fishes.slice(1));
      setUserAnswer("");
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={currentFish.url} alt={currentFish.name} />
      </div>
      <form id="fish-guess-form" onSubmit={handleSubmit}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input type="text" name="fish-guess" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  );
}
