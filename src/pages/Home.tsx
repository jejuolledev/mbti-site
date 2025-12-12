import React from 'react';
import './Home.css';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="emoji-decoration">
          <span className="float-emoji">🌟</span>
          <span className="float-emoji">💖</span>
          <span className="float-emoji">✨</span>
          <span className="float-emoji">🎨</span>
          <span className="float-emoji">🦄</span>
        </div>
        
        <div className="hero-section">
          <h1 className="main-title">
            <span className="title-emoji">🎨</span>
            <span className="title-text">귀여운 MBTI</span>
            <span className="title-emoji">✨</span>
          </h1>
          <p className="subtitle">나의 성격 유형을 재미있게 알아보세요!</p>

          <button className="start-button" onClick={onStart}>
            <span className="button-emoji">🌈</span>
            <span className="button-text">테스트 시작하기</span>
            <span className="button-emoji">✨</span>
          </button>

          <div className="info-text">
            <p>💡 솔직하게 답변할수록 정확해요!</p>
          </div>

          <div className="feature-cards">
            <div className="feature-card">
              <div className="card-emoji">⚡</div>
              <h3>빠른 테스트</h3>
              <p>12개 질문으로<br/>3분 완성!</p>
            </div>
            <div className="feature-card">
              <div className="card-emoji">🎯</div>
              <h3>정확한 분석</h3>
              <p>16가지 유형의<br/>상세한 설명</p>
            </div>
            <div className="feature-card">
              <div className="card-emoji">💕</div>
              <h3>궁합 체크</h3>
              <p>나와 잘 맞는<br/>유형 찾기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
