export interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    emoji: string;
  }[];
}

export interface MBTIResult {
  type: string;
  title: string;
  description: string;
  characteristics: string[];
  emoji: string;
  color: string;
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
}

export interface Answer {
  questionId: number;
  selectedType: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}
