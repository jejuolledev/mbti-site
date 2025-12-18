import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const captureAreaRef = useRef<HTMLDivElement>(null);

  // 홍보 문구 랜덤 선택
  const promoTexts = [
    "🔮 내 성격 유형이 궁금하다면?",
    "✨ 나도 테스트 해볼래!",
    "🎯 내 MBTI는 뭘까?",
    "💫 친구들아 같이 해보자!",
    "🌟 3분만에 알아보는 내 성격!",
  ];

  // 랜덤 홍보 문구 고정 (컴포넌트 마운트 시 결정)
  const [selectedPromo] = useState(() => promoTexts[Math.floor(Math.random() * promoTexts.length)]);

  // 이미지 생성 함수 (ai-level-test 방식 적용)
  const generateShareImage = useCallback(async (): Promise<{ blob: Blob; dataUrl: string } | null> => {
    if (!captureAreaRef.current) {
      console.error('캡처 영역을 찾을 수 없습니다');
      return null;
    }

    try {
      const element = captureAreaRef.current;

      // 하단에 URL 오버레이 추가
      const urlOverlay = document.createElement('div');
      urlOverlay.style.cssText = `
        text-align: center;
        padding: 20px;
        background: linear-gradient(135deg, #FF6B9D 0%, #C44569 100%);
        color: white;
        font-weight: bold;
        font-size: 18px;
        border-radius: 0 0 20px 20px;
        margin-top: 10px;
      `;
      urlOverlay.innerHTML = `${selectedPromo}<br>👉 moahub.co.kr`;
      element.appendChild(urlOverlay);

      // Safari fix: 스크롤 위치 저장 후 최상단으로 이동
      const originalScrollPos = window.scrollY;
      window.scrollTo(0, 0);

      // html2canvas로 캡처 (ai-level-test와 동일한 옵션)
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true,
        allowTaint: true
      });

      // 스크롤 위치 복원 및 오버레이 제거
      window.scrollTo(0, originalScrollPos);
      urlOverlay.remove();

      // Blob 생성
      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob(resolve, 'image/png');
      });

      if (!blob) {
        console.error('Blob 생성 실패');
        return null;
      }

      const dataUrl = canvas.toDataURL('image/png');
      return { blob, dataUrl };
    } catch (error) {
      console.error('이미지 생성 실패:', error);
      return null;
    }
  }, [selectedPromo]);

  // 미리보기 이미지 자동 생성 (결과 로드 후)
  useEffect(() => {
    const generatePreview = async () => {
      // 약간의 딜레이 후 미리보기 생성 (렌더링 완료 대기)
      setIsGeneratingPreview(true);
      await new Promise(resolve => setTimeout(resolve, 800));

      const imageResult = await generateShareImage();
      if (imageResult) {
        setPreviewImage(imageResult.dataUrl);
      }
      setIsGeneratingPreview(false);
    };

    generatePreview();
  }, [mbtiType, generateShareImage]);

  const downloadImage = useCallback((blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mbti-${result.type}-result.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [result.type]);

  // ai-level-test 방식의 공유 함수
  const handleScreenshotShare = async () => {
    if (isCapturing) return;
    setIsCapturing(true);

    try {
      // 이미지 생성
      const imageResult = await generateShareImage();
      if (!imageResult) {
        throw new Error('이미지 생성 실패');
      }

      const { blob } = imageResult;
      const file = new File([blob], `mbti-${result.type}-result.png`, { type: 'image/png' });
      const shareText = `${result.emoji} 나의 MBTI는 "${result.type} - ${result.title}"!\n\n${selectedPromo}\n👉 moahub.co.kr`;

      // 1. Web Share API 파일 공유 시도 (모바일 사파리, 안드로이드 크롬)
      try {
        if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: '귀여운 MBTI 테스트 결과',
            text: 'moahub.co.kr',
            files: [file]
          });
          return;
        }
      } catch (shareErr) {
        if ((shareErr as Error).name === 'AbortError') return;
        console.log('파일 공유 실패, 다른 방법 시도:', shareErr);
      }

      // 2. 클립보드에 이미지 복사 (데스크톱 크롬 등)
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);
        alert('✅ 이미지가 클립보드에 복사되었습니다!\n\nCtrl+V (또는 Cmd+V)로 붙여넣기 하세요! 🎉');
        return;
      } catch (clipboardErr) {
        console.log('클립보드 복사 실패:', clipboardErr);
      }

      // 3. 이미지 다운로드 폴백
      try {
        downloadImage(blob);
        alert('✅ 이미지가 저장되었습니다!\n\n갤러리에서 확인하고 공유해보세요! 🎉');
        return;
      } catch (downloadErr) {
        console.log('이미지 다운로드 실패:', downloadErr);
      }

      // 4. 텍스트로 폴백
      if (navigator.share) {
        try {
          await navigator.share({
            title: '귀여운 MBTI 테스트 결과',
            text: shareText
          });
        } catch (textShareErr) {
          if ((textShareErr as Error).name !== 'AbortError') {
            await navigator.clipboard.writeText(shareText);
            alert('텍스트가 클립보드에 복사되었습니다! 🎉');
          }
        }
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('텍스트가 클립보드에 복사되었습니다! 🎉');
      }

    } catch (error) {
      console.error('이미지 생성 실패:', error);
      alert('이미지 생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsCapturing(false);
    }
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
      {/* Confetti 애니메이션 (캡처 영역 밖) */}
      <div className="confetti">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="confetti-piece" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>

      <div className="result-card">
        {/* 캡처 영역 - 버튼 제외 */}
        <div className="capture-area" ref={captureAreaRef}>
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
        </div>

        {/* 공유 이미지 미리보기 */}
        <div className="share-preview-section">
          <h3 className="preview-title">📷 공유할 이미지 미리보기</h3>
          <div className="preview-container">
            {isGeneratingPreview ? (
              <div className="preview-loading">
                <div className="preview-spinner"></div>
                <p>이미지 생성 중...</p>
              </div>
            ) : previewImage ? (
              <img
                src={previewImage}
                alt="공유 이미지 미리보기"
                className="preview-image"
              />
            ) : (
              <div className="preview-placeholder">
                <p>이미지를 불러오는 중...</p>
              </div>
            )}
          </div>
          <p className="preview-description">
            위 이미지가 친구들에게 공유됩니다! 🎉
          </p>
        </div>

        <div className="action-buttons">
          <button
            className="screenshot-share-button"
            onClick={handleScreenshotShare}
            disabled={isCapturing || isGeneratingPreview}
          >
            {isCapturing ? '공유 준비 중... 📷' : copied ? '복사 완료! ✓' : '이미지로 공유하기 📸'}
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
