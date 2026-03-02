import React, { useState } from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const CHARACTER_DATA = [...Array(10)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: `${Math.random() * 3 + 2}s`,
}));

// 애니메이션 (변수 분리)
const FallingCharacters = () => {
  const icons = ['🐌', '🐨', '🐥', '🐝', '❄️'];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {CHARACTER_DATA.map((data, i) => (
        <div
          key={i}
          className="absolute animate-bounce opacity-20"
          style={{
            left: data.left,
            top: data.top,
            fontSize: '40px',
            animationDuration: data.duration,
          }}
        >
          {icons[i % icons.length]}
        </div>
      ))}
    </div>
  );
};

export default function HomePage() {
  const navigate = useNavigate();

  const [isExiting, setIsExiting] = useState(false);

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => navigate('/question'), 600);
  };

  return (
    /* 배경 */
    <div className="from-background relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b to-white p-4">
      <FallingCharacters />

      {/* 메인 카드 컨테이너 */}
      <div
        className={`relative flex h-[660px] w-[350px] flex-col items-center justify-between overflow-hidden rounded-[44px] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 ease-in-out ${isExiting ? '-translate-y-40 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        {/* 상단 구역 */}
        <div className="flex w-full flex-col items-center">
          {/* 캐릭터 이미지 */}
          <div className="flex h-45 animate-bounce items-center justify-center">
            <img
              src="/src/assets/Icon.webp"
              alt="Hamster"
              className="h-32 w-32 object-contain"
            />
          </div>

          {/* 제목 및 설명 */}
          <div className="text-center">
            {/* 제목 */}
            <h1 className="text-text-heading text-2xl leading-tight font-bold">
              나는 어떤 개발자일까 ?
            </h1>
            {/* 설명 */}
            <p className="text-text-description mt-2 text-base">
              햄스터 개발자 유형 테스트
            </p>
          </div>

          {/* 안내 박스 */}
          <div className="bg-background mt-10 flex h-24 w-full items-center justify-center rounded-[28px]">
            {/* 안내 문구 */}
            <p className="text-primary text-center text-sm leading-tight font-semibold">
              ✨ 5개의 질문으로 알아보는
              <br />
              나의 개발자 성향
            </p>
          </div>
        </div>

        {/* 하단 구역 */}
        <div className="mb-2 flex w-full flex-col items-center gap-8">
          {/* 시작하기 버튼 */}
          <Button
            label="시작하기"
            variant="primary"
            size="small"
            onClick={handleStart}
          />

          {/* 푸터 로고 */}
          <p className="text-text-muted text-[10px] font-normal tracking-widest uppercase">
            made with ❤️ Ozcoding
          </p>
        </div>
      </div>
    </div>
  );
}
