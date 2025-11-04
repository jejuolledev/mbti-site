import { MBTIResult } from '../types';

export const mbtiResults: Record<string, MBTIResult> = {
  INTJ: {
    type: 'INTJ',
    title: '전략가',
    description: '독창적이고 전략적인 사고를 가진 완벽주의자',
    emoji: '🧙‍♂️',
    color: '#6B46C1',
    characteristics: [
      '논리적이고 분석적',
      '독립적이고 자기주도적',
      '장기적 비전 추구',
      '완벽주의 성향'
    ],
    strengths: ['전략적 사고', '독창성', '자기확신', '결단력'],
    weaknesses: ['감정표현 서툴', '비판적', '완벽주의', '타협 어려움'],
    compatibility: ['ENFP', 'ENTP', 'INFJ']
  },
  INTP: {
    type: 'INTP',
    title: '논리술사',
    description: '호기심 많고 혁신적인 발명가',
    emoji: '🔬',
    color: '#4299E1',
    characteristics: [
      '논리적이고 객관적',
      '호기심이 많음',
      '독창적인 아이디어',
      '분석적 사고'
    ],
    strengths: ['논리적 분석', '창의성', '객관성', '문제해결력'],
    weaknesses: ['산만함', '감정 무시', '실행력 부족', '사회성 부족'],
    compatibility: ['ENTJ', 'ESTJ', 'INFJ']
  },
  ENTJ: {
    type: 'ENTJ',
    title: '통솔자',
    description: '대담하고 상상력이 풍부한 리더',
    emoji: '👑',
    color: '#D53F8C',
    characteristics: [
      '카리스마 있는 리더십',
      '효율성 추구',
      '목표 지향적',
      '결단력 있음'
    ],
    strengths: ['리더십', '전략적 사고', '효율성', '자신감'],
    weaknesses: ['강압적', '감정 무시', '참을성 부족', '비판적'],
    compatibility: ['INTP', 'INFP', 'INTJ']
  },
  ENTP: {
    type: 'ENTP',
    title: '변론가',
    description: '영리하고 호기심 많은 토론가',
    emoji: '🎭',
    color: '#ED8936',
    characteristics: [
      '재치있고 똑똑함',
      '토론을 즐김',
      '혁신적인 사고',
      '도전적'
    ],
    strengths: ['창의성', '논리력', '적응력', '열정'],
    weaknesses: ['논쟁적', '집중력 부족', '규칙 무시', '민감성 부족'],
    compatibility: ['INFJ', 'INTJ', 'ENFP']
  },
  INFJ: {
    type: 'INFJ',
    title: '옹호자',
    description: '이상주의적이고 원칙주의적인 선구자',
    emoji: '🦄',
    color: '#38B2AC',
    characteristics: [
      '이상주의적',
      '통찰력이 뛰어남',
      '헌신적',
      '원칙주의'
    ],
    strengths: ['통찰력', '창의성', '헌신', '이상주의'],
    weaknesses: ['완벽주의', '예민함', '번아웃', '비현실적'],
    compatibility: ['ENFP', 'ENTP', 'INTJ']
  },
  INFP: {
    type: 'INFP',
    title: '중재자',
    description: '이상주의적이고 충성스러운 낭만주의자',
    emoji: '🌈',
    color: '#F687B3',
    characteristics: [
      '이상주의적',
      '창의적',
      '공감 능력 뛰어남',
      '가치 지향적'
    ],
    strengths: ['창의성', '공감 능력', '이상주의', '충성심'],
    weaknesses: ['비현실적', '과도한 이상화', '자기비판', '스트레스 취약'],
    compatibility: ['ENFJ', 'ENTJ', 'INFJ']
  },
  ENFJ: {
    type: 'ENFJ',
    title: '선도자',
    description: '카리스마 있고 영감을 주는 리더',
    emoji: '✨',
    color: '#48BB78',
    characteristics: [
      '타인 지향적',
      '카리스마',
      '열정적',
      '조화 추구'
    ],
    strengths: ['리더십', '공감 능력', '소통력', '열정'],
    weaknesses: ['지나친 희생', '타인 의존', '비판 민감', '결정 어려움'],
    compatibility: ['INFP', 'ISFP', 'ENFP']
  },
  ENFP: {
    type: 'ENFP',
    title: '활동가',
    description: '열정적이고 창의적인 자유로운 영혼',
    emoji: '🎪',
    color: '#F6AD55',
    characteristics: [
      '열정적',
      '창의적',
      '사교적',
      '호기심 많음'
    ],
    strengths: ['창의성', '열정', '소통력', '낙관성'],
    weaknesses: ['집중력 부족', '과도한 낙관', '스트레스 관리', '실행력 부족'],
    compatibility: ['INTJ', 'INFJ', 'ENFJ']
  },
  ISTJ: {
    type: 'ISTJ',
    title: '현실주의자',
    description: '사실적이고 책임감 강한 실용주의자',
    emoji: '📊',
    color: '#2C5282',
    characteristics: [
      '책임감 강함',
      '조직적',
      '현실적',
      '신뢰할 수 있음'
    ],
    strengths: ['책임감', '조직력', '신뢰성', '객관성'],
    weaknesses: ['융통성 부족', '보수적', '감정 표현 서툴', '변화 거부'],
    compatibility: ['ESFP', 'ESTP', 'ISFJ']
  },
  ISFJ: {
    type: 'ISFJ',
    title: '수호자',
    description: '헌신적이고 따뜻한 보호자',
    emoji: '🛡️',
    color: '#5A67D8',
    characteristics: [
      '헌신적',
      '책임감 강함',
      '세심함',
      '조화 추구'
    ],
    strengths: ['헌신', '책임감', '세심함', '지원'],
    weaknesses: ['자기주장 부족', '변화 거부', '과도한 희생', '완벽주의'],
    compatibility: ['ESFP', 'ESTP', 'ISTJ']
  },
  ESTJ: {
    type: 'ESTJ',
    title: '경영자',
    description: '뛰어난 조직력을 가진 관리자',
    emoji: '📈',
    color: '#C05621',
    characteristics: [
      '조직적',
      '실용적',
      '책임감',
      '결단력'
    ],
    strengths: ['조직력', '실행력', '책임감', '효율성'],
    weaknesses: ['융통성 부족', '고집', '감정 무시', '비판적'],
    compatibility: ['ISFP', 'ISTP', 'INTP']
  },
  ESFJ: {
    type: 'ESFJ',
    title: '집정관',
    description: '사교적이고 협조적인 조력자',
    emoji: '🤝',
    color: '#DD6B20',
    characteristics: [
      '사교적',
      '협조적',
      '헌신적',
      '조화 추구'
    ],
    strengths: ['사교성', '협조', '책임감', '배려'],
    weaknesses: ['비판 민감', '타인 의존', '변화 거부', '주도성 부족'],
    compatibility: ['ISFP', 'ISTP', 'ISTJ']
  },
  ISTP: {
    type: 'ISTP',
    title: '장인',
    description: '대담하고 실용적인 실험가',
    emoji: '🔧',
    color: '#2D3748',
    characteristics: [
      '실용적',
      '논리적',
      '독립적',
      '융통성'
    ],
    strengths: ['문제해결', '논리성', '적응력', '실용성'],
    weaknesses: ['감정 표현 서툴', '무관심', '책임회피', '계획성 부족'],
    compatibility: ['ESFJ', 'ESTJ', 'ISFP']
  },
  ISFP: {
    type: 'ISFP',
    title: '모험가',
    description: '유연하고 매력적인 예술가',
    emoji: '🎨',
    color: '#9F7AEA',
    characteristics: [
      '예술적',
      '유연함',
      '감수성',
      '자유로움'
    ],
    strengths: ['창의성', '감수성', '유연성', '심미안'],
    weaknesses: ['계획성 부족', '경쟁 회피', '자기주장 약함', '예민함'],
    compatibility: ['ESFJ', 'ESTJ', 'ISTP']
  },
  ESTP: {
    type: 'ESTP',
    title: '사업가',
    description: '에너지 넘치는 모험가',
    emoji: '⚡',
    color: '#E53E3E',
    characteristics: [
      '활동적',
      '대담함',
      '실용적',
      '순발력'
    ],
    strengths: ['실행력', '적응력', '사교성', '현실감각'],
    weaknesses: ['계획성 부족', '충동적', '위험 감수', '인내심 부족'],
    compatibility: ['ISFJ', 'ISTJ', 'ESFP']
  },
  ESFP: {
    type: 'ESFP',
    title: '연예인',
    description: '즉흥적이고 활기찬 엔터테이너',
    emoji: '🎉',
    color: '#F56565',
    characteristics: [
      '사교적',
      '즉흥적',
      '활발함',
      '낙천적'
    ],
    strengths: ['사교성', '낙관성', '즉흥성', '활력'],
    weaknesses: ['계획성 부족', '집중력 부족', '갈등 회피', '장기 목표 약함'],
    compatibility: ['ISFJ', 'ISTJ', 'ESTP']
  }
};
