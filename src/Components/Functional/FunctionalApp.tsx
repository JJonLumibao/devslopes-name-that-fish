import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { Images } from "../../assets/Images";
import { useState } from "react";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [fishes, setFishes] = useState(initialFishes);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  return (
    <>
      <FunctionalScoreBoard 
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        answersLeft={fishes.map((fish) => fish.name)}
      />
      <FunctionalGameBoard 
        fishes={fishes}
        setFishes={setFishes}
        correctCount={correctCount}
        setCorrectCount={setCorrectCount}
        incorrectCount={incorrectCount}
        setIncorrectCount={setIncorrectCount}
      />
      {fishes.length === 0 && (
        <FunctionalFinalScore 
          correctCount={correctCount}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
