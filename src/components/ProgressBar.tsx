import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  progress: number; // 0-100
  showLabel?: boolean;
  color?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = true,
  color = '#FF6B9D',
  height = '10px',
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-track" style={{ height }}>
        <div
          className="progress-bar-fill"
          style={{
            width: `${clampedProgress}%`,
            background: color,
          }}
        >
          <div className="progress-bar-shine"></div>
        </div>
      </div>
      {showLabel && (
        <div className="progress-bar-label">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
