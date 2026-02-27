const questionList = [
  {
    id: 1,
    text: '새로운 프로젝트를 시작할 때 가장 먼저 하는 일은?',
    options: [
      {
        text: '사용자가 볼 화면부터 디자인한다',
        type: 'frontend',
      },
      {
        text: '데이터베이스 구조를 먼저 설계한다',
        type: 'backend',
      },
    ],
  },
  {
    id: 2,
    text: '어떤 문제 해결에 흥미를 느끼나요?',
    options: [
      {
        text: '화면이 예쁘게 보이도록 만드는 것',
        type: 'frontend',
      },
      {
        text: '복잡한 로직과 알고리즘 구현',
        type: 'backend',
      },
    ],
  },
  {
    id: 3,
    text: '가장 관심 있는 기술 분야는?',
    options: [
      {
        text: '데이터 분석과 머신러닝',
        type: 'data',
      },
      {
        text: '모바일 앱 개발',
        type: 'mobile',
      },
    ],
  },
  {
    id: 4,
    text: '협업할 때 나의 역할은?',
    options: [
      {
        text: '프론트엔드와 백엔드 모두 다룬다',
        type: 'fullstack',
      },
      {
        text: '서버 배포와 인프라 관리',
        type: 'devops',
      },
    ],
  },
  {
    id: 5,
    text: '가장 만들고 싶은 프로젝트는?',
    options: [
      {
        text: '게임이나 인터랙티브 콘텐츠',
        type: 'gamedev',
      },
      {
        text: 'AI 챗봇이나 추천 시스템',
        type: 'ai',
      },
    ],
  },
];

export default questionList;
