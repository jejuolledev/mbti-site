// MBTI 캐릭터 SVG 생성 유틸리티
export const generateMBTICharacter = (type: string, color: string): string => {
  const svgTemplates: Record<string, string> = {
    'INTJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="8" fill="white"/>
      <circle cx="115" cy="80" r="8" fill="white"/>
      <circle cx="87" cy="82" r="4" fill="#2C3E50"/>
      <circle cx="117" cy="82" r="4" fill="#2C3E50"/>
      <path d="M 80 105 Q 100 115 120 105" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="70" y="50" width="60" height="15" rx="5" fill="${color}" opacity="0.8"/>
      <text x="100" y="62" font-size="12" fill="white" text-anchor="middle" font-weight="bold">🧙</text>
    </svg>`,
    
    'INTP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="10" fill="white"/>
      <circle cx="115" cy="80" r="10" fill="white"/>
      <circle cx="87" cy="82" r="5" fill="#2C3E50"/>
      <circle cx="117" cy="82" r="5" fill="#2C3E50"/>
      <ellipse cx="100" cy="105" rx="15" ry="8" fill="white" opacity="0.6"/>
      <path d="M 75 65 L 80 55 M 125 65 L 120 55" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <text x="100" y="145" font-size="30" text-anchor="middle">🔬</text>
    </svg>`,
    
    'ENTJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="8" fill="white"/>
      <circle cx="115" cy="80" r="8" fill="white"/>
      <circle cx="85" cy="80" r="4" fill="#2C3E50"/>
      <circle cx="115" cy="80" r="4" fill="#2C3E50"/>
      <path d="M 85 100 Q 100 110 115 100" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <polygon points="100,30 95,50 105,50" fill="#FFD700"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">👑</text>
    </svg>`,
    
    'ENTP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="83" cy="80" r="9" fill="white"/>
      <circle cx="117" cy="80" r="9" fill="white"/>
      <circle cx="85" cy="82" r="5" fill="#2C3E50"/>
      <circle cx="119" cy="82" r="5" fill="#2C3E50"/>
      <path d="M 85 100 Q 100 115 115 100" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 75 70 Q 70 60 75 55" stroke="${color}" stroke-width="3" fill="none"/>
      <path d="M 125 70 Q 130 60 125 55" stroke="${color}" stroke-width="3" fill="none"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🎭</text>
    </svg>`,
    
    'INFJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="82" r="7" fill="white"/>
      <circle cx="115" cy="82" r="7" fill="white"/>
      <circle cx="85" cy="82" r="3" fill="#2C3E50"/>
      <circle cx="115" cy="82" r="3" fill="#2C3E50"/>
      <path d="M 85 102 Q 100 108 115 102" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 70 75 Q 75 70 80 75" stroke="white" stroke-width="2" fill="none"/>
      <path d="M 120 75 Q 125 70 130 75" stroke="white" stroke-width="2" fill="none"/>
      <text x="100" y="40" font-size="25" text-anchor="middle">✨</text>
      <text x="100" y="155" font-size="30" text-anchor="middle">🦄</text>
    </svg>`,
    
    'INFP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="8" fill="white"/>
      <circle cx="115" cy="80" r="8" fill="white"/>
      <circle cx="85" cy="80" r="4" fill="#2C3E50"/>
      <circle cx="115" cy="80" r="4" fill="#2C3E50"/>
      <path d="M 88 100 Q 100 106 112 100" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="75" cy="95" r="3" fill="#FFB6C1"/>
      <circle cx="125" cy="95" r="3" fill="#FFB6C1"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🌈</text>
    </svg>`,
    
    'ENFJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="78" r="9" fill="white"/>
      <circle cx="115" cy="78" r="9" fill="white"/>
      <circle cx="85" cy="78" r="4" fill="#2C3E50"/>
      <circle cx="115" cy="78" r="4" fill="#2C3E50"/>
      <path d="M 80 102 Q 100 115 120 102" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="95" r="4" fill="#FFB6C1"/>
      <circle cx="127" cy="95" r="4" fill="#FFB6C1"/>
      <path d="M 75 65 Q 80 60 85 65" stroke="white" stroke-width="2" fill="none"/>
      <path d="M 115 65 Q 120 60 125 65" stroke="white" stroke-width="2" fill="none"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">✨</text>
    </svg>`,
    
    'ENFP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="82" cy="78" r="10" fill="white"/>
      <circle cx="118" cy="78" r="10" fill="white"/>
      <circle cx="84" cy="78" r="5" fill="#2C3E50"/>
      <circle cx="120" cy="78" r="5" fill="#2C3E50"/>
      <path d="M 80 100 Q 100 118 120 100" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="72" cy="92" r="4" fill="#FFB6C1"/>
      <circle cx="128" cy="92" r="4" fill="#FFB6C1"/>
      <path d="M 70 65 L 65 55 M 75 60 L 70 50" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M 130 65 L 135 55 M 125 60 L 130 50" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🎪</text>
    </svg>`,
    
    'ISTJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <rect x="55" y="50" width="90" height="90" rx="10" fill="${color}"/>
      <circle cx="82" cy="80" r="7" fill="white"/>
      <circle cx="118" cy="80" r="7" fill="white"/>
      <circle cx="82" cy="80" r="3" fill="#2C3E50"/>
      <circle cx="118" cy="80" r="3" fill="#2C3E50"/>
      <line x1="85" y1="105" x2="115" y2="105" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">📊</text>
    </svg>`,
    
    'ISFJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="7" fill="white"/>
      <circle cx="115" cy="80" r="7" fill="white"/>
      <circle cx="85" cy="80" r="3" fill="#2C3E50"/>
      <circle cx="115" cy="80" r="3" fill="#2C3E50"/>
      <path d="M 88 102 Q 100 108 112 102" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 70 70 Q 75 65 80 70" stroke="white" stroke-width="2" fill="none"/>
      <path d="M 120 70 Q 125 65 130 70" stroke="white" stroke-width="2" fill="none"/>
      <circle cx="73" cy="93" r="3" fill="#FFB6C1"/>
      <circle cx="127" cy="93" r="3" fill="#FFB6C1"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🛡️</text>
    </svg>`,
    
    'ESTJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <rect x="55" y="50" width="90" height="90" rx="10" fill="${color}"/>
      <circle cx="82" cy="78" r="8" fill="white"/>
      <circle cx="118" cy="78" r="8" fill="white"/>
      <circle cx="82" cy="78" r="4" fill="#2C3E50"/>
      <circle cx="118" cy="78" r="4" fill="#2C3E50"/>
      <path d="M 85 102 Q 100 110 115 102" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <rect x="75" y="55" width="50" height="8" rx="2" fill="white" opacity="0.5"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">📈</text>
    </svg>`,
    
    'ESFJ': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="78" r="8" fill="white"/>
      <circle cx="115" cy="78" r="8" fill="white"/>
      <circle cx="85" cy="78" r="4" fill="#2C3E50"/>
      <circle cx="115" cy="78" r="4" fill="#2C3E50"/>
      <path d="M 82 100 Q 100 112 118 100" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="93" r="4" fill="#FFB6C1"/>
      <circle cx="127" cy="93" r="4" fill="#FFB6C1"/>
      <path d="M 75 68 Q 80 63 85 68" stroke="white" stroke-width="2" fill="none"/>
      <path d="M 115 68 Q 120 63 125 68" stroke="white" stroke-width="2" fill="none"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🤝</text>
    </svg>`,
    
    'ISTP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="7" fill="white"/>
      <circle cx="115" cy="80" r="7" fill="white"/>
      <circle cx="85" cy="80" r="3" fill="#2C3E50"/>
      <circle cx="115" cy="80" r="3" fill="#2C3E50"/>
      <line x1="88" y1="103" x2="112" y2="103" stroke="white" stroke-width="3" stroke-linecap="round"/>
      <path d="M 75 72 L 80 65" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M 125 72 L 120 65" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🔧</text>
    </svg>`,
    
    'ISFP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="85" cy="80" r="8" fill="white"/>
      <circle cx="115" cy="80" r="8" fill="white"/>
      <circle cx="85" cy="80" r="4" fill="#2C3E50"/>
      <circle cx="115" cy="80" r="4" fill="#2C3E50"/>
      <path d="M 88 101 Q 100 108 112 101" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
      <circle cx="73" cy="93" r="4" fill="#FFB6C1"/>
      <circle cx="127" cy="93" r="4" fill="#FFB6C1"/>
      <path d="M 70 70 Q 75 68 80 70" stroke="white" stroke-width="2" fill="none"/>
      <path d="M 120 70 Q 125 68 130 70" stroke="white" stroke-width="2" fill="none"/>
      <circle cx="60" cy="100" r="5" fill="#FFD700" opacity="0.6"/>
      <circle cx="140" cy="100" r="5" fill="#FF69B4" opacity="0.6"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">🎨</text>
    </svg>`,
    
    'ESTP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="83" cy="78" r="9" fill="white"/>
      <circle cx="117" cy="78" r="9" fill="white"/>
      <circle cx="83" cy="78" r="4" fill="#2C3E50"/>
      <circle cx="117" cy="78" r="4" fill="#2C3E50"/>
      <path d="M 80 102 Q 100 114 120 102" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <path d="M 70 68 L 65 58 L 75 60" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 130 68 L 135 58 L 125 60" stroke="${color}" stroke-width="3" fill="none" stroke-linecap="round"/>
      <text x="100" y="155" font-size="30" text-anchor="middle">⚡</text>
    </svg>`,
    
    'ESFP': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="${color}" opacity="0.2"/>
      <circle cx="100" cy="90" r="60" fill="${color}"/>
      <circle cx="82" cy="76" r="10" fill="white"/>
      <circle cx="118" cy="76" r="10" fill="white"/>
      <circle cx="84" cy="76" r="5" fill="#2C3E50"/>
      <circle cx="120" cy="76" r="5" fill="#2C3E50"/>
      <path d="M 78 98 Q 100 118 122 98" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/>
      <circle cx="70" cy="90" r="5" fill="#FFB6C1"/>
      <circle cx="130" cy="90" r="5" fill="#FFB6C1"/>
      <path d="M 65 65 L 60 50 M 70 60 L 65 45" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <path d="M 135 65 L 140 50 M 130 60 L 135 45" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
      <circle cx="50" cy="80" r="4" fill="#FFD700" opacity="0.7"/>
      <circle cx="150" cy="80" r="4" fill="#FF69B4" opacity="0.7"/>
      <circle cx="100" cy="50" r="4" fill="#87CEEB" opacity="0.7"/>
      <text x="100" y="165" font-size="30" text-anchor="middle">🎉</text>
    </svg>`,
  };

  return svgTemplates[type] || svgTemplates['INFP'];
};

// SVG를 Base64로 변환
export const svgToBase64 = (svg: string): string => {
  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
};
