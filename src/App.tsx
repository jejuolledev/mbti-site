import React, { useState } from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import { Answer } from './types';
import './styles/global.css';

type Page = 'home' | 'test' | 'result';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [mbtiType, setMbtiType] = useState<string>('');

  const calculateMBTI = (userAnswers: Answer[]): string => {
    const counts: Record<string, number> = {
      E: 0, I: 0,
      S: 0, N: 0,
      T: 0, F: 0,
      J: 0, P: 0,
    };

    userAnswers.forEach(answer => {
      counts[answer.selectedType]++;
    });

    const result = 
      (counts.E >= counts.I ? 'E' : 'I') +
      (counts.S >= counts.N ? 'S' : 'N') +
      (counts.T >= counts.F ? 'T' : 'F') +
      (counts.J >= counts.P ? 'J' : 'P');

    return result;
  };

  const handleStart = () => {
    setCurrentPage('test');
    setAnswers([]);
    setMbtiType('');
  };

  const handleComplete = (userAnswers: Answer[]) => {
    setAnswers(userAnswers);
    const result = calculateMBTI(userAnswers);
    setMbtiType(result);
    setCurrentPage('result');
  };

  const handleRestart = () => {
    setCurrentPage('home');
    setAnswers([]);
    setMbtiType('');
  };

  return (
    <div className="app">
      {currentPage === 'home' && <Home onStart={handleStart} />}
      {currentPage === 'test' && <Test onComplete={handleComplete} />}
      {currentPage === 'result' && <Result mbtiType={mbtiType} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
