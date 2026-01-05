# Netflix 스타일 영화 웹사이트

TMDB API를 사용하여 현재 상영 중인 영화를 Netflix 스타일로 보여주는 웹사이트입니다.

## 기능

- 현재 상영 중인 영화 목록 표시
- 영화 포스터 이미지
- 영화 제목 및 평점 표시
- Netflix 스타일의 다크 테마 디자인
- 반응형 디자인 (모바일, 태블릿, 데스크톱 지원)
- 호버 효과

## 사용 기술

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- TMDB API

## 시작하기

### 필수 단계

1. 저장소를 클론하거나 다운로드합니다.
2. **`script.js` 파일에서 API 키를 설정하세요** (위의 "API 설정" 섹션 참조)
3. `index.html` 파일을 브라우저에서 엽니다.

### 로컬 서버로 실행 (권장)

CORS 문제를 피하기 위해 로컬 서버를 사용하는 것을 권장합니다:

```bash
# Python 3를 사용하는 경우
python -m http.server 8000

# Node.js를 사용하는 경우
npx http-server

# 그 다음 브라우저에서 http://localhost:8000 접속
```

## API 설정

⚠️ **중요**: 이 프로젝트를 사용하기 전에 TMDB API 키를 발급받아야 합니다.

### 1. API 키 발급받기

1. [TMDB](https://www.themoviedb.org/)에 계정을 만듭니다 (무료)
2. 로그인 후 [API 설정 페이지](https://www.themoviedb.org/settings/api)로 이동합니다
3. "Request an API Key"를 클릭하여 API 키를 신청합니다
4. API 키를 복사합니다

### 2. API 키 설정하기

`script.js` 파일을 열고 다음 부분을 찾아 API 키를 입력하세요:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE'; // 여기에 발급받은 API 키를 입력하세요
```

예시:
```javascript
const API_KEY = 'a7fe70de1a90b8aa051594cd38084451';
```

### 3. 보안 주의사항

- ⚠️ **절대 API 키를 GitHub나 공개 저장소에 업로드하지 마세요**
- API 키는 개인적으로 관리하세요
- API 키가 유출되면 즉시 TMDB에서 재발급받으세요

## 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.
