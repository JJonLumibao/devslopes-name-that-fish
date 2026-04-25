export type Fish = {
  name: string;
  url: string;
}

export type ScoreBoardProps = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
}

export type FinalScoreProps = {
  correctCount: number;
  totalCount: number;
}