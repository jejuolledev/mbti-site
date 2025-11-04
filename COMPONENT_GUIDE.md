# 컴포넌트 사용 가이드

## 📦 사용 가능한 컴포넌트

### Button
범용 버튼 컴포넌트

```tsx
import { Button } from '@/components';

// 기본 사용
<Button onClick={() => console.log('clicked')}>
  클릭하기
</Button>

// Variant 옵션
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="outline">Outline Button</Button>

// Size 옵션
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// 기타 옵션
<Button disabled>Disabled Button</Button>
<Button fullWidth>Full Width Button</Button>

// 이모지와 함께
<Button>
  <span>시작하기</span>
  <span>🚀</span>
</Button>
```

### Card
카드 컨테이너 컴포넌트

```tsx
import { Card } from '@/components';

// 기본 사용
<Card>
  <h3>제목</h3>
  <p>내용</p>
</Card>

// Hoverable 효과
<Card hoverable>
  <p>마우스를 올려보세요!</p>
</Card>

// 클릭 가능한 카드
<Card hoverable onClick={() => alert('Clicked!')}>
  <p>클릭 가능합니다</p>
</Card>

// 커스텀 클래스
<Card className="my-custom-card">
  <p>커스텀 스타일 적용</p>
</Card>
```

### ProgressBar
진행률 표시 컴포넌트

```tsx
import { ProgressBar } from '@/components';

// 기본 사용
<ProgressBar progress={50} />

// 라벨 숨기기
<ProgressBar progress={75} showLabel={false} />

// 커스텀 색상
<ProgressBar 
  progress={30} 
  color="#4CAF50" 
/>

// 커스텀 높이
<ProgressBar 
  progress={60} 
  height="20px" 
/>

// 실시간 진행률 (예: 테스트)
const [currentQuestion, setCurrentQuestion] = useState(0);
const totalQuestions = 12;
const progress = ((currentQuestion + 1) / totalQuestions) * 100;

<ProgressBar progress={progress} />
```

### Loading
로딩 인디케이터 컴포넌트

```tsx
import { Loading } from '@/components';

// 기본 사용
<Loading />

// 커스텀 텍스트
<Loading text="데이터를 불러오는 중..." />

// 크기 옵션
<Loading size="small" />
<Loading size="medium" />
<Loading size="large" />

// 텍스트 없이
<Loading text="" />

// 조건부 렌더링
{isLoading && <Loading />}

// 페이지 중앙 로딩
<div style={{ 
  minHeight: '100vh', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center' 
}}>
  <Loading size="large" text="준비 중입니다..." />
</div>
```

---

## 🎨 스타일 커스터마이징

### CSS 변수 활용

```css
/* global.css에서 정의된 변수들 */
:root {
  --primary: #FF6B9D;
  --secondary: #C44569;
  --accent: #FEC8D8;
  --background: #FFF5F7;
  --text-dark: #2C3E50;
  --text-light: #7F8C8D;
}

/* 커스텀 스타일에서 사용 */
.my-component {
  background: var(--primary);
  color: white;
  border: 2px solid var(--accent);
}
```

### 애니메이션 활용

```css
/* global.css에 정의된 애니메이션 */
.fade-in-element {
  animation: fadeIn 0.8s ease-out;
}

.slide-in-element {
  animation: slideIn 0.5s ease-out;
}

.bouncing-element {
  animation: bounce 2s ease-in-out infinite;
}

.pulsing-element {
  animation: pulse 2s ease-in-out infinite;
}
```

---

## 🖼️ SVG 캐릭터 사용법

```tsx
import { generateMBTICharacter, svgToBase64 } from '@/utils/characterGenerator';
import { mbtiResults } from '@/data/results';

// 컴포넌트 내부
const MyComponent = () => {
  const mbtiType = 'ENFP';
  const result = mbtiResults[mbtiType];
  
  // SVG 생성
  const characterSVG = generateMBTICharacter(mbtiType, result.color);
  const base64Image = svgToBase64(characterSVG);
  
  return (
    <div>
      {/* 방법 1: Base64 이미지로 사용 */}
      <img 
        src={base64Image} 
        alt={`${mbtiType} 캐릭터`}
        style={{ width: 200, height: 200 }}
      />
      
      {/* 방법 2: 직접 SVG 렌더링 */}
      <div 
        dangerouslySetInnerHTML={{ __html: characterSVG }}
        style={{ width: 200, height: 200 }}
      />
      
      {/* 방법 3: 배경 이미지로 사용 */}
      <div style={{
        width: 200,
        height: 200,
        backgroundImage: `url(${base64Image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} />
    </div>
  );
};
```

---

## 🔄 상태 관리 패턴

### 테스트 진행 상태

```tsx
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<Answer[]>([]);

// 답변 추가
const handleAnswer = (answer: Answer) => {
  setAnswers([...answers, answer]);
  setCurrentQuestion(prev => prev + 1);
};

// 이전 질문으로
const handlePrevious = () => {
  setCurrentQuestion(prev => prev - 1);
  setAnswers(prev => prev.slice(0, -1));
};
```

### 페이지 전환

```tsx
type Page = 'home' | 'test' | 'result';
const [currentPage, setCurrentPage] = useState<Page>('home');

// 페이지 이동
<Button onClick={() => setCurrentPage('test')}>
  테스트 시작
</Button>
```

---

## 📱 반응형 디자인 예제

```tsx
// 화면 크기에 따른 조건부 렌더링
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

return (
  <div>
    {isMobile ? (
      <Button size="small">모바일 버튼</Button>
    ) : (
      <Button size="large">데스크톱 버튼</Button>
    )}
  </div>
);
```

---

## 🎯 타입 안전성

```tsx
import type { MBTIType, Answer, Question } from '@/types';

// 타입 지정된 props
interface MyComponentProps {
  mbtiType: MBTIType;
  answers: Answer[];
  onComplete: (type: MBTIType) => void;
}

const MyComponent: React.FC<MyComponentProps> = ({
  mbtiType,
  answers,
  onComplete
}) => {
  // TypeScript가 타입을 체크합니다
  return <div>{mbtiType}</div>;
};
```

---

## 💡 팁과 모범 사례

### 1. 컴포넌트 재사용
```tsx
// ❌ 나쁜 예
<button className="custom-button button-primary">
  클릭
</button>

// ✅ 좋은 예
<Button variant="primary">
  클릭
</Button>
```

### 2. 의미있는 변수명
```tsx
// ❌ 나쁜 예
const x = questions.length;
const y = currentQuestion / x * 100;

// ✅ 좋은 예
const totalQuestions = questions.length;
const progress = (currentQuestion / totalQuestions) * 100;
```

### 3. 조건부 렌더링
```tsx
// ❌ 나쁜 예
{isLoading && <Loading />}
{!isLoading && <Content />}

// ✅ 좋은 예
{isLoading ? <Loading /> : <Content />}
```

### 4. 이벤트 핸들러
```tsx
// ❌ 나쁜 예
<Button onClick={someFunction()}>클릭</Button>

// ✅ 좋은 예
<Button onClick={someFunction}>클릭</Button>
<Button onClick={() => someFunction(arg)}>클릭</Button>
```

---

## 🚀 성능 최적화

### React.memo 사용
```tsx
import React, { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  // 복잡한 연산...
  return <div>{data}</div>;
});
```

### useCallback 사용
```tsx
import { useCallback } from 'react';

const MyComponent = () => {
  const handleClick = useCallback(() => {
    // 클릭 핸들러
  }, []);
  
  return <Button onClick={handleClick}>클릭</Button>;
};
```

---

이 가이드를 참고하여 프로젝트를 확장하고 커스터마이징하세요!
