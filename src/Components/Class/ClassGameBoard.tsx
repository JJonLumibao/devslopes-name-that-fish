import { Component } from "react";
import "./styles/game-board.css";
import { Fish } from "../../types";

type Props = {
  fishes: Fish[];
  setFishes: (fishes: Fish[]) => void;
  correctCount: number;
  setCorrectCount: (count: number) => void;
  incorrectCount: number;
  setIncorrectCount: (count: number) => void; 
}

export class ClassGameBoard extends Component<Props> {
  state = {
    userAnswer: "",
  }
  
  handleSubmit = (e: React.FormEvent) => {
    const currentFish = this.props.fishes[0];
    e.preventDefault();
    this.state.userAnswer.toLowerCase() === currentFish.name
      ? this.props.setCorrectCount(this.props.correctCount + 1)
      : this.props.setIncorrectCount(this.props.incorrectCount + 1);

    this.props.setFishes(this.props.fishes.slice(1));
    this.setState({userAnswer: ""});
  }
  
  render() {
    if(this.props.fishes.length === 0) return null;
    const currentFish = this.props.fishes[0];

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={currentFish.url} alt={currentFish.name} />
        </div>
        <form id="fish-guess-form" onSubmit={this.handleSubmit}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input type="text" name="fish-guess" value={this.state.userAnswer} onChange={(e) => this.setState({userAnswer: e.target.value})}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
