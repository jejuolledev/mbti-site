# 🚀 빠른 시작 가이드

귀여운 MBTI 테스트 프로젝트를 5분 안에 실행해보세요!

## 📋 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

## ⚡ 즉시 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 브라우저에서 확인
```
http://localhost:5173
```

끝! 🎉

---

## 📦 npm 명령어

| 명령어 | 설명 |
|--------|------|
| `npm install` | 의존성 설치 |
| `npm run dev` | 개발 서버 시작 (Hot reload) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | 코드 린팅 |

---

## 🏗️ 프로젝트 구조 (한눈에 보기)

```
mbti-site/
├── src/
│   ├── components/      # 재사용 컴포넌트
│   ├── pages/           # Home, Test, Result 페이지
│   ├── data/            # 질문, 결과, 설정 데이터
│   ├── utils/           # 유틸리티 함수
│   ├── styles/          # 글로벌 CSS
│   └── types/           # TypeScript 타입
├── public/              # 정적 파일
└── .github/             # CI/CD 설정
```

---

## 🎨 커스터마이징

### 색상 테마 변경
`src/styles/global.css` 파일에서 CSS 변수 수정:

```css
:root {
  --primary: #FF6B9D;      /* 메인 색상 */
  --secondary: #C44569;    /* 보조 색상 */
  --accent: #FEC8D8;       /* 강조 색상 */
  --background: #FFF5F7;   /* 배경 색상 */
}
```

### 질문 추가/수정
`src/data/questions.ts` 파일 편집:

```typescript
{
  id: 13,
  question: "새로운 질문?",
  options: [
    { text: "선택지 1", type: "E", emoji: "🎉" },
    { text: "선택지 2", type: "I", emoji: "🏠" }
  ]
}
```

### MBTI 결과 수정
`src/data/results.ts` 파일 편집:

```typescript
INTJ: {
  type: 'INTJ',
  title: '전략가',
  description: '새로운 설명...',
  // ... 나머지 필드
}
```

---

## 🚀 배포하기

### GitHub Pages (추천)

1. GitHub 저장소 생성
2. 코드 푸시:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mbti-site.git
git push -u origin main
```

3. Settings > Pages에서 Source를 "GitHub Actions"로 설정
4. 자동 배포 완료! 🎊

배포 URL: `https://YOUR_USERNAME.github.io/mbti-site/`

### 다른 호스팅 (Vercel, Netlify 등)

```bash
npm run build
```

`dist` 폴더를 호스팅 서비스에 업로드하면 됩니다.

---

## 🔧 문제 해결

### 포트가 이미 사용 중일 때
```bash
# 다른 포트로 실행
npm run dev -- --port 3000
```

### 빌드 오류
```bash
# node_modules 재설치
rm -rf node_modules package-lock.json
npm install
```

### TypeScript 오류
```bash
# 타입 체크
npx tsc --noEmit
```

---

## 📚 추가 문서

- [PROJECT_COMPLETION.md](./PROJECT_COMPLETION.md) - 프로젝트 완성 체크리스트
- [COMPONENT_GUIDE.md](./COMPONENT_GUIDE.md) - 컴포넌트 사용 가이드
- [README.md](./README.md) - 전체 프로젝트 문서

---

## 💡 팁

### 개발 중 Hot Reload가 작동하지 않을 때
Vite가 자동으로 브라우저를 새로고침합니다. 작동하지 않으면 수동 새로고침(F5)하세요.

### 성능 최적화
- 빌드 후 `npm run preview`로 프로덕션 성능 확인
- Chrome DevTools의 Lighthouse로 점수 체크

### 디버깅
- React DevTools 확장 프로그램 사용
- Console에서 state 확인: `console.log(state)`

---

## 🎯 다음 단계

1. ✅ 프로젝트 실행 완료
2. 🎨 디자인 커스터마이징
3. 📝 질문/결과 데이터 수정
4. 🚀 GitHub Pages에 배포
5. 📱 친구들과 공유!

---

## 🆘 도움이 필요하신가요?

- 버그 발견: GitHub Issues 생성
- 질문: GitHub Discussions 이용
- 기능 제안: Pull Request 환영!

---

**즐거운 개발 되세요! 🎉**
