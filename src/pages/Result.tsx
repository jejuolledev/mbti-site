import React, { useState } from 'react';
import { mbtiResults } from '../data/results';
import { MBTIResult } from '../types';
import './Result.css';

interface ResultProps {
  mbtiType: string;
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ mbtiType, onRestart }) => {
  const result: MBTIResult = mbtiResults[mbtiType];
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const shareText = `나의 MBTI는 ${result.type} - ${result.title}! 🎉\n귀여운 MBTI 테스트로 확인해보세요!`;
    
    if (navigator.share) {
      navigator.share({
        title: '귀여운 MBTI 테스트',
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // 배경 그라디언트
      const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
      gradient.addColorStop(0, '#FFF5F7');
      gradient.addColorStop(1, '#FFE5EC');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1200, 630);
      
      // MBTI 타입
      ctx.fillStyle = result.color;
      ctx.font = 'bold 120px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(result.type, 600, 200);
      
      // 이모지
      ctx.font = '150px Arial';
      ctx.fillText(result.emoji, 600, 350);
      
      // 타이틀
      ctx.fillStyle = '#2C3E50';
      ctx.font = 'bold 60px Arial';
      ctx.fillText(result.title, 600, 470);
      
      // URL
      ctx.fillStyle = '#7F8C8D';
      ctx.font = '30px Arial';
      ctx.fillText('귀여운 MBTI 테스트', 600, 550);
      
      // 다운로드
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `mbti-${result.type}.png`;
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    }
  };

  return (
    <div className="result-container">
      <div className="result-card">
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti-piece" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>

        <div className="result-header">
          <h1 className="result-announcement">🎉 당신은...</h1>
          <div className="result-type-badge" style={{ background: result.color }}>
            <span className="result-emoji">{result.emoji}</span>
            <span className="result-type">{result.type}</span>
          </div>
          <h2 className="result-title">{result.title}</h2>
          <p className="result-description">{result.description}</p>
        </div>

        <div className="result-section">
          <h3 className="section-title">✨ 주요 특징</h3>
          <div className="characteristics-grid">
            {result.characteristics.map((char, index) => (
              <div key={index} className="characteristic-item">
                <span className="check-icon">✓</span>
                {char}
              </div>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3 className="section-title">💪 강점</h3>
          <div className="tags-container">
            {result.strengths.map((strength, index) => (
              <span key={index} className="tag strength-tag">
                {strength}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3 className="section-title">📌 약점</h3>
          <div className="tags-container">
            {result.weaknesses.map((weakness, index) => (
              <span key={index} className="tag weakness-tag">
                {weakness}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3 className="section-title">💕 잘 맞는 유형</h3>
          <div className="compatibility-list">
            {result.compatibility.map((type, index) => {
              const compatResult = mbtiResults[type];
              return (
                <div key={index} className="compatibility-item">
                  <span className="compat-emoji">{compatResult.emoji}</span>
                  <span className="compat-type">{type}</span>
                  <span className="compat-title">{compatResult.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="action-buttons">
          <button className="share-button" onClick={handleShare}>
            {copied ? '복사 완료! ✓' : '공유하기 🔗'}
          </button>
          <button className="download-button" onClick={handleDownload}>
            이미지 저장 📸
          </button>
          <button className="restart-button" onClick={onRestart}>
            다시 테스트하기 🔄
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
