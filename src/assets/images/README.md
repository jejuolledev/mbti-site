# MBTI 캐릭터 이미지

이 폴더에는 16가지 MBTI 유형별 캐릭터 이미지가 포함됩니다.

## 이미지 생성 방법

모든 캐릭터 이미지는 SVG 형식으로 **동적 생성**됩니다.

### 사용법

```typescript
import { generateMBTICharacter, svgToBase64 } from '@/utils/characterGenerator';
import { mbtiResults } from '@/data/results';

// 특정 MBTI 타입의 캐릭터 SVG 생성
const mbtiType = 'INTJ';
const color = mbtiResults[mbtiType].color;
const characterSVG = generateMBTICharacter(mbtiType, color);

// Base64로 변환하여 img 태그에 사용
const base64Image = svgToBase64(characterSVG);

// React 컴포넌트에서 사용
<img src={base64Image} alt={`${mbtiType} 캐릭터`} />

// 또는 직접 SVG로 렌더링
<div dangerouslySetInnerHTML={{ __html: characterSVG }} />
```

## 캐릭터 목록

| MBTI | 이모지 | 색상 | 타이틀 |
|------|--------|------|--------|
| INTJ | 🧙‍♂️ | #6B46C1 | 전략가 |
| INTP | 🔬 | #4299E1 | 논리술사 |
| ENTJ | 👑 | #D53F8C | 통솔자 |
| ENTP | 🎭 | #ED8936 | 변론가 |
| INFJ | 🦄 | #38B2AC | 옹호자 |
| INFP | 🌈 | #F687B3 | 중재자 |
| ENFJ | ✨ | #48BB78 | 선도자 |
| ENFP | 🎪 | #F6AD55 | 활동가 |
| ISTJ | 📊 | #2C5282 | 현실주의자 |
| ISFJ | 🛡️ | #5A67D8 | 수호자 |
| ESTJ | 📈 | #C05621 | 경영자 |
| ESFJ | 🤝 | #DD6B20 | 집정관 |
| ISTP | 🔧 | #2D3748 | 장인 |
| ISFP | 🎨 | #9F7AEA | 모험가 |
| ESTP | ⚡ | #E53E3E | 사업가 |
| ESFP | 🎉 | #F56565 | 연예인 |

## 이미지 커스터마이징

`src/utils/characterGenerator.ts` 파일에서 각 MBTI 타입별 SVG 템플릿을 수정할 수 있습니다.

### SVG 구조
- 배경 원 (투명도 20%)
- 얼굴 원
- 눈, 입 등 표정 요소
- 각 타입별 고유한 장식 요소
- 하단 이모지

## 장점

✅ **경량**: SVG이므로 이미지 파일 없이도 작동  
✅ **확장성**: 벡터 그래픽으로 무한 확대 가능  
✅ **커스터마이징**: 색상, 크기 동적 변경 가능  
✅ **성능**: 별도 HTTP 요청 없이 즉시 렌더링  
✅ **반응형**: 모든 화면 크기에서 선명하게 표시

## 정적 이미지 생성 (선택사항)

필요시 SVG를 PNG로 변환하여 저장할 수 있습니다:

```bash
npm install --save-dev svg-to-png-converter
node scripts/generate-images.js
```
