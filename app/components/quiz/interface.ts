interface IQuestion {
  question_text: string;
}

interface IPoints {
  points: number;
}

interface IModalQuiz {
  visible: boolean;
  hint: string;
  onClick: () => void;
}

interface IButttonActions {
  hasUserAnswered: boolean;
  isLoading: boolean;
  hint: string;
  openTipModal: () => void;
}

interface IFormat {
  focusedInputId: string;
  hasUserAnswered: boolean;
  format: string;
  idInput: string;
}

export type { IQuestion, IPoints, IModalQuiz, IButttonActions, IFormat };
