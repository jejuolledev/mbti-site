import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
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
  const [isCapturing, setIsCapturing] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  // 홍보 문구 랜덤 선택
  const promoTexts = [
    "🔮 내 성격 유형이 궁금하다면?",
    "✨ 나도 테스트 해볼래!",
    "🎯 내 MBTI는 뭘까?",
    "💫 친구들아 같이 해보자!",
    "🌟 3분만에 알아보는 내 성격!",
  ];

  const handleScreenshotShare = async () => {
    if (!resultCardRef.current || isCapturing) return;

    setIsCapturing(true);

    try {
      // 결과 카드 캡처
      const canvas = await html2canvas(resultCardRef.current, {
        backgroundColor: '#FFF5F7',
        scale: 2, // 고해상도
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      // 홍보 문구 추가를 위한 새 캔버스
      const finalCanvas = document.createElement('canvas');
      const promoHeight = 120;
      finalCanvas.width = canvas.width;
      finalCanvas.height = canvas.height + promoHeight;

      const ctx = finalCanvas.getContext('2d');
      if (!ctx) return;

      // 기존 캡처 이미지 그리기
      ctx.drawImage(canvas, 0, 0);

      // 하단 홍보 영역 배경
      const gradient = ctx.createLinearGradient(0, canvas.height, 0, finalCanvas.height);
      gradient.addColorStop(0, '#FF6B9D');
      gradient.addColorStop(1, '#C44569');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height, finalCanvas.width, promoHeight);

      // 홍보 문구
      const randomPromo = promoTexts[Math.floor(Math.random() * promoTexts.length)];
      ctx.fillStyle = 'white';
      ctx.font = 'bold 36px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(randomPromo, finalCanvas.width / 2, canvas.height + 50);

      // URL
      ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('👉 moahub.co.kr', finalCanvas.width / 2, canvas.height + 95);

      // Blob 생성
      const blob = await new Promise<Blob | null>((resolve) => {
        finalCanvas.toBlob(resolve, 'image/png', 1.0);
      });

      if (!blob) throw new Error('이미지 생성 실패');

      const file = new File([blob], `mbti-${result.type}-result.png`, { type: 'image/png' });

      const shareText = `${result.emoji} 나의 MBTI는 "${result.type} - ${result.title}"!\n\n${randomPromo}\n👉 moahub.co.kr`;

      // Web Share API 지원 확인 (Safari, Chrome 모두 지원)
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: '귀여운 MBTI 테스트 결과',
          text: shareText,
          files: [file],
        });
      } else if (navigator.share) {
        // 파일 공유 미지원 시 텍스트만 공유
        await navigator.share({
          title: '귀여운 MBTI 테스트 결과',
          text: shareText,
          url: 'https://moahub.co.kr',
        });
        // 이미지는 별도 다운로드
        downloadImage(blob);
      } else {
        // Web Share API 미지원 시 이미지 다운로드 + 텍스트 복사
        downloadImage(blob);
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch (error) {
      // 사용자가 공유 취소한 경우는 무시
      if ((error as Error).name !== 'AbortError') {
        console.error('공유 실패:', error);
        alert('공유에 실패했어요. 다시 시도해주세요!');
      }
    } finally {
      setIsCapturing(false);
    }
  };

  const downloadImage = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mbti-${result.type}-result.png`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    const shareText = `나의 MBTI는 ${result.type} - ${result.title}! 🎉\n귀여운 MBTI 테스트로 확인해보세요!\n👉 moahub.co.kr`;

    if (navigator.share) {
      navigator.share({
        title: '귀여운 MBTI 테스트',
        text: shareText,
        url: 'https://moahub.co.kr',
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
      ctx.fillText('moahub.co.kr', 600, 550);

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
      <div className="result-card" ref={resultCardRef}>
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
          <button
            className="screenshot-share-button"
            onClick={handleScreenshotShare}
            disabled={isCapturing}
          >
            {isCapturing ? '캡처 중... 📷' : copied ? '복사 완료! ✓' : '결과 이미지로 공유하기 📸'}
          </button>
          <button className="share-button" onClick={handleShare}>
            텍스트로 공유하기 🔗
          </button>
          <button className="download-button" onClick={handleDownload}>
            이미지 저장 💾
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
