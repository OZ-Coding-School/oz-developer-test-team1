// axios interceptor가 필요한 경우 해당 파일에 생성하여 연결하세요.
import { api } from './instance';

// 요청 인터셉터
api.interceptors.request.use(
  (config) => {
    console.log('🚀 API 요청 송신:', config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED') {
      alert('요청 시간이 초과되었습니다. 서버 상태를 확인해주세요.');
    }
    return Promise.reject(error);
  }
);
