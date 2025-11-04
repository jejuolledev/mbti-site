# 귀여운 MBTI 테스트 🎨

재미있고 귀여운 MBTI 성격 유형 테스트 웹사이트입니다!

## 🌟 주요 기능

- ⚡ **빠른 테스트**: 12개 질문으로 3분 완성
- 🎯 **정확한 분석**: 16가지 MBTI 유형의 상세한 설명
- 💕 **궁합 체크**: 나와 잘 맞는 유형 찾기
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- 🎨 **귀여운 UI/UX**: 부드러운 애니메이션과 귀여운 이모지

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: CSS3 (Custom Properties, Grid, Flexbox)
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 프로젝트 구조

```
mbti-site/
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   ├── pages/            # 페이지 컴포넌트 (Home, Test, Result)
│   ├── data/             # MBTI 질문 및 결과 데이터
│   ├── types/            # TypeScript 타입 정의
│   ├── styles/           # 글로벌 스타일
│   ├── assets/           # 이미지 및 미디어 파일
│   │   └── images/       # 더미 이미지 폴더
│   ├── App.tsx           # 메인 앱 컴포넌트
│   └── main.tsx          # 앱 엔트리 포인트
├── public/               # 정적 파일
├── .github/
│   └── workflows/        # GitHub Actions 워크플로우
├── index.html            # HTML 템플릿
├── package.json          # 의존성 및 스크립트
├── tsconfig.json         # TypeScript 설정
└── vite.config.ts        # Vite 설정
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📦 배포

### GitHub Pages 자동 배포

1. GitHub 저장소 생성
2. Settings > Pages에서 Source를 "GitHub Actions"로 설정
3. 코드를 푸시하면 자동으로 배포됩니다

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/mbti-site.git
git push -u origin main
```

### 수동 배포

```bash
npm run build
# dist 폴더의 내용을 호스팅 서비스에 업로드
```

## 🎨 커스터마이징

### 색상 테마 변경

`src/styles/global.css`의 CSS 변수를 수정하세요:

```css
:root {
  --primary: #FF6B9D;      /* 메인 색상 */
  --secondary: #C44569;    /* 보조 색상 */
  --accent: #FEC8D8;       /* 강조 색상 */
  --background: #FFF5F7;   /* 배경 색상 */
}
```

### 질문 수정

`src/data/questions.ts`에서 질문을 추가하거나 수정할 수 있습니다.

### MBTI 결과 수정

`src/data/results.ts`에서 각 MBTI 유형의 설명을 수정할 수 있습니다.

## 📝 라이선스

MIT License

## 🤝 기여하기

Pull Request는 언제나 환영입니다!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 문의

프로젝트에 대한 질문이나 제안이 있으시면 Issue를 열어주세요!

---

Made with 💕 by Your Name
