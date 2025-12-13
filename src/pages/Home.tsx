import React from 'react';
import './Home.css';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="home-container">
      <div className="glass-wrapper">
        <div className="header">
          <div className="logo">🎨</div>
          <h1>귀여운 MBTI</h1>
          <p className="subtitle">나의 성격 유형을 재미있게 알아보세요!</p>
        </div>

        <div className="action-grid">
          <div className="action-card main-action" onClick={onStart}>
            <div className="action-icon">✨</div>
            <div className="action-text">
              <h3>MBTI 테스트 시작</h3>
              <p>빠르고 정확한 성격 분석</p>
            </div>
          </div>

          <div className="action-card sub-action">
            <div className="action-icon">⚡</div>
            <div className="action-text">
              <h3>빠른 결과</h3>
              <p>3분 완성</p>
            </div>
          </div>

          <div className="action-card sub-action">
            <div className="action-icon">🎯</div>
            <div className="action-text">
              <h3>정확한 분석</h3>
              <p>16가지 유형</p>
            </div>
          </div>

          <div className="action-card sub-action">
            <div className="action-icon">💕</div>
            <div className="action-text">
              <h3>궁합 보기</h3>
              <p>나와 맞는 유형</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
