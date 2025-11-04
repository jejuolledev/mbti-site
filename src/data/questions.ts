import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "주말에 친구들이 갑자기 놀자고 할 때 나는?",
    options: [
      { text: "좋아! 바로 준비하고 나갈게!", type: "E", emoji: "🎉" },
      { text: "음... 오늘은 집에서 쉬고 싶은데...", type: "I", emoji: "🏠" }
    ]
  },
  {
    id: 2,
    question: "새로운 프로젝트를 시작할 때 나는?",
    options: [
      { text: "일단 계획부터 세밀하게 짜보자!", type: "J", emoji: "📋" },
      { text: "대충 시작하면서 생각해보면 되지!", type: "P", emoji: "🎨" }
    ]
  },
  {
    id: 3,
    question: "친구가 고민 상담을 할 때 나는?",
    options: [
      { text: "그럴 땐 이렇게 하면 해결돼!", type: "T", emoji: "💡" },
      { text: "너무 힘들었겠다... 괜찮아?", type: "F", emoji: "💕" }
    ]
  },
  {
    id: 4,
    question: "여행을 계획할 때 나는?",
    options: [
      { text: "일정표 만들고 맛집 리스트 정리!", type: "J", emoji: "✈️" },
      { text: "그냥 가서 발길 닿는 대로~", type: "P", emoji: "🗺️" }
    ]
  },
  {
    id: 5,
    question: "영화를 볼 때 나는?",
    options: [
      { text: "스토리의 복선과 의미를 분석해", type: "N", emoji: "🔮" },
      { text: "그냥 재미있게 보면 되는 거 아냐?", type: "S", emoji: "🎬" }
    ]
  },
  {
    id: 6,
    question: "파티에 갔을 때 나는?",
    options: [
      { text: "모르는 사람들한테 먼저 말 걸기!", type: "E", emoji: "🥳" },
      { text: "아는 사람들 옆에서 편하게 있기", type: "I", emoji: "😊" }
    ]
  },
  {
    id: 7,
    question: "새로운 것을 배울 때 나는?",
    options: [
      { text: "원리와 이론부터 이해하고 싶어", type: "N", emoji: "📚" },
      { text: "일단 실전에서 해보면서 배워", type: "S", emoji: "⚡" }
    ]
  },
  {
    id: 8,
    question: "의견이 다른 친구와 대화할 때 나는?",
    options: [
      { text: "논리적으로 설득하려고 해", type: "T", emoji: "🧠" },
      { text: "상대방 기분을 먼저 생각해", type: "F", emoji: "🌸" }
    ]
  },
  {
    id: 9,
    question: "갑자기 약속이 취소됐을 때 나는?",
    options: [
      { text: "오히려 좋아! 혼자만의 시간~", type: "I", emoji: "🌙" },
      { text: "아쉬워... 다른 친구라도 만날까?", type: "E", emoji: "☀️" }
    ]
  },
  {
    id: 10,
    question: "책을 읽을 때 나는?",
    options: [
      { text: "행간의 의미와 상징을 찾아봐", type: "N", emoji: "📖" },
      { text: "있는 그대로 내용을 받아들여", type: "S", emoji: "📄" }
    ]
  },
  {
    id: 11,
    question: "과제나 업무를 할 때 나는?",
    options: [
      { text: "미리미리 계획적으로 끝내기", type: "J", emoji: "✅" },
      { text: "마감 임박할 때 집중력 폭발!", type: "P", emoji: "🔥" }
    ]
  },
  {
    id: 12,
    question: "친구가 실수했을 때 나는?",
    options: [
      { text: "괜찮아, 누구나 실수할 수 있어", type: "F", emoji: "🤗" },
      { text: "다음엔 이렇게 하면 안 그럴 거야", type: "T", emoji: "👨‍🏫" }
    ]
  }
];
