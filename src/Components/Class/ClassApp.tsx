import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

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


export class ClassApp extends Component {
  state = {
    fishes: initialFishes,
    incorrectCount: 0,
    correctCount: 0,
  };

  setFishes = (fishes: typeof initialFishes) => {
    this.setState({fishes});
  }

  setCorrectCount = (count: number) => {
    this.setState({correctCount: count});
  }

  setIncorrectCount = (count: number) => {
    this.setState({incorrectCount: count});
  }
  
  render() {
    const {fishes, incorrectCount, correctCount} = this.state;
    return (
      <>
        <>
          <ClassScoreBoard 
            incorrectCount={incorrectCount}
            correctCount={correctCount}
            answersLeft={fishes.map((fish) => fish.name)}
          />
          <ClassGameBoard 
            fishes={fishes}
            setFishes={this.setFishes}
            correctCount={correctCount}
            setCorrectCount={this.setCorrectCount}
            incorrectCount={incorrectCount}
            setIncorrectCount={this.setIncorrectCount}
          />
        </>
        {fishes.length === 0 && (
          <ClassFinalScore 
            correctCount={correctCount}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
