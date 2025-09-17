export interface DateEvaluation {
  id: string;
  date: string;
  displayDate: string;
  score: number | null;
  isEvaluated: boolean;
  successMessage?: string;
  celebrationGif?: string;
  tags?: string[]
}

export interface AppState {
  currentDateId: string;
  evaluations: DateEvaluation[];
}