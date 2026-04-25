import { Component } from "react";
import "./styles/score-board.css";
import { ScoreBoardProps } from "../../types";

export class ClassScoreBoard extends Component<ScoreBoardProps> {
  render() {
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {this.props.incorrectCount}</div>
        <div id="choices-left">
          {this.props.answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {this.props.correctCount}</div>
      </div>
    );
  }
}
