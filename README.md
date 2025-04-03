# Devlog AI ✨

> AI 기반 개발자 블로그 & TIL 자동화 서비스

---

## 🚩 프로젝트 소개

**Devlog AI**는 개발자를 위한 AI 기반 블로그 & TIL 자동화 도구입니다.  
GPT를 활용하여 오늘 배운 내용(TIL)을 블로그 형식으로 자동으로 정리하고,  
Markdown, Notion, PDF, GitHub Pages 등으로 쉽게 Export할 수 있는 서비스입니다.

---

## 💡 주요 기능

- TIL 자동 정리 (GPT 기반)
- 회고 자동화 (주간 / 월간)
- 추천 제목 & 썸네일 자동 생성
- Markdown / Notion / PDF / Github Pages Export
- 작성 히스토리 관리
- 커스텀 템플릿 지원 (Pro)

---

## 🛠 기술 스택

- Frontend: Next.js (App Router) + TailwindCSS + Zustand
- Backend: Next.js API Routes + OpenAI GPT API
- Database: Supabase (Auth + Storage)
- 이미지 생성: DALL·E API
- 결제: Stripe
- 배포: Vercel

---

## 📦 프로젝트 구조 (예정)

```
/src
┣ /components
┣ /pages
┣ /api
┣ /hooks
┣ /lib
┣ /styles
┣ /types
```

---

## 📑 기능 상세

### 1️⃣ TIL 자동화

- 오늘 배운 내용을 입력하면 GPT가 블로그 포맷으로 정리

### 2️⃣ 회고 자동화

- 주간 / 월간 TIL을 모아서 자동으로 회고글 생성

### 3️⃣ Export 기능

- Markdown, PDF, Notion, GitHub Pages로 내보내기 지원

### 4️⃣ 썸네일 & 제목 추천

- GPT + DALL·E를 통한 썸네일 및 제목 자동 추천

### 5️⃣ 히스토리 관리

- 내가 작성한 모든 기록을 손쉽게 확인, 수정, 재다운로드

---

## 🟣 향후 계획

- Pro 요금제 적용
- 템플릿 커스텀 기능
- Product Hunt 런칭
- 개발자 커뮤니티 배포
