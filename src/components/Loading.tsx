import React from 'react';
import './Loading.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium',
  text = '로딩 중...' 
}) => {
  const sizeMap = {
    small: '30px',
    medium: '50px',
    large: '70px',
  };

  return (
    <div className="loading-container">
      <div 
        className="loading-spinner" 
        style={{ 
          width: sizeMap[size], 
          height: sizeMap[size] 
        }}
      >
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-emoji">🎨</div>
      </div>
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
};

export default Loading;
