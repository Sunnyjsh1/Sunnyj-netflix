# GitHub에 프로젝트 업로드하기

## 1. Git 저장소 초기화

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
git init
```

## 2. 파일 추가

```bash
git add index.html
git add style.css
git add script.js
git add README.md
git add .gitignore
```

또는 모든 파일을 한번에 추가:

```bash
git add .
```

## 3. 첫 커밋

```bash
git commit -m "Initial commit: Netflix style movie website"
```

## 4. GitHub 원격 저장소 연결

```bash
git remote add origin https://github.com/Sunnyjsh1/Sunnyj-netflix.git
```

## 5. GitHub에 푸시

```bash
git branch -M main
git push -u origin main
```

## 주의사항

✅ **API 키 보안**: `script.js` 파일의 API 키는 이미 제거되어 있습니다. 
- `YOUR_API_KEY_HERE` 플레이스홀더가 있으므로 안전하게 업로드할 수 있습니다.
- 사용자는 자신의 API 키를 로컬에서 설정해야 합니다.
- API 키는 절대 GitHub에 커밋하지 마세요!
