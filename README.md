## Toolite

웹 클라이언트 사이드 기반의 **온라인 유틸리티 도구 모음**입니다.  
React, TypeScript, Vite로 개발되었으며 텍스트 처리와 PDF 파일 도구를 중심으로 확장 가능한 구조를 가지고 있습니다.

### 배포 주소

-   **서비스 URL**: `https://toollite.vercel.app`

---

## 🚀 주요 기능

### 텍스트 도구 (`/text/*`)

-   **공백 정리**
    -   **모든 공백 제거**: 텍스트에서 공백, 탭, 줄바꿈 등을 모두 제거
    -   **공백 하나로 합치기**: 연속된 공백을 하나의 공백으로 정규화
    -   입력과 동시에 결과가 실시간으로 반영되고, 원클릭 복사 기능 제공
-   **대소문자 변환**
    -   **UPPER / lower / Pascal / camel** 등 다양한 케이스 변환 지원
    -   입력 영역과 결과 영역을 분리한 위젯 UI (`CaseConvertWidget`)

### PDF 도구 (`/files/pdf`)

-   **PDF 병합**
    -   여러 개의 PDF 파일을 업로드 후 **드래그 앤 드롭으로 순서 변경**
    -   pdf-lib 기반으로 브라우저에서 직접 병합 처리
-   **파일 미리보기**
    -   pdfjs를 활용한 페이지 썸네일/미리보기

### 그 외 / 예정 기능

-   메인 페이지에서 텍스트 도구, 파일(PDF) 도구, 기타 도구(색상/계산기/날짜 등 예정)로 확장 가능하도록 설계

---

## 🛠 기술 스택

-   **Frontend**: React 18, TypeScript 5
-   **Build Tool**: Vite 6
-   **Styling**: Emotion (`@emotion/react`, `@emotion/styled`)
-   **Routing & SEO**
    -   **React Router v6** (`react-router`, `react-router-dom`)
    -   **React Helmet Async** (`react-helmet-async`)로 메타 태그/SEO 관리
-   **PDF 처리**
    -   `pdf-lib` – PDF 병합 등 클라이언트 측 PDF 조작
    -   `pdfjs-dist` – PDF 페이지 렌더링 및 미리보기
-   **Analytics**
    -   `@vercel/analytics` – 간단한 사용 통계 수집

---

## 📁 프로젝트 구조

```bash
src/
├── application/              # 애플리케이션 진입점
│   └── App.tsx               # 메인 App 컴포넌트
├── main.tsx                  # React 앱 부트스트랩
├── pages/                    # 라우팅과 연결된 페이지
│   ├── MainLayout.tsx        # 공통 레이아웃 (Header/Sidebar/Content/Footer)
│   ├── MainPage.tsx          # 메인 랜딩 페이지
│   ├── RemoveWhiteSpacePage.tsx
│   ├── CaseConvertPage.tsx
│   └── PdfToolsPage.tsx
├── features/                 # 기능별 도메인 모듈
│   ├── transform-string/     # 텍스트 변환 (공백 제거, 케이스 변환 등)
│   │   ├── components/
│   │   │   ├── RemoveWhiteSpaceWidget/
│   │   │   └── CaseConvertWidget/
│   │   └── lib/              # 문자열 변환 유틸 (case, 공통 로직 등)
│   └── pdf-tools/            # PDF 도구 (병합, 미리보기 등)
│       ├── components/
│       │   ├── FileUploadWidget/
│       │   ├── FilePreviewWidget/
│       │   └── PdfMergeWidget/
│       ├── hooks/            # 파일 리스트/드래그 정렬/미리보기 훅
│       └── lib/              # PDF 병합, MIME 검사, 썸네일 생성 등
├── shared/                   # 전역에서 재사용되는 레이어
│   ├── components/
│   │   ├── host/             # Button, Input, Textarea, Icon 등 기본 UI
│   │   ├── base/             # Option, RadioItem, IconButton 등 조합형 컴포넌트
│   │   ├── layout/           # Header, Sidebar, Content, Footer, Container
│   │   └── widget/           # TextToText, InputToInput, Toast 등 위젯
│   ├── consts/               # 공통 enum, 타입 등
│   ├── hooks/                # useDebounce, useToast 등 공통 훅
│   ├── lib/                  # logger, viewer 유틸 등
│   └── styles/               # 스타일 유틸, 믹스인
├── style/                    # 전역 스타일 레이어
│   ├── global.tsx            # GlobalStyle
│   └── theme.ts              # 테마, 컬러, 타이포그래피
└── asset/                    # 폰트 등 정적 리소스
```

Vite 경로 별칭을 활용해 다음과 같이 import를 단순화

-   **`@shared`**: `src/shared`
-   **`@features`**: `src/features`
-   **`@pages`**: `src/pages`
-   **`@style`**: `src/style`

---

## 🎨 아키텍처 & 컴포넌트 설계

### Feature-Sliced Design (FSD) 스타일

-   **Features**: `transform-string`, `pdf-tools`처럼 **도메인/기능 단위**로 모듈화
-   **Shared**: Design System 느낌의 공통 컴포넌트, 훅, 유틸을 모아 재사용성 극대화
-   **Pages**: 실제 URL 라우트와 1:1로 매칭되는 페이지 컴포넌트
-   **Application**: 전역 레이아웃, Helmet, Analytics 등 앱 레벨 설정

### 컴포넌트 레이어

-   **Host Components**: `Button`, `Input`, `Textarea`, `Icon` 등 실제 HTML 요소와 대응되는 가장 낮은 레벨의 단위 컴포넌트
-   **Base Components**: `Option`, `RadioItem`, `IconButton` 등 여러 Host 컴포넌트의 조합 및 Host 컴포넌트에 특화된 역할을 부여한 컴포넌트
-   **Layout Components**: `Header`, `Sidebar`, `Content`, `Footer`, `Container` 등 페이지 뼈대
-   **Widget Components**: `TextToText`, `InputToInput`, `RemoveWhiteSpaceWidget`, `PdfMergeWidget` 처럼 실제 “기능” 단위의 복합 컴포넌트

---

## 📝 사용법 (사용자 입장)

1. **메인 페이지 접속**
    - `https://toollite.vercel.app` 접속 시 메인 랜딩 페이지(`MainPage`)로 이동합니다.
2. **도구 선택**
    - 메인 카드 또는 사이드바에서 **텍스트 도구**(`/text/*`), **파일(PDF) 도구**(`/files/pdf`) 등을 선택합니다.
3. **입력 & 옵션 선택**
    - 제공되는 입력창에 텍스트 또는 파일을 넣고, 공백 제거/케이스 변환/파일 병합 등 원하는 옵션을 선택합니다.
4. **결과 확인 및 복사/다운로드**
    - 실시간으로 변환 결과를 확인하고, 버튼 한 번으로 **복사**하거나 **PDF 다운로드**할 수 있도록 구성됩니다.

---

## 🔧 개발 환경

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

---
