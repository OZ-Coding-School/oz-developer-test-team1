import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    /* 배경 */
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      {/* 메인 카드 컨테이너 */}
      <div className="relative flex h-[524px] w-[326.02px] flex-col items-center justify-between overflow-hidden rounded-[24px] bg-white p-[32px] shadow-2xl">
        {/* 상단 구역 */}
        <div className="flex w-full flex-col items-center">
          {/* 캐릭터 이미지 */}
          <div className="flex h-[180px] items-center justify-center">
            <img
              src="/src/assets/Icon.webp"
              alt="Hamster"
              className="h-[128px] w-[128px] object-contain"
            />
          </div>

          {/* 제목 및 설명 */}
          <div className="text-center">
            <h1 className="text-text-heading text-[24px] leading-tight font-bold">
              나는 어떤 개발자일까 ?
            </h1>
            <p className="text-text-muted mt-2 text-[16px]">
              햄스터 개발자 유형 테스트
            </p>
          </div>

          {/* 안내 박스 */}
          <div className="bg-background mt-8 flex h-[72px] w-full items-center justify-center rounded-[14px]">
            <p className="text-primary text-center text-[14px] leading-tight font-semibold">
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
            onClick={() => navigate('/question')}
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
