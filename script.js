// ============================================
// API 설정
// ============================================
// TMDB API 키를 발급받아 아래에 입력하세요.
// API 키 발급: https://www.themoviedb.org/settings/api
const API_KEY = 'YOUR_API_KEY_HERE'; // 여기에 API 키를 입력하세요

const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// 현재 상영 중인 영화 가져오기
async function fetchNowPlayingMovies() {
    // API 키 확인
    if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
        throw new Error('API 키가 설정되지 않았습니다. script.js 파일에서 API_KEY를 설정해주세요.');
    }
    
    try {
        const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
        console.log('API 요청 URL:', url.replace(API_KEY, '***'));
        
        const response = await fetch(url);
        
        console.log('응답 상태:', response.status, response.statusText);
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('API 응답 오류:', errorData);
            throw new Error(`API 오류 (${response.status}): ${errorData.status_message || response.statusText || '영화 데이터를 가져오는데 실패했습니다.'}`);
        }
        
        const data = await response.json();
        console.log('받은 영화 데이터:', data);
        return data.results;
    } catch (error) {
        console.error('영화 가져오기 오류 상세:', error);
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
            throw new Error('네트워크 오류: 인터넷 연결을 확인하거나 CORS 문제일 수 있습니다.');
        }
        throw error;
    }
}

// 영화 카드 생성
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const posterPath = movie.poster_path 
        ? `${IMAGE_BASE_URL}${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';
    
    const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';
    
    card.innerHTML = `
        <img src="${posterPath}" alt="${movie.title}" class="movie-poster" 
             onerror="this.src='https://via.placeholder.com/500x750?text=No+Image'">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-rating">⭐ ${rating}</div>
        </div>
    `;
    
    return card;
}

// 영화 목록 렌더링
async function renderMovies() {
    const container = document.getElementById('moviesContainer');
    
    try {
        container.innerHTML = '<div class="loading">영화를 불러오는 중...</div>';
        
        const movies = await fetchNowPlayingMovies();
        
        if (movies.length === 0) {
            container.innerHTML = '<div class="error">표시할 영화가 없습니다.</div>';
            return;
        }
        
        container.innerHTML = '';
        
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            container.appendChild(card);
        });
        
    } catch (error) {
        console.error('렌더링 오류:', error);
        container.innerHTML = `<div class="error">오류가 발생했습니다: ${error.message}<br><small>브라우저 콘솔(F12)에서 자세한 오류를 확인하세요.</small></div>`;
    }
}

// 페이지 로드 시 영화 목록 불러오기
document.addEventListener('DOMContentLoaded', renderMovies);
