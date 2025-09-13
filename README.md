# Toolite

웹 클라이언트 사이드 기반 유틸 모음입니다. React, TypeScript, Vite를 사용하여 개발되었습니다.

## 🚀 주요 기능

### 텍스트 정리 도구

-   **모든 공백 제거**: 텍스트에서 모든 공백, 탭, 줄바꿈을 제거합니다
-   **공백 하나로 합치기**: 연속된 공백을 하나의 공백으로 변환합니다
-   **실시간 변환**: 입력과 동시에 결과를 확인할 수 있습니다
-   **원클릭 복사**: 변환된 결과를 클립보드에 복사할 수 있습니다

## 🛠 기술 스택

-   **Frontend**: React 18.3.1, TypeScript 5.6.2
-   **Build Tool**: Vite 6.0.5
-   **Styling**: Emotion

## 📁 프로젝트 구조

```
src/
├── application/          # 애플리케이션 진입점
│   └── App.tsx          # 메인 앱 컴포넌트
├── features/            # 기능별 모듈
│   └── transform-string/ # 텍스트 변환 기능
│       └── components/
│           └── RemoveWhiteSpaceWidget/ # 공백 제거 위젯
├── pages/               # 페이지 컴포넌트
│   ├── MainPage.tsx     # 메인 페이지
│   └── RemoveWhiteSpacePage.tsx # 공백 제거 페이지
├── shared/              # 공통 컴포넌트 및 유틸리티
│   ├── components/      # 재사용 가능한 컴포넌트
│   │   ├── host/        # 기본 UI 컴포넌트 (Button, Textarea 등)
│   │   ├── layout/      # 레이아웃 컴포넌트 (Header, Sidebar, Footer)
│   │   └── widget/      # 위젯 컴포넌트 (Option, TextToText)
│   ├── consts/          # 상수 정의
│   ├── hooks/           # 커스텀 훅
│   └── utils/           # 유틸리티 함수
├── style/               # 스타일 관련
│   ├── global.tsx       # 전역 스타일
│   └── theme.ts         # 테마 설정
└── utils/               # 공통 유틸리티
```

## 🎨 아키텍처 특징

### Feature-Sliced Design (FSD)

-   **Features**: 독립적인 기능 모듈
-   **Shared**: 재사용 가능한 공통 컴포넌트
-   **Pages**: 라우팅과 연결된 페이지 컴포넌트
-   **Application**: 앱의 진입점과 전역 설정

### 컴포넌트 설계

-   **Host Components**: 기본 UI 컴포넌트 (Button, Textarea, Radio 등)
-   **Layout Components**: 페이지 레이아웃 구성 요소
-   **Widget Components**: 복합 기능을 가진 위젯

## 🚀 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 빌드

```bash
npm run build
```

### 미리보기

```bash
npm run preview
```

## 📝 사용법

1. 웹사이트에 접속하면 자동으로 텍스트 정리 도구 페이지로 이동합니다
2. 변환할 텍스트를 입력창에 입력합니다
3. 원하는 변환 옵션을 선택합니다:
    - **모든 공백 제거**: 모든 공백을 완전히 제거
    - **공백 하나로 합치기**: 연속된 공백을 하나로 통합
4. 실시간으로 변환된 결과를 확인할 수 있습니다
5. **복사하기** 버튼을 클릭하여 결과를 클립보드에 복사할 수 있습니다
6. **초기화** 버튼으로 입력창을 비울 수 있습니다

## 🔧 개발 환경 설정

### TypeScript 설정

-   `tsconfig.json`: 메인 TypeScript 설정
-   `tsconfig.app.json`: 앱용 TypeScript 설정
-   `tsconfig.node.json`: Node.js용 TypeScript 설정

### Vite 설정

-   경로 별칭 설정으로 깔끔한 import 구문 사용
-   `@shared`, `@features`, `@pages` 등으로 모듈 경로 단축
