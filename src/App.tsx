import { useState } from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import { Answer } from './types';
import { calculateMBTI } from './utils/mbti';
import './styles/global.css';

type Page = 'home' | 'test' | 'result';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [, setAnswers] = useState<Answer[]>([]);
  const [mbtiType, setMbtiType] = useState<string>('');



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

  const handleGoHome = () => {
    setCurrentPage('home');
    setAnswers([]);
    setMbtiType('');
  };

  return (
    <div className="app">
      {currentPage === 'home' && <Home onStart={handleStart} />}
      {currentPage === 'test' && <Test onComplete={handleComplete} onGoHome={handleGoHome} />}
      {currentPage === 'result' && <Result mbtiType={mbtiType} onRestart={handleRestart} />}
    </div>
  );
}

export default App;
