import React, { useState } from 'react';
import { questions } from '../data/questions';
import { Answer } from '../types';
import './Test.css';

interface TestProps {
  onComplete: (answers: Answer[]) => void;
}

const Test: React.FC<TestProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newAnswer: Answer = {
        questionId: question.id,
        selectedType: question.options[optionIndex].type,
      };

      const newAnswers = [...answers, newAnswer];
      setAnswers(newAnswers);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        onComplete(newAnswers);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
      setSelectedOption(null);
    }
  };

  return (
    <div className="test-container">
      <div className="test-card">
        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        <div className="question-section">
          <div className="question-number">Q{currentQuestion + 1}</div>
          <h2 className="question-text">{question.question}</h2>
        </div>

        <div className="options-section">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${selectedOption === index ? 'selected' : ''}`}
              onClick={() => handleAnswer(index)}
            >
              <span className="option-emoji">{option.emoji}</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>

        {currentQuestion > 0 && (
          <button className="prev-button" onClick={handlePrevious}>
            ← 이전 질문
          </button>
        )}
      </div>
    </div>
  );
};

export default Test;
